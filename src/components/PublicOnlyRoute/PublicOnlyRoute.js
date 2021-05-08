import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import UserContext from '../../contexts/UserContext'

export default function PublicOnlyRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        <UserContext.Consumer>
          {userContext =>
           { 
             return !!userContext.user.id
              ? <Redirect to={`/${userContext.user.role}/${userContext.user.id}`} />
              : <Component {...componentProps} />}
          }
        </UserContext.Consumer>
      )}
    />
  )
}
