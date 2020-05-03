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

      notify("success", "Registration successful")
      this.props.history.push("/login")



    }).catch((error) => {
      notify("error", "Registration failed")

    })


  }

  render() {
    return (
      <div className="sign-up-content">
        <div className="row">
          <div className="col-md-6">
            <div className="title-sso">
              <h1>
                The largest online education platform in Southeast Asia</h1>
              <p>
                Where people share, discover, and learn anything</p>
            </div>
            <div className="google-facebook">
              <p>Register fast with</p>
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
              <p>Or register now</p>
              <form onSubmit={this.onSubmit}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full name"
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
                  placeholder="Username"
                  onChange={this.onChange}
                  name="taiKhoan"
                />
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={this.onChange}
                  name="matKhau"
                />
                <p className="rules">

                  By clicking Sign up, you agree to{" "}
                  <a href="https://www.facebook.com/">

                    Terms, Operation Regulations{" "}
                  </a>{" "}
                  and
                  <a href="https://www.facebook.com/"> Privacy Policy </a>
                  of Edumall.
                </p>
                <button style={{ outline: "none" }} className="btn-sign">Sign up</button>
                <span className="haveAccount" >
                  Already have an account ? <Link to="/login">Login</Link>
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