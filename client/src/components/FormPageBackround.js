// DEPENDENCIES
import React from 'react'
import { motion } from 'framer-motion'

// IMAGES
import formPageBackground from '../images/form-page-background.svg'

export default function FormPageBackround(props) {

  return (
    <>
      <motion.img
        initial={ props.linkClicked ? { scale: 10, rotate: "-20deg" } : { y: -800 }}
        animate={ props.linkClicked ? { scale: 1, rotate: "0deg" } : { y: 0 }}
        exit={ props.linkClicked ? { scale: 10, rotate: "-20deg" } : { y: -800 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        src={formPageBackground} 
        className="form-page-background" 
        alt="A green wave-form coverin the background of the header"
      />
    </>
  )
}
