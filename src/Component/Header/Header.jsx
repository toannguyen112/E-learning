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
  constructor(props) {
    super(props);

    this.state = {
      arrNotify: [
        {
          title: " 10% discount coupon ",
          hinhAnh:
            "https://dvch1hlupt.cdn.hostvn.net/notification/image/1_1_3.png",
          moTa:
            " Receive VNTRIP 10% voucher instantly for any course purchased",
          time: "25/11/2019 at 03:00"
        },
        {
          title: " Online payment down 10%",
          hinhAnh:
            "https://dvch1hlupt.cdn.hostvn.net/notification/image/khuye_n_ma_i_16.png",
          moTa:
            " Receive VNTRIP 10% voucher instantly for any course purchased",
          time: "25/11/2019 at 03:00"
        },
        {
          title: " Enter DEAL200",
          hinhAnh:
            "https://dvch1hlupt.cdn.hostvn.net/notification/image/1_1_3.png",
          moTa:
            " Receive VNTRIP 10% voucher instantly for any course purchased",
          time: "25/11/2019 at 03:00"
        }
      ]
    };
  }
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
              <li className="drop-item">
                <span>Account</span>
                <i className="fa fa-user-o ml-2" aria-hidden="true" />
              </li>
            </Link>
            <Link to="./favorites" style={{ textDecoration: "none" }}>
              <li className="drop-item">
                <span>Favorites</span>
                <i className="fa fa-heart-o ml-2" aria-hidden="true" />
              </li>
            </Link>
            <li className="drop-item" style={{ cursor: "pointer" }}>
              <span onClick={this.handleLogOut}>Log out</span>
              <i className="fa fa-power-off ml-3" aria-hidden="true" />
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
    this.props.history.push("/")

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
    return this.state.arrNotify.map((item, index) => {
      return <HeaderItemNotify item={item} key={index} />;
    });
  };

  render() {
    let { cart, courseFavories } = this.props;
    let { searchKeyword } = this.props.display;
    console.log(cart);

    return (
      <header className="header ">
        <div className="header__content container ">
          <div className="row ">
            <div className="col-6 d-flex header__left">
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                className="header-image"
              >
                <img
                  className="img-fluid mr-2"
                  src="https://edumall.vn/static/version1585153576/frontend/Edumall/winstrike/default/images/logo_full.svg"
                  alt=""
                />{" "}
              </Link>

              <Search
                searchKeyword={searchKeyword}
                history={this.props.history}
              />
            </div>
            <div className="col-6  d-flex  header__right">
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
            <div className="col-6 menu__bar">
             <i className="fa fa-bars" aria-hidden="true" />
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
