import React from 'react'
import classes from './Button.module.css'

export default function Button(props) {
  const btnClasses = classes.btn + ' ' + (props.className ? props.className : '')
  return (
    <button className={btnClasses} onClick={props.onClick}>
        {props.children}
    </button>
  )
}
