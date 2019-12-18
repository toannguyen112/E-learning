import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SignUpHeader extends Component {
    render() {
        return (
            <div className="singUp-header">
                        <Link to="/"  style={{textDecoration : "none"}} className="sign-up-logo">
                        <img className="img-fluid mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjerlRIrbpIb5fWowESAjTpxE8NUAQcJ8ScyunzGOvCvgTjtgwpg&s" width="50%" alt="" /> CYBERIT
                        </Link>
                        <div className="sign-up-text">
                            <Link to="/Login">Đăng nhập</Link>
                        </div>
                    </div>
        )
    }
}
