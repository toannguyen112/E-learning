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
          time: "25/11/2019 at 03:00",
        },
        {
          title: " Online payment down 10%",
          hinhAnh:
            "https://dvch1hlupt.cdn.hostvn.net/notification/image/khuye_n_ma_i_16.png",
          moTa:
            " Receive VNTRIP 10% voucher instantly for any course purchased",
          time: "25/11/2019 at 03:00",
        },
        {
          title: " Enter DEAL200",
          hinhAnh:
            "https://dvch1hlupt.cdn.hostvn.net/notification/image/1_1_3.png",
          moTa:
            " Receive VNTRIP 10% voucher instantly for any course purchased",
          time: "25/11/2019 at 03:00",
        },
      ],
    };
  }
  checkShowAccout = (currentUser) => {
    let userLogin = JSON.parse(localStorage.getItem("userLogin"));

    if (_.isEmpty(currentUser) && !userLogin) {
      return (
        <div className="header-user">
          <Link to="/login" className="button__login ">
            Login{" "}
          </Link>
          <Link to="/signup" className="button__signup">
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
              <img
                src="http://graph.facebook.com/v2.10/172902427148211/picture"
                alt="avatar"
              />
              <span>{userLogin.hoTen}</span>
              <div className="fa fa-caret-down"></div>
            </div>
          </div>
          <ul className="dropdown dropdown-menu">
            <Link to="/user" style={{ textDecoration: "none" }}>
              <li className="menu__item menu__item__user  ">
                <img
                  src="http://graph.facebook.com/v2.10/172902427148211/picture"
                  className="menu__item-img"
                  alt=""
                />
                <div className="menu__item-info">
                  <span className=" d-block menu__item-info__name">
                    {userLogin.hoTen}
                  </span>
                  <span className=" d-block menu__item-info__email">
                    {userLogin.email}
                  </span>
                </div>
              </li>
            </Link>

            <Link to="/message" style={{ textDecoration: "none" }}> <li className="menu__item">Messages</li></Link>
            <Link to="/pucharse-history" style={{ textDecoration: "none" }} >
              <li className="menu__item">Purchase history</li>
            </Link>
            <Link to="/user" style={{ textDecoration: "none" }}>
              <li className="menu__item">Account</li>
            </Link>

            <li className="menu__item">Help</li>
            <li className="menu__item" onClick={this.handleLogOut}>

              Log out
            </li>
            <div className="wrapper__eduma">
              <div className="eduma__for__business___teach">
                <div className="eduma__for__business___teach--title">
                  Udemy for Business
                </div>
                <div className="eduma__for__business___teach--body">
                  Bring learning to your company
                </div>
              </div>
              <div className="eduma__for__business___teach">
                <div className="eduma__for__business___teach--title">
                  Teach on Udemy
                </div>
                <div className="eduma__for__business___teach--body">
                  Share your knowledge with the world
                </div>
              </div>
            </div>
          </ul>
        </div>
      );
    }
  };
  handleLogOut = () => {
    this.props.setCurrentUser({});
    localStorage.removeItem("userLogin");
    notify("success", "Logged out successfully");
    this.props.history.push("/");
  };

  showHeaderCartItem = (cart) => {
    if (cart.length > 0) {
      return cart.map((item, index) => {
        return <HeaderItem course={item} key={index} />;
      });
    } else {
      return (
        <div
          className="p-2 text-center"
          style={{
            color: "#000",
            fontSize: "13px",
          }}
        >
          Your cart empty
          <p style={{ color: "#007791", fontWeight: "700", marginTop: "10px" }}>
            Keep Shoping
          </p>
        </div>
      );
    }
  };

  showHeaderCourseFavories = (courseFavories) => {
    if (courseFavories.length > 0) {
      return courseFavories.map((item, index) => {
        return <HeaderItemCourseFavories courseFavories={item} key={index} />;
      });
    } else {
      return (
        <div
          className="p-2 text-center"
          style={{ color: "#000", fontSize: "13px" }}
        >
          Your wishlist is empty.
          <p style={{ color: "#007791", fontWeight: "700", marginTop: "10px" }}>
            Explore courses
          </p>
        </div>
      );
    }
  };

  showNotifily = () => {
    return this.state.arrNotify.map((item, index) => {
      return <HeaderItemNotify item={item} key={index} />;
    });
  };
  goToCart = () => {
    this.props.history.push("/cart")

  }
  goWishlist = () => {
    this.props.history.push("/favorites")

  }


  render() {
    let { cart, courseFavories } = this.props;
    let { searchKeyword } = this.props.display;

    return (
      <header className="header ">
        <div className="header__content container">
          <div className="header__left">
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className="header-image"
            >
              <img
                className="img-fluid mr-2"
                src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
                alt=""
              />{" "}
            </Link>

            <Search
              searchKeyword={searchKeyword}
              history={this.props.history}
            />
          </div>

          <div className="header__right">
            <div className="header-card ">

              <div className="header__card__noti">
                <i className=" icon__noti  fa fa-shopping-cart" />
                <span className="badge__length">{cart.length}</span>

                <div className="header__items">
                  <div className="header__item__content">
                    {this.showHeaderCartItem(cart)}
                  </div>

                  {cart.length ? (
                    <div className="btn__goToWistlist">
                      <div className="btn__goToWistlist__button__price">
                        Total :<span className="price__new"> $75.6$</span><span className="price__old"> $64.903</span>
                      </div>
                      <button className="btn__goToWistlist__button" onClick={() => { this.goToCart() }}>
                        Go to Cart

                        </button>
                    </div>
                  ) : (
                      ""
                    )}
                </div>
              </div>


              <div className="header__card__noti">
                <i className=" icon__noti  fa fa-heart" aria-hidden="true" />
                <span className="badge__length">{courseFavories.length}</span>
                <div className="header__items">
                  <div className="header__item__content">
                    {this.showHeaderCourseFavories(courseFavories)}
                  </div>

                  {courseFavories.length ? (
                    <div className="btn__goToWistlist">
                      <button className="btn__goToWistlist__button" onClick={() => { this.goWishlist() }} >
                        Go to Wishlist
                        </button>
                    </div>
                  ) : (
                      ""
                    )}
                </div>
              </div>

              <div className="header__card__noti">
                <i className=" icon__noti  fa fa-bell" />
                <span className="badge__length"> 0 </span>
                <div className="header__items">
                  <div className="notify">
                    <div className="notify__header">
                      <span className="text-notify">
                        Notifications
                      </span>
                      <i
                        className="fa fa-cog icon__noti "
                        aria-hidden="true"
                      />
                    </div>
                    <div className="notify__body">No notifications.</div>
                  </div>
                </div>
              </div>
            </div>
            {this.checkShowAccout(this.props.currentUser)}
          </div>
          <div className="icon__menu">
            <i className="fa fa-bars" aria-hidden="true" />
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    display: state.display,
    cart: state.cart,
    currentUser: state.currentUser,
    courseFavories: state.courseFavories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => {
      dispatch({
        type: "SET_CURRENT_USER",
        user,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
