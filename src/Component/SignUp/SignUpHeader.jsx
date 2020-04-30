import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SignUpHeader extends Component {
    render() {
        return (
            <div className="singUp-header">
                        <Link to="/"  style={{textDecoration : "none"}} className="sign-up-logo">
                        <img className="img-fluid mr-2" src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg" style={{width : "110px"}} alt="" /> 
                        </Link>
                        <div className="sign-up-text">
                            <Link to="/Login">Login now</Link>
                        </div>
                    </div>
        )
    }
}
