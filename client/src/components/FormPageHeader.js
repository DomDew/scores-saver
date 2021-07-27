// DEPENDENCIES
import React from 'react'
import { motion } from 'framer-motion'

export default function FormPageHeader(props) {
  return (
    <>
      <motion.div
        style={{ width: '100%' }}
        initial={ props.linkClicked ? {opacity: 0} : { y: -800 }}
        animate={ props.linkClicked ? {opacity: 1} : { y: 0 }}
        exit={ props.linkClicked ? {opacity: 0} : { y: -800 }}
        transition={{ duration: 1 }}
      >
        <header className="form-page-header">
          <h1>{props.headerLineOne}</h1>
          <h1>{props.headerLineTwo}</h1>
          <p>{props.subheader}</p>
        </header>
      </motion.div>
    </>
  )
}
