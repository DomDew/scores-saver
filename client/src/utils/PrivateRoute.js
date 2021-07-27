import React from 'react'
import { Route, Redirect } from 'react-router'
import useLocalStorage from './useLocalStorage'

export default function PrivateRoute({component: Component, ...rest}) {
  const { getItemWithExpiry } = useLocalStorage("access-token")
  const accessToken = getItemWithExpiry()

  if (accessToken != null) {
    return (
      <Route {...rest}
        component={Component}
      />
    )
  } else {
    return (
      <Redirect to="/login" />
    )
  }
}
