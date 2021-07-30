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
  const [value, setValue] = useState({email: '', password: '', confirmPassword: ''})
  const [error, setError] = useState({email: '', password: ''})
  const { setItemWithExpiry } = useLocalStorage("access-token")

  const validate = (name, input) => {
    if (name === 'email') {
      if (validator.isEmail(input)) {
        setValue({email: input})
        setError({email: ''})
      } else {
        setError({email: 'Please enter valid email'})
      }
    }
    
    if (name === 'password') {
      console.log(input)
      console.log(validator.isStrongPassword(input, { minLength: 6 }))
      if (validator.isStrongPassword(input, {minLength: 6, minSymbols: 1})) {
        console.log('valid')
        setValue({password: input})
        setError({password: ''})
      } else if (input.length < 6) {
        console.log("weak")
        setError({password: 'Must have at least 6 characters'})
      } else {
        setError({password: 'Must contain at least 1 symbol'})
      }
    }
  }
  
  const handleChange = (e) => {
    validate(e.target.name, e.target.value)
  }

  const handleClick = () => {
    setLinkClicked(true)
  }

  // const handleSignUp = async () => {
  //   setLoading(true)
  //   setError({email: '', password: ''})
  //   const hour = 3600000;
  //   let userEmail
  //   let userPassword
  //   let validPassword
    
  //   validator.isEmail(email.value) ? userEmail = email.value : setError(...error, {email: 'Please input valid email'})
  //   password.value === confirmPassword.value ? userPassword = password.value : setError(...error, {password: "Passwords don't match"})
  //   validator.isStrongPassword(password.value, {
  //     minLength: 6
  //   }) ? validPassword = userPassword.value : setError(...error, {password: 'Requires at least 6 characters'})
    
  //   console.log(error)
  //   if (userEmail !== undefined && validPassword !== undefined) {
  //     try {
  //       const signupRes = await signup(userEmail, validPassword)
      
  //       setItemWithExpiry(signupRes.accessToken, hour)
  //       props.history.push("/dashboard")
  //     } catch (error) {
  //       setError('Something went wrong... please try again')
  //     } finally {
  //       setLoading(false)
  //     }
  //   }

  //   setLoading(false)
  // }

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
        <input className="logsignin-form-input" type="password" onChange={handleChange} name="password" placeholder="password (more than 6 characters)" />
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
        // onClick={handleSignUp}
        disabled={loading}
      />
    </div>
  )
}

// const useFormInput = initialValue => {
//   const [value, setValue] = useState(initialValue)
  
//   const validate = () => {

//   }

//   const handleChange = e => {
//     setValue(e.target.value)
//   }
//   return {
//     value,
//     onChange: handleChange
//   }
// }
