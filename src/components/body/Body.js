import { React, useState } from 'react'

import TicketsList from '../TicketsList/TicketsList'
import Filter from '../Filter/Filter'
import Toolbar from '../toolbar/Toolbar'
import { useGetSearchIdQuery } from '../../store/RTKquery/ticketsAPI'

import classes from './Body.module.scss'

export default function Body() {
  const { data } = useGetSearchIdQuery()

  const [toolBarState, setToolBarState] = useState(0)
  // const [toolBarState, setToolBarState] = useState('')

  function increaseToolBarState(stop) {
    if (stop) setToolBarState(100)
    if (toolBarState >= 75) return
    setToolBarState(toolBarState + 10)
  }

  return (
    <>
      <Toolbar toolBarState={toolBarState} />
      <div className={classes['main-content']}>
        <Filter />
        <TicketsList id={data} checkToolBarState={(stop) => increaseToolBarState(stop)} />
      </div>
    </>
  )
}
