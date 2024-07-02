import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SortPanel from '../SortPanel/SortPanel'
import Ticket from '../Ticket/Ticket'
import Pagination from '../Pagination/Pagination'
import { useGetTicketsQuery } from '../../store/RTKquery/ticketsAPI'
import { addTicketsToStore } from '../../store/ticketStore'

import classnames from './TicketsList.module.scss'

export default function TicketsList(props) {
  const { id } = props
  const { data, refetch, error } = useGetTicketsQuery(id)
  const dispatch = useDispatch()
  const tickets = useSelector((state) => state.getTickets.tickets)
  const checkBoxesState = useSelector((state) => state.checkBoxes)

  useEffect(() => {
    if (data) {
      dispatch(addTicketsToStore({ data, checkBoxesState }))
      if (!data.stop && tickets.length <= 1000) {
        console.log(tickets.length)
        try {
          refetch()
        } catch (err) {
          console.log(err)
        }
      } else if (error) {
        console.log(error)
      } else {
        console.log('stop')
      }
    }
  }, [id, data, error])

  if (tickets.length === 0) {
    return (
      <div>
        <SortPanel />
        <div>
          Здесь пока ничего нет.
        </div>
        <Pagination />
      </div>
    )
  }
  const firstTenTickets = tickets.slice(0, 10)
  const marking = firstTenTickets.map((ticket, index) => (
      <>
        {/* <SortPanel /> */}
        <Ticket ticket={ticket} key={(index * Math.random()).toFixed(2)} />
        {/* <Pagination /> */}
      </>
    ))
  return (
    <div className={classnames.ticketList}>
      {marking}
    </div>
  )
}
