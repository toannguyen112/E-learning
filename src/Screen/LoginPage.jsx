import React, { Component } from 'react'
import Login from '../Component/Login/Login'

export default class LoginPage extends Component {
    render() {
        return (
            <Login history ={this.props.history}/>
        )
    }
}
