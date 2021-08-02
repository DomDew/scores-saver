// DEPENDENCIES
import React from 'react'
import { motion } from 'framer-motion'

export default function FormPageAnimatedButton(props) {
  return (
    <>
      <motion.div
          initial={props.linkClicked ? {visibility: false} : {scaleX: 0}}
          animate={props.linkClicked ? {visibility: true} : {scaleX: 1}}
          exit={props.linkClicked ? {visibility: false} : {scaleX: 0}}
          transition={props.linkClicked ? { duration: 0 } : { duration: 0.5, ease: "easeInOut"}}
        >
          <button type="submit" className="btn-main" disabled={props.disabled}>{props.btnText}</button>
    </motion.div>
    </>
  )
}
