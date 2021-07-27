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

  const handleLogin = () => {

  }

  return (
    <div className="main-container">
      <FormPageBackround linkClicked={linkClicked} />
      <FormPageHeader linkClicked={linkClicked} 
        headerLineOne="Welcome" 
        headerLineTwo="back" 
        subheader="Log-in to see your scores" 
      />
      
      <form className="logsignin-form">
        <input className="logsignin-form-input" type="text" name="email" placeholder="email"/>
        <input className="logsignin-form-input" type="password" name="password" placeholder="password" />
        <FormPageSwitchLink 
          pText="Dont have an account? " 
          linkText="Sign-up!"
          path="/signup"
          handleClick={handleClick}
        />
      </form>

      <FormPageAnimatedButton linkClicked={linkClicked} btnText="login" />
    </div>
  )
}
