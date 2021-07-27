// DEPENDENCIES
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// COMPONENTS
import SubmitButton from './SubmitButton'

// IMAGES
import formPageBackground from '../images/form-page-background.svg'

export default function Login(props) {
  const [linkClicked, setLinkClicked] = useState(props.location.fromLink);

  const handleClick = () => {
    setLinkClicked(true)
  }

  const handleLogin = () => {

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
          <h1>Welcome</h1>
          <h1>back</h1>
          <p>Log-in to see your scores</p>
        </header>
      </motion.div>
      <form className="logsignin-form">
        <input className="logsignin-form-input" type="text" name="email" placeholder="email"/>
        <input className="logsignin-form-input" type="password" name="password" placeholder="password" />
        <p>
          Don't have an account? <Link to={{
            pathname: "/signup",
            fromLink: true
            }} 
            onClick={handleClick}>Sign-up!</Link> 
        </p>
      </form>

        <motion.div
            initial={linkClicked ? {visibility: false} : {scaleX: 0}}
            animate={linkClicked ? {visibility: true} : {scaleX: 1}}
            exit={linkClicked ? {visibility: false} : {scaleX: 0}}
            transition={linkClicked ? { duration: 0 } : { duration: 0.5, ease: "easeInOut"}}
          >
            <SubmitButton btnText="login" />
          </motion.div>
    </div>
  )
}
