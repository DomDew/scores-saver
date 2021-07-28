import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

export default function ErrorMessage(props) {
  if (props.error) {
    return (
      <p className="error-message" style={props.style}><FontAwesomeIcon icon={ faExclamationTriangle } /> {props.error}</p>
    )
  } else {
    return (
      <>
      </>
    )
  }
}
