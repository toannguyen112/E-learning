import React, { Component } from "react";
import {  Link } from "react-router-dom";

export default class LoginHeader extends Component {
  render() {
    return (
      <div className="singUp-header">
        <div className="sign-up-logo">
          <img className="img-fluid mr-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjerlRIrbpIb5fWowESAjTpxE8NUAQcJ8ScyunzGOvCvgTjtgwpg&s"
           
          />{" "}
          CYBERIT
        </div>
        <div className="sign-up-text">
          <Link  to="/SignUp">Đăng kí tài khoản mới</Link>
        </div>
      </div>
    );
  }
}
