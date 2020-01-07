import React, { Component } from "react";
import { settings } from '../../config/settings'
import UserService from "../../Services/userService";
import reduxAction from "../../Store/Action/action";
import { LOGIN } from "../../Store/Action/type";
import { connect } from "react-redux";
import { notify } from '../notify/Notify'
let userService = new UserService();
class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        taiKhoan: "",
        matKhau: ""
      }
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSumit = e => {
    e.preventDefault();
    userService
      .UserLogin(this.state)
      .then(res => {
        localStorage.setItem(settings.userLogin, JSON.stringify(res.data));
        localStorage.setItem(settings.token, res.data.accessToken);
        this.props.dispatch(reduxAction(LOGIN, res.data));
       
        let user =JSON.parse(localStorage.getItem("userLogin"))
        if(user.maLoaiNguoiDung === "HV")
        {
          this.props.history.push("./");
          notify("", "Đăng nhập  Thành công");
        }
        if(user.maLoaiNguoiDung === "GV"){
          this.props.history.push("./admin");
        }
       

      })
      .catch(error => {
        notify("", "Đăng nhập thất bại  ");
      });
  };

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
              <form onSubmit={this.onSumit}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tài Khoản"
                  name="taiKhoan"
                  onChange={this.onChange}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mật khẩu"
                  name="matKhau"
                  onChange={this.onChange}
                />

                <button className="btn-sign">Đăng nhập</button>
                <span>
                  <a href="https://www.facebook.com/">Quên mật khẩu</a>
                </span>
              </form>
            </div>
          </div>
          <div className="col-md-6  col-sm-6 col-lg-6">
            <div className="img-right">
              <img
                src="https://cdn.itviec.com/employers/blockdev/logo/social/QN3Ka1QtiUk8BgvR4sCurhH6/logo-03.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(LoginForm);
