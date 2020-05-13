import React, { Component } from 'react'

export default class Recom extends Component {
    render() {
        return (
            <div className="warpperRecom">
                <div className="container">
                    <h5 className="warpperRecom__title ">Topics recommended for you</h5>
                    <div className=" RecomBody">
                        <ul className="listRecom">
                            <li className="listRecom__item">
                                    Angular js
                            </li>
                            <li className="listRecom__item">
                            Typescript
                            </li>
                            <li className="listRecom__item">
                            Node.Js
                            </li>
                            <li className="listRecom__item">
                            Angular Material
                            </li>
                            <li className="listRecom__item">
                            AngularJS
                            </li>
                        </ul>
                        <ul className="listRecom">
                            <li className="listRecom__item">
                            Vue JS
                            </li>
                            <li className="listRecom__item">
                            Vuex
                            </li>
                            <li className="listRecom__item">
                            Laravel
                            </li>
                            <li className="listRecom__item">
                            JavaScript
                            </li>
                            <li className="listRecom__item">
                            React
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}
