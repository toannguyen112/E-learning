import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className="sign__up">
                <div className="container">
                    <div className="singUp-header">
                        <div className="sign-up-logo">
                            <img src="https://dvkhfbm6djrbs.cloudfront.net/5acc7360f161b700446f8349/5c2dd8a2f96d4d000caaeeda/Group 9@2x.png" alt="" />
                        </div>
                        <div className="sign-up-text">
                            <span>Đăng kí tài khoản mới</span>
                        </div>
                    </div>
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

                                        <button className="btn-sign">Đăng kí</button>
                                        <span><a href="">Quên mật khẩu</a></span>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6  col-sm-6 col-lg-6">
                                <div className="img-right">
                                    <img src="https://dvkhfbm6djrbs.cloudfront.net/59b9f18866667c01747f5b6b/root/all_device.png" className="img-fluid" alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
