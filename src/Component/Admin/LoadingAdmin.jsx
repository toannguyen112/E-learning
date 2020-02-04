import React, { Component } from 'react'

export default class LoadingAdmin extends Component {
    render() {
        return (
            <div className="loader">
                <div className="loader-inner">
                    <div className="loader-line-wrap">
                        <div className="loader-line" />
                    </div>
                    <div className="loader-line-wrap">
                        <div className="loader-line" />
                    </div>
                    <div className="loader-line-wrap">
                        <div className="loader-line" />
                    </div>
                    <div className="loader-line-wrap">
                        <div className="loader-line" />
                    </div>
                    <div className="loader-line-wrap">
                        <div className="loader-line" />
                    </div>
                </div>
            </div>

        )
    }
}
