// DEPENDENCIES
import React from 'react'
import { motion } from 'framer-motion'

// COMPONENTS
import SubmitButton from './SubmitButton'

export default function FormPageAnimatedButton(props) {
  return (
    <>
      <motion.div
          initial={props.linkClicked ? {visibility: false} : {scaleX: 0}}
          animate={props.linkClicked ? {visibility: true} : {scaleX: 1}}
          exit={props.linkClicked ? {visibility: false} : {scaleX: 0}}
          transition={props.linkClicked ? { duration: 0 } : { duration: 0.5, ease: "easeInOut"}}
        >
          <SubmitButton btnText={props.btnText} onClick={props.onClick} disabled={props.disabled} />
    </motion.div>
    </>
  )
}