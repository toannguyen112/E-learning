import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import { connect } from "react-redux";
import _ from "lodash";
import { notify } from "../notify/Notify";
import HeaderItem from "./HeaderItem";
import HeaderItemCourseFavories from "./HeaderItemCourseFavories";
import HeaderItemNotify from "./HeaderItemNotify";

class Header extends Component {
  checkShowAccout = currentUser => {
    let userLogin = JSON.parse(localStorage.getItem("userLogin"));

    if (_.isEmpty(currentUser) && !userLogin) {
      return (
        <div className="header-user">
          <Link to="/login" className="btn--white ">
            Login{" "}
          </Link>
          <Link to="/signup" className="btn--red">
            Sign up
          </Link>
        </div>
      );
    } else {
      return (
        <div className="customer-menu menu-account">
          <div
            className=" toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
            role="button"
          >
            <div className="customer-name ">
              <img src="/img/avatar.jpg" alt="avatar" />
              <span>{userLogin.hoTen}</span>
              <div className="fa fa-caret-down"></div>
            </div>
          </div>
          <ul className="dropdown dropdown-menu">
            <Link to="./user" style={{ textDecoration: "none" }}>
              <li className="drop-item">Thông Tin Tài Khoản</li>
            </Link>
            <Link to="./favorites" style={{ textDecoration: "none" }}>
              <li className="drop-item">
                <span href="face.com">Danh Sách Yêu Thích</span>
              </li>
            </Link>
            <li className="drop-item" style={{ cursor: "pointer" }}>
              <span href="#" onClick={this.handleLogOut}>
                Đăng xuất <i className="fa fa-power-off mx-3" />
              </span>
            </li>
          </ul>
        </div>
      );
    }
  };
  handleLogOut = () => {
    this.props.setCurrentUser({});
    localStorage.removeItem("userLogin");
    notify("success", "Logged out successfully");

   
  };

  showHeaderCartItem = cart => {
    if (cart.length > 0) {
      return cart.map((item, index) => {
        return <HeaderItem course={item} key={index} />;
      });
    } else {
      return <div>cart (0)</div>;
    }
  };

  showHeaderCourseFavories = courseFavories => {
    if (courseFavories.length > 0) {
      return courseFavories.map((item, index) => {
        return <HeaderItemCourseFavories courseFavories={item} key={index} />;
      });
    } else {
      return <div>item (0)</div>;
    }
  };

  showNotifily = () => {
    let result = [];
    for (let i = 0; i < 4; i++) {
      result.push(<HeaderItemNotify/>)
    }
    return result
  }

  render() {
    let { cart, courseFavories } = this.props;
    let { searchKeyword } = this.props.display;
    console.log(cart);

    return (
      <header className="header ">
        <div className="header__content container ">
          <div className="row ">
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-6 d-flex">
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                className="header-image"
              >
                <img
                  className="img-fluid mr-2"
                  src="https://edumall.vn/static/version1578239592/frontend/Edumall/winstrike/default/images/logo_full.svg"
                  alt=""
                />{" "}
              </Link>

              <Search
                searchKeyword={searchKeyword}
                history={this.props.history}
              />
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-6  d-flex">
              <div className="header-card">
                <Link to="/cart" style={{ textDecoration: "none" }}>
                  <div className="alert-cart">
                    <i className="fa fa-shopping-cart" />
                    <span>{cart.length}</span>

                    <div className="header-cart-items">
                      <div className="header-cart-item">
                        {this.showHeaderCartItem(cart)}
                      </div>
                    </div>
                  </div>
                </Link>

                <Link to="./favorites" style={{ textDecoration: "none" }}>
                  <div className="alert-cart">
                    <i className="fa fa-heart" aria-hidden="true" />
                    <span>{courseFavories.length}</span>
                    <div className="header-cart-items">
                      <div className="header-cart-item">
                        {this.showHeaderCourseFavories(courseFavories)}
                      </div>
                    </div>
                  </div>
                </Link>

                <div className="alert-cart">
                  <i className="fa fa-bell" />
                  <span>5</span>
                  <div className="header-cart-items">
                    <div className="header-cart-item">
                      {this.showNotifily()}
                    </div>
                  </div>
                </div>
              </div>

              {this.checkShowAccout(this.props.currentUser)}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    display: state.display,
    cart: state.cart,
    currentUser: state.currentUser,
    courseFavories: state.courseFavories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => {
      dispatch({
        type: "SET_CURRENT_USER",
        user
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
