import { add } from 'date-fns'

import classnames from './Ticket.module.scss'

function timerFormatter(number) {
  if (number < 10) return `0${number}`
  return number
}

function timerEditor(start, end, boolean) {
  if (boolean) {
    return `${timerFormatter(start.getHours())}:${timerFormatter(start.getMinutes())} - ${timerFormatter(end.getHours())}:${timerFormatter(end.getMinutes())}`
  }
  return `${timerFormatter(Math.trunc(start))} : ${timerFormatter(Math.trunc(end / (60 * 1000)))}`
}

function getFlightTime(datee, duration) {
  const date = new Date(`${datee}`)
  const result = add(date, { minutes: duration })
  const minutes = (duration * 60 * 1000) / (60 * 60 * 1000)
  const seconds = (duration * 60 * 1000) % (60 * 60 * 1000)
  return {
    flightTime: timerEditor(minutes, seconds, false), // `${Math.trunc(minutes)} : ${Math.trunc(seconds / (60 * 1000))}`,
    inSky: timerEditor(date, result, true), // `${date.getHours()}:${date.getMinutes()} - ${result.getHours()}:${result.getMinutes()}`,
  }
}

export default function Ticket(props) {
  const { ticket } = props
  const { price, carrier, segments } = ticket
  const transplantsSettings = {
    1: 'дкa',
    2: 'дки',
    3: 'дки',
  }
  const marking = segments.map((segment, index) => {
    const key = (segment.duration * index) / 5
    const dates = getFlightTime(segment.date, segment.duration)
    const stopsCount = segment.stops.length
    const message = stopsCount ? `${stopsCount} переса${transplantsSettings[stopsCount]}` : 'Без пересадок'
    return (
      <div className={classnames.ticketContainer__info} key={key}>
        <div className={classnames.ticketContainer__Item}>
          <span className={classnames.ticketContainer__textTitle}>{`${segment.origin} - ${segment.destination}`}</span>
          <span className={classnames.ticketContainer__textBody}>{dates.inSky}</span>
        </div>
        <div className={classnames.ticketContainer__Item}>
        <span className={classnames.ticketContainer__textTitle}>В пути</span>
        <span className={classnames.ticketContainer__textBody}>{dates.flightTime}</span>
        </div>
        <div className={classnames.ticketContainer__Item}>
        <span className={classnames.ticketContainer__textTitle}>{message}</span>
        <span className={classnames.ticketContainer__textBody}>{segment.stops.join(', ')}</span>
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
