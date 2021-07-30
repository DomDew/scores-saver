// DEPENDENCIES
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import validator from 'validator'

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
  const [value, setValue] = useState({email: '', password: '', confirmPassword: ''})
  const [error, setError] = useState({email: 'Required', password: 'Required'})
  const { setItemWithExpiry } = useLocalStorage("access-token")

  const validate = (name, input) => {
    switch(name) {
      case 'email':
        if (validator.isEmail(input)) {
          setValue({...value, email: input})
          setError({...error, email: ''})
        } else {
          setError({...error, email: 'Please enter a valid email'})
        }
      break
      case 'password':
        if (input.length < 6) {
          setError({...error, password: 'Must have at least 6 characters'})
        } else if (!/\W/.test(input)) {
          setError({...error, password: 'Must contain at least 1 symbol'})
        } else if (input.length >= 6 && /\W/.test(input)) {
          setValue({...value, password: input})
          value.confirmPassword === '' ? setError({...error, password: 'Please confirm your password'}) : setError({password: ''})
        }
      break
      case 'confirm-password':
        if (input === value.password) {
          setValue({...value, confirmPassword: input})
          setError({...error, password: ''})
        } else {
          setError({...error, password: "Passwords don't match"})
        }
      break
      default:
        setError('No Input detected')
    }
  }
  
  const handleChange = (e) => {
    validate(e.target.name, e.target.value)
  }

  const handleClick = () => {
    setLinkClicked(true)
  }

  const handleSignUp = async () => {
    if (Object.values(error).every(el => el === '')) {
      setLoading(true)
  
      const hour = 3600000;
      
        try {
          const signupRes = await signup(value.email, value.password)
        
          setItemWithExpiry(signupRes.accessToken, hour)
          props.history.push("/dashboard")
        } catch (error) {
          setError({email: 'Something went wrong... please try again'})
        } finally {
          setLoading(false)
        }
      }

    setLoading(false)
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
        <ErrorMessage error={error.email} />
        <input className="logsignin-form-input" type="text" onChange={handleChange} name="email" placeholder="email"/>
        <ErrorMessage error={error.password} />
        <input className="logsignin-form-input" type="password" onChange={handleChange} name="password" placeholder="password" />
        <input className="logsignin-form-input" type="password" onChange={handleChange} name="confirm-password" placeholder="confirm password" />
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
        disabled={loading || !Object.values(error).every(el => el === '')}
      />
    </div>
  )
}
