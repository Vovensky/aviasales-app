import React from 'react'

import TicketsList from '../TicketsList/TicketsList'
import Filter from '../Filter/Filter'
import { useGetSearchIdQuery } from '../../store/RTKquery/ticketsAPI'

import classes from './Body.module.scss'

export default function Body() {
  const { data } = useGetSearchIdQuery()
  return (
    <div className={classes['main-content']}>
      <Filter />
      <TicketsList id={data} />
    </div>
  )
}
