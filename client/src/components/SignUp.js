// DEPENDENCIES
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

// COMPONENTS
import FormPageAnimatedButton from './FormPageAnimatedButton'
import FormPageBackround from './FormPageBackround'
import FormPageHeader from './FormPageHeader'
import FormPageSwitchLink from './FormPageSwitchLink'
import ErrorMessage from './ErrorMessage'

// UTILS
import useLocalStorage from '../utils/useLocalStorage'
import { signup } from '../utils/signup'

const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    password: Yup.string()
      .required('Required')
      .min(6, 'Must have at least 6 characters')
      .matches(/\W/, 'Must contain at least 1 Symbol'),
    confirmPassword: Yup.string()
      .required('Must confirm password')
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  })

export default function Login(props) {
  const [linkClicked, setLinkClicked] = useState(props.location.fromLink)
  const [signupError, setSignupError] = useState(null)
  const { setItemWithExpiry } = useLocalStorage("access-token")

  const handleClick = () => {
    setLinkClicked(true)
  }

  const handleSignup = async (values, setSubmitting) => {
    setSignupError('')
    const day = 86400000
    try {
      const signupRes = await signup(values.email, values.password)

      setItemWithExpiry(signupRes.accessToken, day)
      props.history.push("/dashboard")
    } catch (error) {
      error.response.status === 401 ? setSignupError("Incorrect username or password!") : setSignupError("Something went wrong... please try again")
    }
    setSubmitting(false)
  }

  return (
    <div className="main-container">
      <FormPageBackround linkClicked={linkClicked} />
      <FormPageHeader linkClicked={linkClicked} 
        headerLineOne="Glad you are" 
        headerLineTwo="here" 
        subheader="Sign-up to track your scores" 
      />
      
      <motion.div 
        style={{position: 'relative', height: "60%"}}
        initial={linkClicked ? { visibility: false } : { opacity: 0 }}
        animate={linkClicked ? { visibility: true } : { opacity: 1 }}
        exit={linkClicked ? { visibility: false } : { opacity: 0 }}
        transition={linkClicked ? { duration: 0 } : { duration: 0.7 }}
      >
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: ''
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleSignup(values, setSubmitting)
          }}
        >
          {({ values, errors, touched, handleChange, isSubmitting, handleBlur }) => (
            <Form className="logsignin-form">
              <div className="form-group">
              <ErrorMessage error={signupError} />
                {errors.email && touched.email ? (
                  <ErrorMessage error={errors.email} />
                ) : null}
                <Field 
                  name="email" 
                  className={errors.email && touched.email ? "form-input form-input-error" : "form-input"}
                  type="text"
                  value={values.email}
                  placeholder="email"
                  onChange={handleChange}
                  error={touched.email && errors.email}
                />
                {(errors.password || errors.confirmPassword) && touched.password ? (
                <ErrorMessage error={errors.password ? errors.password : errors.confirmPassword} />
                ) : null}
                <Field 
                  name="password"
                  className={errors.password && touched.password ? "form-input form-input-error" : "form-input"}
                  type="password"
                  value={values.password}
                  placeholder="password"
                  onChange={handleChange}
                  error={touched.password && errors.password}
                />
                <Field 
                  name="confirmPassword"
                  className={errors.confirmPassword && touched.confirmPassword ? "form-input form-input-error" : "form-input"}
                  type="password"
                  value={values.confirmPassword}
                  placeholder="confirm password"
                  onChange={handleChange}
                  error={touched.confirmPassword && errors.confirmPassword}
                />
                <FormPageSwitchLink
                  pText="Already have an account? " 
                  linkText="Log-in!"
                  path="/login"
                  handleClick={handleClick}
                />
              </div>
              <FormPageAnimatedButton 
                btnText = {isSubmitting ? "Loading..." : "signup"}
                disabled={isSubmitting || errors.email || errors.password}
              />
            </Form>
          )}
        </Formik>
      </motion.div>
    </div>
  )
}
