import classnames from './Pagination.module.scss'

export default function Pagination(props) {
  const { moreTickets } = props
  return (
      <div className={classnames.pagination}>
          <button type="button" onClick={() => moreTickets()} className={classnames.pagination__button}>
            Типа пагинация
          </button>
      </div>
  )
}
