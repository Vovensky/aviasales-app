import { add } from 'date-fns'

import classnames from './Ticket.module.scss'

function getFlightTime(datee, duration) {
  const date = new Date(`${datee}`)
  const result = add(date, { minutes: duration })
  const difference = new Date(result - date)
  return {
    flightTime: `${difference.getHours()} : ${difference.getMinutes()}`,
    inSky: `${date.getHours()}:${date.getMinutes()} - ${result.getHours()}:${result.getMinutes()}`,
  }
}

export default function Ticket(props) {
  const { ticket } = props
  const { price, carrier, segments } = ticket
  const marking = segments.map((segment) => {
    const dates = getFlightTime(segment.date, segment.duration)
    return (
      <div className={classnames.ticketContainer__info}>
        <div className={classnames.ticketContainer__Item}>
          {`${segment.origin} - ${segment.destination}`}
          <br />
          {dates.inSky}
        </div>
        <div className={classnames.ticketContainer__Item}>
          В пути
          <br />
          {dates.flightTime}
          <br />
        </div>
        <div className={classnames.ticketContainer__Item}>
          {`${segment.stops.length} ` }
          пересадки
          <br />
          {segment.stops.join(', ')}
        </div>
      </div>
    )
  })

  return (
    <div className={classnames.ticketContainer}>
      <div className={classnames.ticketContainer__header}>
        <div className={classnames.ticketContainer__price}>
          {price}
        </div>
        <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt="logo" className={classnames.ticketContainer__image} />
      </div>
      {marking}
    </div>
  )
}
