// DEPENDENCIES
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Redirect } from 'react-router'

// COMPONENTS
import FormPageAnimatedButton from './FormPageAnimatedButton'
import FormPageBackround from './FormPageBackround'
import FormPageHeader from './FormPageHeader'
import FormPageSwitchLink from './FormPageSwitchLink'
import ErrorMessage from './ErrorMessage'

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

  const handleLogin = async () => {
    setLoading(true)
    setError('')
    const hour = 3600000;
    try {
      const loginRes = await login(email.value, password.value)

      setItemWithExpiry(loginRes.accessToken, hour)
      props.history.push("/dashboard")
    } catch (error) {
      error.response.status === 401 ? setError("Incorrect username or password!") : setError("Something went wrong... please try again")
    } finally {
      setLoading(false)
    }
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
        style={{position: 'relative'}}
        className="logsignin-form"
        initial={linkClicked ? { visibility: false } : { opacity: 0 }}
        animate={linkClicked ? { visibility: true } : { opacity: 1 }}
        exit={linkClicked ? { visibility: false } : { opacity: 0 }}
        transition={linkClicked ? { duration: 0 } : { duration: 0.7 }}
      >
        <ErrorMessage error={error} style={{position: 'absolute', top: '-24px'}} />
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
