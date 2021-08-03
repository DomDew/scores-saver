// DEPENDENCIES
import React from 'react'
import { motion } from 'framer-motion'

// UTILS
import { useLinkClickedStore } from '../utils/linkClickedStore'

export default function FormPageHeader(props) {
  const linkClicked = useLinkClickedStore((state) => state.linkClicked)
  
  return (
    <>
      <motion.div
        className="header-animator"
        style={{ width: '100%' }}
        initial={ linkClicked ? {opacity: 0} : { y: -800 }}
        animate={ linkClicked ? {opacity: 1} : { y: 0 }}
        exit={ linkClicked ? {opacity: 0} : { y: -800 }}
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
