import React from 'react'
import { Redirect } from "react-router-dom"

export const WithAuthRedirect = (Component) => {
   return class RedirectComponent extends React.Component {
        render(){
            if (!this.props.auth.id){ return <Redirect to={'/login'} /> }
                return (
            <Component {...this.props} />
        )
        }
    }
}