import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

export default class Header extends Component {
  render() {
    return (
      <header className="header ">
        <div className="header__content container ">
          <div className="row">
            <div className="col-md-6 d-flex">
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                className="header-image"
              >
                <img
                  className="img-fluid mr-2"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjerlRIrbpIb5fWowESAjTpxE8NUAQcJ8ScyunzGOvCvgTjtgwpg&s"
                  width="50%" alt=""
                />{" "}
                CYBERIT
              </Link>


              <Search />
            </div>
            <div className="col-md-6  d-flex">
              <div className="header-card">
                <div>
                  <i className="fa fa-shopping-cart" aria-hidden="true" />
                  <i className="fa fa-heart" aria-hidden="true" />
                  <i className="fa fa-bell" aria-hidden="true" />
                </div>
              </div>
              <div className="header-user">
                <Link to="/signup" className="btn--white ">
                  Login{" "}
                </Link>
                <Link to="login" className="btn--red">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
