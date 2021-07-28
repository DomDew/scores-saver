import React, { useContext } from 'react'
import { UserContext } from '../utils/UserContext'
import { login } from '../utils/login'
import useLocalStorage from '../utils/useLocalStorage';

export default function LandingPage() {
  const { user, setUser } = useContext(UserContext);
  const { setItemWithExpiry, getItemWithExpiry } = useLocalStorage("access-token")

  console.log(getItemWithExpiry("access-token"))
  return (
  <>
    <h1>Landing Page</h1>
    <pre>{JSON.stringify(user, null, 2)}</pre>
    
    

    <button 
    onClick={async () => {
      const day = 60 * 60 * 24 * 1000;
      const user = await login();
      setUser(user.data)
      setItemWithExpiry(user.accessToken, day)
    }}
    >
      login
    </button>
  </>
  )
}
