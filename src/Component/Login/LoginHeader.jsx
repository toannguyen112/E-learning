import React, { Component } from "react";
import {  Link } from "react-router-dom";

export default class LoginHeader extends Component {
  render() {
    return (
      <div className="singUp-header">
        <Link to="/" className="sign-up-logo"  style={{textDecoration : "none"}} >
          <img className="img-fluid mr-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjerlRIrbpIb5fWowESAjTpxE8NUAQcJ8ScyunzGOvCvgTjtgwpg&s"
           alt=""
          />{" "}
          CYBERIT
        </Link>
        <div className="sign-up-text">
          <Link  to="/SignUp">Đăng kí tài khoản mới</Link>
        </div>
      </div>
    );
  }
}
