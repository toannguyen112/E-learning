import React, { Component } from 'react'
import LoginHeader from './LoginHeader'
import LoginForm from './LoginForm'

export default class Login extends Component {
    render() {
        return (
            <div className="sign__up">
                <div className="container">
                    <LoginHeader/>
                    <LoginForm history={this.props.history}/>
                   
                </div>
            </div >
        )
    }
}
