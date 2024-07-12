import classes from './SortPanel.module.scss'

export default function SortPanel(props) {
  const { sortingSettings, mode } = props
  let marking
  const classess = `${classes.sortPanel__visualButton} ${classes.sortPanel__visualButtonChecked} `
  if (mode === 'price') {
    marking = (
      <>
        <button type="button" className={classess} onClick={() => sortingSettings('price')}> Самый дешевый </button>
        <button type="button" className={classes.sortPanel__visualButton} onClick={() => sortingSettings('duration')}> Самый быстрый </button>
      </>
    )
  } else {
    marking = (
      <>
        <button type="button" className={classes.sortPanel__visualButton} onClick={() => sortingSettings('price')}> Самый дешевый </button>
        <button type="button" className={classess} onClick={() => sortingSettings('duration')}> Самый быстрый </button>
      </>
    )
  }
  return (
    <div className={classes.sortPanel}>
      {marking}
    </div>
  )
}
