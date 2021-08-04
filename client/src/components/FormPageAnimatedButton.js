// DEPENDENCIES
import React from 'react'
import { motion } from 'framer-motion'

// UTILS
import { useLinkClickedStore } from '../utils/linkClickedStore'

export default function FormPageAnimatedButton(props) {
  const linkClicked = useLinkClickedStore((state) => state.linkClicked)

  return (
    <>
      <motion.div
        initial={linkClicked ? {visibility: false} : {scaleX: 0}}
        animate={linkClicked ? {visibility: true} : {scaleX: 1}}
        exit={linkClicked ? {visibility: false} : {scaleX: 0}}
        transition={linkClicked ? { duration: 0 } : { duration: 0.5, ease: "easeInOut"}}
      >
          <button type="submit" className="btn-main" disabled={props.disabled}>{props.btnText}</button>
    </motion.div>
    </>
  )
}
