// DEPENDENCIES
import React from 'react'

export default function SubmitButton(props) {
  return (
    <button type="submit" onClick={props.onClick} className="btn-main" disabled={props.disabled}>{props.btnText}</button>
  )
}