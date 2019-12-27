import React, { Component } from 'react'
import SignUpHeader from './SignUpHeader'
import SignUpForm from './SignUpForm'

export default class SignUp extends Component {
    render() {
        let { history } = this.props

        return (
            <div className="sign__up">
                <div className="container">
                    <SignUpHeader />
                    <SignUpForm history={history} />

                </div>
            </div >
        )
    }
}
