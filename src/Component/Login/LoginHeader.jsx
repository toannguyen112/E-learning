import React, { Component } from "react";
import {  Link } from "react-router-dom";

export default class LoginHeader extends Component {
  render() {
    return (
      <div className="singUp-header">
        <Link to="/" className="sign-up-logo"  style={{textDecoration : "none"}} >
          <img className="img-fluid mr-2"
            src="https://edumall.vn/static/version1578239592/frontend/Edumall/winstrike/default/images/logo_full.svg"
           alt=""
          />{" "}
          
        </Link>
        <div className="sign-up-text">
          <Link  to="/SignUp">Register for a new account</Link>
        </div>
      </div>
    );
  }
}
