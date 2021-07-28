// DEPENDENCIES
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import validator from 'validator';

// COMPONENTS
import FormPageAnimatedButton from './FormPageAnimatedButton'
import FormPageBackround from './FormPageBackround'
import FormPageHeader from './FormPageHeader'
import FormPageSwitchLink from './FormPageSwitchLink'
import ErrorMessage from './ErrorMessage'

// UTILS
import useLocalStorage from '../utils/useLocalStorage'
import { signup } from '../utils/signup'

export default function Login(props) {
  const [linkClicked, setLinkClicked] = useState(props.location.fromLink);
  const [loading, setLoading] = useState(false)
  const email = useFormInput('')
  const password = useFormInput('')
  const confirmPassword = useFormInput('')
  const [error, setError] = useState(null)
  const { setItemWithExpiry } = useLocalStorage("access-token")

  const handleClick = () => {
    setLinkClicked(true)
  }

  // const handleLogin = async () => {
  //   setLoading(true)
  //   setError('')
  //   const hour = 3600000;
  //   try {
  //     const loginRes = await login(email.value, password.value)

  //     setItemWithExpiry(loginRes.accessToken, hour)
  //     props.history.push("/dashboard")
  //   } catch (error) {
  //     error.response.status === 401 ? setError("Incorrect username or password!") : setError("Something went wrong... please try again")
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  const handleSignUp = async () => {
    setLoading(true)
    setError('')
    const hour = 3600000;
    let userEmail
    let userPassword
    validator.isEmail(email.value) ? userEmail = email.value : setError('Please enter a valid email')
    password.value === confirmPassword.value ? userPassword = password.value : setError("Passwords don't match")

    try {
      const signupRes = await signup(userEmail, userPassword)

      setItemWithExpiry(signupRes.accessToken, hour)
      props.history.push("/dashboard")
    } catch (error) {
      setError('Something went wrong... please try again')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="main-container">
      <FormPageBackround linkClicked={linkClicked} />
      <FormPageHeader linkClicked={linkClicked} 
        headerLineOne="Glad you are" 
        headerLineTwo="here" 
        subheader="Sign-up to track your scores" 
      />
      
      <motion.form 
        className="logsignin-form"
        style={{position: 'relative'}}
        initial={linkClicked ? { visibility: false } : { opacity: 0 }}
        animate={linkClicked ? { visibility: true } : { opacity: 1 }}
        exit={linkClicked ? { visibility: false } : { opacity: 0 }}
        transition={linkClicked ? { duration: 0 } : { duration: 0.7 }}
      >
        <ErrorMessage error={error} style={{position: 'absolute', top: '-24px'}} />
        <input className="logsignin-form-input" type="text" {...email} name="email" placeholder="email"/>
        <input className="logsignin-form-input" type="password" {...password} name="password" placeholder="password" />
        <input className="logsignin-form-input" type="password" {...confirmPassword} name="confirm-password" placeholder="confirm password" />
        <FormPageSwitchLink 
          pText="Already have an account? " 
          linkText="Log-in!"
          path="/login"
          handleClick={handleClick}
        />
      </motion.form>

      <FormPageAnimatedButton 
        linkClicked={linkClicked} 
        btnText={loading ? "loading..." : "signup"} 
        onClick={handleSignUp}
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
