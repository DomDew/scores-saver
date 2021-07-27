// DEPENDENCIES
import React, { useState } from 'react'

// COMPONENTS
import FormPageAnimatedButton from './FormPageAnimatedButton'
import FormPageBackround from './FormPageBackround'
import FormPageHeader from './FormPageHeader'
import FormPageSwitchLink from './FormPageSwitchLink'

export default function Login(props) {
  const [linkClicked, setLinkClicked] = useState(props.location.fromLink);

  const handleClick = () => {
    setLinkClicked(true)
  }

  const handleSignUp = () => {

  }

  return (
    <div className="main-container">
      <FormPageBackround linkClicked={linkClicked} />
      <FormPageHeader linkClicked={linkClicked} 
        headerLineOne="Glad you are" 
        headerLineTwo="here" 
        subheader="Sign-up to track your scores" 
      />
      
      <form className="logsignin-form">
        <input className="logsignin-form-input" type="text" name="email" placeholder="email"/>
        <input className="logsignin-form-input" type="password" name="password" placeholder="password" />
        <input className="logsignin-form-input" type="password" name="confirm-password" placeholder="confirm password" />
        <FormPageSwitchLink 
          pText="Already have an account? " 
          linkText="Log-in!"
          path="/login"
          handleClick={handleClick}
        />
      </form>

      <FormPageAnimatedButton linkClicked={linkClicked} btnText="login" />
    </div>
  )
}