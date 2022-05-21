import React from 'react'
import classes from './BodyWrapper.module.css'

export default function BodyWrapper(props) {
  return (
    <div className={classes.body}>{props.children}</div>
  )
}
