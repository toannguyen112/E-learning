import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header className="header ">
                    <div className="header__content container ">
                        <div className="row">
                            <div className="col-md-6 d-flex">
                                <NavLink to="/" className="header-image">
                                    <img className="img-fluid mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjerlRIrbpIb5fWowESAjTpxE8NUAQcJ8ScyunzGOvCvgTjtgwpg&s" width="50%"  /> CYBERIT
                                </NavLink>
                                <div className="header-control">
                                    <input className="input-search" type="text" placeholder="Search for anything" />
                                    <button className="btn-search"><i className="fa fa-search"></i></button>
                                </div>
                            </div>
                            <div className="col-md-6  d-flex">
                                <div className="header-card">
                                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                    <i class="fa fa-bell" aria-hidden="true"></i>



                                </div>
                                <div className="header-user">
                                    <button className="btn--white ">Login </button>
                                    <button className="btn--red">Sign up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
        )
    }
}
