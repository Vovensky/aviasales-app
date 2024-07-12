import { React, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SortPanel from '../SortPanel/SortPanel'
import Ticket from '../Ticket/Ticket'
import Pagination from '../Pagination/Pagination'
import { useGetTicketsQuery } from '../../store/RTKquery/ticketsAPI'
import { addTicketsToStore } from '../../store/ticketStore'

import classnames from './TicketsList.module.scss'

function filterTickets(tenTickets, checkedTransplants) {
  return tenTickets.filter((elem) => {
    let isValueFound = false
    for (let i = 0; i < checkedTransplants.length; i += 1) {
      const currentElem = checkedTransplants[i]
      if (elem.segments[0].stops.length === currentElem.number || elem.segments[1].stops.length === currentElem.number) {
        isValueFound = true
        break
      }
    }
    return isValueFound
  })
}

export default function TicketsList(props) {
  const { id, checkToolBarState } = props
  const dispatch = useDispatch()
  const [errorNumber, setErrorNumber] = useState(0)
  const [page, setPage] = useState(1)
  const [sortingState, setSortingState] = useState('')
  const { data, refetch, error } = useGetTicketsQuery(id)
  const tickets = useSelector((state) => state.getTickets.tickets)
  const stop = useSelector((state) => state.getTickets.stop)
  const transplants = useSelector((state) => state.getTickets.transplants)

  useEffect(() => {
    const leverArm = !(errorNumber > 3)
    if (error) {
      if (error.originalStatus === 404) console.log('Ошибка 404')
      else {
        setErrorNumber(errorNumber + 1)
        refetch()
      }
    } else if (!stop && data && leverArm) {
        setErrorNumber(0)
        dispatch(addTicketsToStore({ data, transplants }))
        refetch()
        }
    if (data && !error) checkToolBarState(data.stop)
}, [id, data, error])

    const tenTickets = tickets.slice(page - 1, page * 10 - 1)
    const checkedTransplants = Object.values(transplants).filter((elem) => elem.value === true)
    const filteredTickets = filterTickets(tenTickets, checkedTransplants)
    let ticketsListMarkUp
    if (sortingState === 'price') {
      filteredTickets.sort((elem1, elem2) => elem1.price - elem2.price)
    } else if (sortingState === 'duration') {
      filteredTickets.sort((elem1, elem2) => {
        const sumDuration1 = Number(elem1.segments[0].duration) + Number(elem1.segments[1].duration)
        const sumDuration2 = Number(elem2.segments[0].duration) + Number(elem2.segments[1].duration)
        return sumDuration1 - sumDuration2
      })
    }
    if (error) {
      if (error.originalStatus === 404) ticketsListMarkUp = <div className={classnames.ticketList}> По данному запросу результаты отсутствуют </div>
      else if (errorNumber >= 3) ticketsListMarkUp = <div>Произошла ошибка на стороне сервера.Пожалуйста, обновите страницу</div>
      else {
        ticketsListMarkUp = filteredTickets.map((ticket, index) => {
          const key1 = Number(String(index).length + String(index))
          return (
            <Ticket ticket={ticket} key={key1} />
          )
        })
      }
    } else if (filteredTickets.length === 0) {
      ticketsListMarkUp = <div>Нет результатов</div>
    } else {
      ticketsListMarkUp = filteredTickets.map((ticket, index) => {
        const key1 = Number(String(index).length + String(index))
        return (
          <Ticket ticket={ticket} key={key1} />
        )
      })
    }
    return (
          <div className={classnames.ticketList}>
            <SortPanel sortingSettings={(mode) => setSortingState(mode)} mode={sortingState} />
            {ticketsListMarkUp}
            <Pagination moreTickets={() => setPage(page + 1)} />
          </div>
      )
}
