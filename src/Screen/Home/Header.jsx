import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header className="header ">
                    <div className="header__content container ">
                        <div className="row">
                            <div className="col-md-6 d-flex">
                                <div className="header-image">
                                    <img className="img-fluid" src="https://edumall.vn/static/version1574786512/frontend/Edumall/winstrike/default/images/logo_full.svg" width="50%" alt="" />
                                </div>
                                <div className="header-control">
                                    <input className="input-search" type="text" placeholder="tìm kiếm khóa học" />
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
                                    <button className="btn--white ">Đăng nhập</button>
                                    <button className="btn--red">Đăng ký</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
        )
    }
}
