import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LoginHeader extends Component {
  render() {
    return (
      <div className="singUp-header">
        <Link to="/" className="sign-up-logo" style={{ textDecoration: "none" }} >
          <img className="img-fluid mr-2"
            src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
            alt="" style={{ width: "110px" }}
          />{" "}

        </Link>
        <div className="sign-up-text">
          <Link to="/SignUp">Register for a new account</Link>
        </div>
      </div>
    );
  }
}
