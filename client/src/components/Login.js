// DEPENDENCIES
import React, { useState } from 'react'
import { motion } from 'framer-motion'

// COMPONENTS
import FormPageAnimatedButton from './FormPageAnimatedButton'
import FormPageBackround from './FormPageBackround'
import FormPageHeader from './FormPageHeader'
import FormPageSwitchLink from './FormPageSwitchLink'

// UTILS
import useLocalStorage from '../utils/useLocalStorage'
import { login } from '../utils/login'

export default function Login(props) {
  const [linkClicked, setLinkClicked] = useState(props.location.fromLink)
  const [loading, setLoading] = useState(false)
  const email = useFormInput('')
  const password = useFormInput('')
  const [error, setError] = useState(null)
  const { setItemWithExpiry } = useLocalStorage("access-token")

  const handleClick = () => {
    setLinkClicked(true)
  }

  const handleLogin = () => {
    setLoading(true)
    const hour = 3600000;
    // POST userdata, set access-token with response token, redirect if status 200 and token has been set, if not, set errors.
    login(email.value, password.value)
      .then(res => { 
          setItemWithExpiry(res.accessToken, hour)
        }
      ).catch(err => console.error(err))
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
