import React, { Component } from 'react'

export default class SignUpPage extends Component {
    render() {
        return (
            <div className="sign__up">
                <div className="container">
                    <div className="singUp-header">
                        <div className="sign-up-logo">
                        <img className="img-fluid mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjerlRIrbpIb5fWowESAjTpxE8NUAQcJ8ScyunzGOvCvgTjtgwpg&s" width="50%"  /> CYBERIT
                        </div>
                        <div className="sign-up-text">
                            <span>Đăng nhập</span>
                        </div>
                    </div>
                    <div className="sign-up-content">
                        <div className="row">
                            <div className="col-md-6">
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
                                        <input type="text" className="form-control" placeholder="Họ" />
                                        <input type="text" className="form-control" placeholder="Tên" />
                                        <input type="text" className="form-control" placeholder="Email" />
                                        <input type="text" className="form-control" placeholder="Mật khẩu" />
                                        <p className="rules">Bằng cách nhấp vào Đăng ký, bạn đồng ý với <a href="">Điều khoản, Quy chế hoạt động </a> và
                                    <a href=""> Chính sách bảo mật </a>
                                            của Edumall.</p>
                                        <button className="btn-sign">Đăng kí</button>
                                        <span>Đã có tài khoản ? <a href="">Đăng nhập</a></span>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="img-right">
                                    <img src="https://cdn.itviec.com/employers/blockdev/logo/social/QN3Ka1QtiUk8BgvR4sCurhH6/logo-03.png" className="img-fluid"  />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
