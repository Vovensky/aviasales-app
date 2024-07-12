import { useSelector, useDispatch } from 'react-redux'
import React from 'react'
// import { useEffect } from 'react'

import { changeTransplants } from '../../store/ticketStore'

import classes from './Filter.module.scss'

export default function Filter() {
  const {
 ALL, ZERO, ONE, TWO, THREE,
} = useSelector((state) => state.getTickets.transplants)
  const dispatch = useDispatch()

  return (
      <section className={classes.filterPanel}>
      <h3 className={classes.filterPanel__article}>Количество пересадок</h3>
      <ul className={classes.filterPanel__list}>
        <li className={classes.filterPanel__listItem}>
          <label htmlFor="All" className={classes.filterPanel__label}>
            <input type="checkbox" id="All" name="transfers" onChange={() => dispatch(changeTransplants({ id: 'ALL', boolean: !ALL.value }))} checked={ALL.value} className={classes.checkBoxes__styled} />
            <div className={classes.filterPanel__labelText}>Все</div>
          </label>
        </li>
        <li className={classes.filterPanel__listItem}>
          <label htmlFor="0" className={classes.filterPanel__label}>
            <input type="checkbox" id="0" name="transfer" onChange={() => dispatch(changeTransplants({ id: 'ZERO', boolean: !ZERO.value }))} checked={ZERO.value} className={classes.checkBoxes__styled} />
            <div className={classes.filterPanel__labelText}>Без пересадок</div>
          </label>
        </li>
        <li className={classes.filterPanel__listItem}>
          <label htmlFor="1" className={classes.filterPanel__label}>
            <input type="checkbox" id="1" name="transfer" onChange={() => dispatch(changeTransplants({ id: 'ONE', boolean: !ONE.value }))} checked={ONE.value} className={classes.checkBoxes__styled} />
            <div className={classes.filterPanel__labelText}>1 пересадка</div>
          </label>
        </li>
        <li className={classes.filterPanel__listItem}>
          <label htmlFor="2" className={classes.filterPanel__label}>
            <input type="checkbox" id="2" name="transfer" onChange={() => dispatch(changeTransplants({ id: 'TWO', boolean: !TWO.value }))} checked={TWO.value} className={classes.checkBoxes__styled} />
            <div className={classes.filterPanel__labelText}>2 пересадки</div>
          </label>
        </li>
        <li className={classes.filterPanel__listItem}>
          <label htmlFor="3" className={classes.filterPanel__label}>
            <input type="checkbox" id="3" name="transfer" onChange={() => dispatch(changeTransplants({ id: 'THREE', boolean: !THREE.value }))} checked={THREE.value} className={classes.checkBoxes__styled} />
            <div className={classes.filterPanel__labelText}>3 пересадки</div>
          </label>
        </li>
      </ul>
      </section>
  )
}
