import classes from './SortPanel.module.scss'

export default function SortPanel() {
  return (
    <div className={classes.sortPanel}>
      <button type="button" className={classes.sortPanel__button}>
        Самый дешевый
      </button>
      <button type="button" className={classes.sortPanel__button}>
        Самый быстрый
      </button>
      <button type="button" className={classes.sortPanel__button}>
        Оптимальный
      </button>
    </div>
  )
}
