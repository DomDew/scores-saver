import React, { useContext } from 'react'
import { UserContext } from '../utils/UserContext'
import { login } from '../utils/login'

export default function LandingPage() {
  const { user, setUser } = useContext(UserContext);

  return (
  <>
    <h1>Landing Page</h1>
    <pre>{JSON.stringify(user, null, 2)}</pre>
    <button 
    onClick={async () => {
      const user = await login();
      setUser(user)
    }}
    >
      login
    </button>
  </>
  )
}
