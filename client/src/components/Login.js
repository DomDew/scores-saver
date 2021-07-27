// DEPENDENCIES
import React, { useState } from 'react'
import { motion } from 'framer-motion'

// COMPONENTS
import FormPageAnimatedButton from './FormPageAnimatedButton'
import FormPageBackround from './FormPageBackround'
import FormPageHeader from './FormPageHeader'
import FormPageSwitchLink from './FormPageSwitchLink'

export default function Login(props) {
  const axios = require('axios')
  const [linkClicked, setLinkClicked] = useState(props.location.fromLink)
  const [loading, setLoading] = useState(false)
  const email = useFormInput('')
  const password = useFormInput('')
  const [error, setError] = useState(null)

  const handleClick = () => {
    setLinkClicked(true)
  }

  const handleLogin = () => {
    setLoading(true)
    // POST userdata, set access-token with response token, redirect if status 200 and token has been set, if not, set errors.
    axios.post("http://localhost:3001/api/v1/login", {
      headers: {'Content-type': 'application/json'},
      user: {
        email: email.value,
        password: password.value
      }
    }).then(res => {
      console.log(res)
    })
  }

  return (
    <div className="main-container">
      <FormPageBackround linkClicked={linkClicked} />
      <FormPageHeader linkClicked={linkClicked} 
        headerLineOne="Welcome" 
        headerLineTwo="back" 
        subheader="Log-in to see your scores" 
      />
      
      <motion.form 
        className="logsignin-form"
        initial={linkClicked ? { visibility: false } : { opacity: 0 }}
        animate={linkClicked ? { visibility: true } : { opacity: 1 }}
        exit={linkClicked ? { visibility: false } : { opacity: 0 }}
        transition={linkClicked ? { duration: 0 } : { duration: 0.7 }}
      >
        <input className="logsignin-form-input" type="text" {...email} name="email" placeholder="email"/>
        <input className="logsignin-form-input" type="password" {...password} name="password" placeholder="password" />
        <FormPageSwitchLink 
          pText="Dont have an account? " 
          linkText="Sign-up!"
          path="/signup"
          handleClick={handleClick}
        />
      </motion.form>

      <FormPageAnimatedButton 
        linkClicked={linkClicked} 
        btnText={loading ? "loading..." : "login"} 
        onClick={handleLogin}
        disabled={loading}
      />
    </div>
  )
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue)
  
  const handleChange = e => {
    setValue(e.target.value)
  }
  return {
    value,
    onChange: handleChange
  }
}
