import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import UserService from '../../Services/userService'
import { notify } from '../notify/Notify'
let userService = new UserService()


class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taikhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      email: "",
      maNhom: "GP01",
      maLoaiNguoiDung: "HV"
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    userService.UserSignUp(this.state).then((res) => {

      notify("", "Đăng kí thành công")
      this.props.history.push("/login")



    }).catch((error) => {
      notify("", "Đăng kí thất bại")

    })


  }

  render() {
    return (
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
              <form onSubmit={this.onSubmit}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Họ Tên"
                  onChange={this.onChange}
                  name="hoTen"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  onChange={this.onChange}
                  name="email"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tài Khoản"
                  onChange={this.onChange}
                  name="taiKhoan"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mật khẩu"
                  onChange={this.onChange}
                  name="matKhau"
                />
                <p className="rules">
                  Bằng cách nhấp vào Đăng ký, bạn đồng ý với{" "}
                  <a href="https://www.facebook.com/">
                    Điều khoản, Quy chế hoạt động{" "}
                  </a>{" "}
                  và
                  <a href="https://www.facebook.com/"> Chính sách bảo mật </a>
                  của Edumall.
                </p>
                <button className="btn-sign">Đăng kí</button>
                <span>
                  Đã có tài khoản ? <Link to="/login">Đăng nhập</Link>
                </span>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-right">
              <img
                src="https://cdn.itviec.com/employers/blockdev/logo/social/QN3Ka1QtiUk8BgvR4sCurhH6/logo-03.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null)(SignUpForm)