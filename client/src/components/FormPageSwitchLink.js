// DEPENDENCIES
import React from 'react'
import { Link } from 'react-router-dom'

export default function FormPageSwitchLink(props) {
  return (
    <p className="form-switch">
      {props.pText}
      <Link to={{
        pathname: props.path,
        }} 
        onClick={props.handleClick}>{props.linkText}</Link> 
    </p>
  )
}
