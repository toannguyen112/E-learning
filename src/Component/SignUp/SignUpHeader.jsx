import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SignUpHeader extends Component {
    render() {
        return (
            <div className="singUp-header">
                        <Link to="/"  style={{textDecoration : "none"}} className="sign-up-logo">
                        <img className="img-fluid mr-2" src="https://edumall.vn/static/version1585153576/frontend/Edumall/winstrike/default/images/logo_full.svg"  alt="" /> 
                        </Link>
                        <div className="sign-up-text">
                            <Link to="/Login">Login now</Link>
                        </div>
                    </div>
        )
    }
}
