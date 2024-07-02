import { useSelector, useDispatch } from 'react-redux'
import React from 'react'
// import { useEffect } from 'react'

import { checkBoxesSliceWorking } from '../../store/checkBoxes'

import classes from './Filter.module.scss'

export default function Filter() {
  const {
 ALL, ZERO, ONE, TWO, THREE,
} = useSelector((state) => state.checkBoxes)
  const dispatch = useDispatch()

  return (
    <form>
      <section className={classes.filterPanel}>
      <h3 className={classes.filterPanel__article}>Количество пересадок</h3>
      <ul className={classes.filterPanel__list}>
        <li className={classes.filterPanel__listItem}>
          <label htmlFor="All">
            <input type="checkbox" id="All" name="transfers" onChange={() => dispatch(checkBoxesSliceWorking({ id: 'ALL', boolean: !ALL }))} checked={ALL} />
            Все
          </label>
        </li>
        <li className={classes.filterPanel__listItem}>
          <label htmlFor="0">
            <input type="checkbox" id="0" name="transfer" onChange={() => dispatch(checkBoxesSliceWorking({ id: 'ZERO', boolean: !ZERO }))} checked={ZERO} />
            <span>Без пересадок</span>
          </label>
        </li>
        <li className={classes.filterPanel__listItem}>
          <label htmlFor="1">
            <input type="checkbox" id="1" name="transfer" onChange={() => dispatch(checkBoxesSliceWorking({ id: 'ONE', boolean: !ONE }))} checked={ONE} />
            1 пересадка
          </label>
        </li>
        <li className={classes.filterPanel__listItem}>
          <label htmlFor="2">
            <input type="checkbox" id="2" name="transfer" onChange={() => dispatch(checkBoxesSliceWorking({ id: 'TWO', boolean: !TWO }))} checked={TWO} />
            2 пересадки
          </label>
        </li>
        <li className={classes.filterPanel__listItem}>
          <label htmlFor="3">
            <input type="checkbox" id="3" name="transfer" onChange={() => dispatch(checkBoxesSliceWorking({ id: 'THREE', boolean: !THREE }))} checked={THREE} />
            3 пересадки
          </label>
        </li>
      </ul>
      </section>
    </form>

  )
}
