import React, { Component } from 'react'
import SignUpHeader from './SignUpHeader'
import SignUpForm from './SignUpForm'

export default class SignUp extends Component {
    render() {
        return (
            <div className="sign__up">
                <div className="container">
                   <SignUpHeader/>
                   <SignUpForm/>
                   
                </div>
            </div >
        )
    }
}
