import React, { Component } from 'react'

export default class LoginForm extends Component {
    render() {
        return (
            <div className="sign-up-content">
            <div className="row">
                <div className="col-md-6 col-sm-6  col-lg-6">
                    <div className="title-sso">
                        <h1>Nền tảng giáo dục trực tuyến lớn nhất Đông Nam Á</h1>
                        <p>Nơi mọi người chia sẻ , khám phá và học hỏi bất cứ điều gì</p>
                    </div>
                    <div className="google-facebook">
                        <p>Đăng ký nhanh với</p>
                        <button href="">
                            <i className="fa fa-facebook-official" aria-hidden="true"></i>
                            <span>Facebook</span>
                        </button>
                        <button href="">
                            <i className="fa fa-google"></i>
                            <span>Google</span>
                        </button>

                    </div>
                    <div className="sign-form">
                        <p> Hoặc đăng kí ngay</p>
                        <form >

                            <input type="text" className="form-control" placeholder="Tài Khoản" />
                            <input type="text" className="form-control" placeholder="Mật khẩu" />

                            <button className="btn-sign">Đăng nhập</button>
                            <span><a href="">Quên mật khẩu</a></span>
                        </form>
                    </div>
                </div>
                <div className="col-md-6  col-sm-6 col-lg-6">
                    <div className="img-right">
                    <img src="https://cdn.itviec.com/employers/blockdev/logo/social/QN3Ka1QtiUk8BgvR4sCurhH6/logo-03.png" className="img-fluid"  />
                    </div>
                </div>

            </div>
        </div>
        )
    }
}
