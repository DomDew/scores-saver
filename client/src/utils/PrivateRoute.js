import React from 'react'
import { Route, Redirect } from 'react-router'
import authenticate from './authenticate'

export default function PrivateRoute({component: Component, ...rest}) {
  return (
    <Route {...rest} render={() => {
        return authenticate() === true ? Component : <Redirect to='/login' />
      }}
    />
  )
}
