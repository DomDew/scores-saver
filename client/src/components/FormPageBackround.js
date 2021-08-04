// DEPENDENCIES
import React from 'react'
import { motion } from 'framer-motion'

// UTILS
import { useLinkClickedStore } from '../utils/linkClickedStore'

// IMAGES
import formPageBackground from '../images/form-page-background.svg'

export default function FormPageBackround(props) {
  const linkClicked = useLinkClickedStore((state) => state.linkClicked)

  return (
    <>
      <motion.img
        initial={ linkClicked ? { scale: 10, rotate: "-20deg" } : { y: -800 }}
        animate={ linkClicked ? { scale: 1, rotate: "0deg" } : { y: 0 }}
        exit={ linkClicked ? { scale: 10, rotate: "-20deg" } : { y: -800 } }
        transition={{ duration: 0.7, ease: "easeInOut" }}
        src={formPageBackground}
        className="form-page-background"
        alt="A green wave-form coverin the background of the header"
      />
    </>
  )
}
