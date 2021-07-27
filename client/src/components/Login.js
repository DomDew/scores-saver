// DEPENDENCIES
import React from 'react'
import { motion } from 'framer-motion'

// COMPONENTS
import MainButton from './MainButton'

// IMAGES
import formPageBackground from '../images/form-page-background.svg'

export default function Login() {
  return (
    <div className="main-container">
      <motion.img
          initial={{ y: -800 }}
          animate={{ y: 0 }}
          exit={{ y: -800}}
          transition={{ 
            duration: 0.7,
            ease: "easeInOut"
           }}
          src={formPageBackground} 
          className="form-page-background" 
          alt="A green wave-form coverin the background of the header"
        />
      
      <motion.div
        initial={{ y: -800 }}
        animate={{ y: 0 }}
        exit={{ y: -800}}
        transition={{ duration: 1 }}
      >
        <header className="form-page-header">
          <h1>Welcome <br />back</h1>
        </header>
      </motion.div>

      <motion.div
        initial={{scaleX: 0}}
        animate={{scaleX: 1}}
        exit={{scaleX: 0}}
        transition={{
          duration: 0.5,
          ease: "easeInOut"
        }}
      >
        <MainButton btnText="login" />
      </motion.div>
    </div>
  )
}
