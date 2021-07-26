// DEPENDENCIES
import React from 'react'

// STYLES
import './styles/MainButton.scss'

export default function MainButton(props) {
  return (
    <>
    <button className="btn-main">{props.btnText}</button>
    </>
  )
}
