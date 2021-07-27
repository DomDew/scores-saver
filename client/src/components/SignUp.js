// DEPENDENCIES
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// COMPONENTS
import MainButton from './MainButton'

// IMAGES
import formPageBackground from '../images/form-page-background.svg'

export default function Login(props) {
  const [linkClicked, setLinkClicked] = useState(props.location.fromLink);
  
  const handleClick = () => {
    setLinkClicked(true)
  }

  return (
    <div className="main-container">

      <motion.img
        initial={linkClicked ? { scale: 10, rotate: "-20deg" } : { y: -800 }}
        animate={linkClicked ? { scale: 1, rotate: "0deg" } : { y: 0 }}
        exit={ linkClicked ? { scale: 10, rotate: "-20deg" } : { y: -800 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        src={formPageBackground} 
        className="form-page-background" 
        alt="A green wave-form coverin the background of the header"
      />
      
      <motion.div
        style={{ width: '100%' }}
        initial={linkClicked ? {opacity: 0} : { y: -800 }}
        animate={linkClicked ? {opacity: 1} : { y: 0 }}
        exit={linkClicked ? {opacity: 0} : { y: -800 }}
        transition={{ duration: 1 }}
      >
        <header className="form-page-header">
          <h1>Glad you are <br /> here</h1>
          <p>Sign-up to track your scores</p>
        </header>
      </motion.div>

      
      <p>Already have an account? <Link to={{
        pathname: "/login",
        fromLink: true
        }} 
        onClick={handleClick}>Log-in!</Link> </p>

      <motion.div
        initial={linkClicked ? {visibility: false} : {scaleX: 0}}
        animate={linkClicked ? {visibility: true} : {scaleX: 1}}
        exit={linkClicked ? {visibility: false} : {scaleX: 0}}
        transition={linkClicked ? { duration: 0 } : { duration: 0.5, ease: "easeInOut"}}
      >
        <MainButton btnText="sign-up" />
      </motion.div>
    </div>
  )
}
