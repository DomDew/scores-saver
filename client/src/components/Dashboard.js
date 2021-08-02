import React from 'react'
import useLocalStorage from '../utils/useLocalStorage'

export default function Dashboard(props) {
  const { clearItem } = useLocalStorage("access-token")

  const logout = () => {
    clearItem()
    props.history.push("/")
  }

  return (
    <>
    <p>
      This is a dashboard...
    </p>

    <button onClick={logout}>logout</button>
    </>
  )
}
