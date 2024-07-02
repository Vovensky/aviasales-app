import React from 'react'

import Header from '../header/Header'
import Body from '../body/Body'

import classes from './Main.module.scss'

export default function Main() {
  return (
    <div className={classes.main}>
      <Header />
      <Body />
    </div>
  )
}
