import React, { Component } from "react";
import { Link } from "react-router-dom";
import { notify } from "../notify/Notify";

export default class MobileNavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSideBar: false,
      showContentCategory: false,
    };
  }

  OnShowContentCategory = () => {
    this.setState({
      showSideBar: true,
      showContentCategory: false,
    });
  };

  changeShowSideBar = () => {
    this.setState({
      showSideBar: !this.state.showSideBar,
      showContentCategory: true,
    });
  };

  showAccount = () => {
    const userLogin = JSON.parse(localStorage.getItem("userLogin"))
      ? JSON.parse(localStorage.getItem("userLogin"))
      : "";

    if (!userLogin) {
      return (
        <div className="wrapper__loign__signup">
          <Link to="/signup">Sign up</Link> / <Link to="/login">Log in</Link>
        </div>
      );
    } else {
      return (
        <div
          className="warpper__userAcount"
          onClick={() => this.changeShowSideBar()}
        >
          <div className="warpper__user__info">
            <div className="image__avarta">
              <img
                className=""
                src="https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg"
                alt=""
              />
              <div className="circleRed"></div>
            </div>
            <div className="userAccount">
              <h4 className="nameUser">Hi, {userLogin.taiKhoan} </h4>
              <h3 className="welcome">Welcome back</h3>
            </div>

          </div>
          <div className="arrow">
            <i className="fa fa-angle-right"></i>
          </div>
        </div>
      );
    }
  };
  handleLogOut = () => {
    localStorage.removeItem("userLogin");
    notify("success", "Logged out successfully");
    window.location.reload();
  };
  render() {
    return (
      <div className="warpper__mobile__nav">
        <div className="warpper__mobile__nav__content">
          {this.showAccount()}

          <div className="warrper__list__content">
            <h3 className="list__header">
              <div className="fa fa-setting"></div>
              Most popular
            </h3>
            <ul className="list__category">
              <li
                className="li list__categpry__item"
                onClick={() => this.OnShowContentCategory()}
              >
                <span className="category"> Web Development</span>
                <i className="fa fa-angle-right" />
              </li>
              <li className="li list__categpry__item">
                <span className="category"> Mobile Apps</span>
                <i className="fa fa-angle-right" />
              </li>
              <li
                className="li list__categpry__item"
                onClick={() => this.OnShowContentCategory()}
              >
                <span className="category"> Game Development</span>
                <i className="fa fa-angle-right" />
              </li>
              <li
                className="li list__categpry__item"
                onClick={() => this.OnShowContentCategory()}
              >
                <span className="category"> Finance</span>
                <i className="fa fa-angle-right" />
              </li>
              <li
                className="li list__categpry__item"
                onClick={() => this.OnShowContentCategory()}
              >
                <span className="category"> Entrepreneurship</span>
                <i className="fa fa-angle-right" />
              </li>
              <li
                className="li list__categpry__item"
                onClick={() => this.OnShowContentCategory()}
              >
                <span className="category">Data & Analytics</span>
                <i className="fa fa-angle-right" />
              </li>
              <li
                className="li list__categpry__item"
                onClick={() => this.OnShowContentCategory()}
              >
                <span className="category">Personal Transformation</span>
                <i className="fa fa-angle-right" />
              </li>
              <li
                className="li list__categpry__item"
                onClick={() => this.OnShowContentCategory()}
              >
                <span className="category">Graphic Design</span>
                <i className="fa fa-angle-right" />
              </li>
              <li
                className="li list__categpry__item"
                onClick={() => this.OnShowContentCategory()}
              >
                <span className="category">Digital Marketing</span>
                <i className="fa fa-angle-right" />
              </li>
              <li
                className="li list__categpry__item"
                onClick={() => this.OnShowContentCategory()}
              >
                <span className="category">IT Certification</span>
                <i className="fa fa-angle-right" />
              </li>
              <li
                className="li list__categpry__item"
                onClick={() => this.OnShowContentCategory()}
              >
                <span className="category">Personal Transformation</span>
                <i className="fa fa-angle-right" />
              </li>
              <li
                className="li list__categpry__item"
                onClick={() => this.OnShowContentCategory()}
              >
                <span className="category">All categories</span>
                <i className="fa fa-angle-right" />
              </li>
            </ul>
            <h3 className="list__header">
              <div className="fa fa-setting"></div>
              More for udemy
            </h3>
            <ul className="list__category">
              <li
                className="li list__categpry__item"
                onClick={() => this.OnShowContentCategory()}
              >
                <span className="category">Udemy for Business</span>
                <i className="fa fa-angle-right" />
              </li>
              <li
                className="li list__categpry__item"
                onClick={() => this.OnShowContentCategory()}
              >
                <span className="category">Get the app</span>
                <i className="fa fa-angle-right" />
              </li>
              <li
                className="li list__categpry__item"
                onClick={() => this.OnShowContentCategory()}
              >
                <span className="category">Invite friends</span>
                <i className="fa fa-angle-right" />
              </li>
              <li
                className="li list__categpry__item"
                onClick={() => this.OnShowContentCategory()}
              >
                <span className="category">Invite friends</span>
                <i className="fa fa-angle-right" />
              </li>
              <li
                className="li list__categpry__item"
                onClick={() => this.OnShowContentCategory()}
              >
                <span className="category">Invite friends</span>
                <i className="fa fa-angle-right" />
              </li>
              <li
                className="li list__categpry__item"
                onClick={() => this.OnShowContentCategory()}
              >
                <span className="category">Invite friends</span>
                <i className="fa fa-angle-right" />
              </li>
            </ul>
          </div>
        </div>

        {this.state.showSideBar ? (
          <div className="warpper__mobile__nav__sideDrawer">
            <div
              className="header__title__sideDrawer"
              onClick={() => this.changeShowSideBar()}
            >
              <i className="fa fa-angle-left" aria-hidden="true" />
              <span className="textMenu"> Menu</span>
            </div>
            {/* alert  */}

            {this.state.showContentCategory ? (
              <div className="list__mobile">
                <h3 className="list__header__sideDrawer">
                  <div className="fa fa-setting"></div>
                  Alerts
                </h3>
                <ul className="list__category__sideDrawer">
                  <li className="li list__categpry__item">
                    <span className="category">Notifications</span>
                  </li>
                  <Link to="/message">
                    <li className="li list__categpry__item">
                      <span className="category">Messages</span>
                    </li>
                  </Link>
                  <Link to="/favorites">
                    <li className="li list__categpry__item">
                      <span className="category">Wishlist</span>
                    </li>
                  </Link>
                </ul>
                {/* account  */}
                <h3 className="list__header__sideDrawer">
                  <div className="fa fa-setting"></div>
                  Account
                </h3>

                <ul className="list__category__sideDrawer">
                  <Link to="/user">
                    <li className="li list__categpry__item">
                      <span className="category">Account settings</span>
                    </li>
                  </Link>

                  <Link to="/pucharse-history">
                    <li className="li list__categpry__item">
                      <span className="category">Pucharse history</span>
                    </li>
                  </Link>
                </ul>

                {/* profile  */}
                <h3 className="list__header__sideDrawer">
                  <div className="fa fa-setting"></div>
                  Profile
                </h3>

                <ul className="list__category__sideDrawer">
                  <Link to="/user">
                    <li className="li list__categpry__item">
                      <span className="category">Public profile</span>
                    </li>
                  </Link>

                  <li
                    className="li list__categpry__item"
                    onClick={() => this.handleLogOut()}
                  >
                    <span className="category">Log out</span>
                  </li>
                </ul>
              </div>
            ) : (
                <div className="list__mobile">
                  <h3 className="list__header__sideDrawer">
                    <div className="fa fa-setting"></div>
                  All Web Development
                </h3>

                  <ul className="list__category__sideDrawer">
                    <li className="li list__categpry__item">
                      <span className="category">Web Development</span>
                    </li>
                    <li className="li list__categpry__item">
                      <span className="category">JavaScript</span>
                    </li>
                    <li className="li list__categpry__item">
                      <span className="category">React</span>
                    </li>
                    <li className="li list__categpry__item">
                      <span className="category">Angular</span>
                    </li>
                    <li className="li list__categpry__item">
                      <span className="category">Css</span>
                    </li>
                    <li className="li list__categpry__item">
                      <span className="category">PHP</span>
                    </li>
                    <li className="li list__categpry__item">
                      <span className="category">Node.Js</span>
                    </li>
                    <li className="li list__categpry__item">
                      <span className="category">Python</span>
                    </li>
                    <li className="li list__categpry__item">
                      <span className="category">WordPress</span>
                    </li>
                  </ul>
                </div>
              )}
          </div>
        ) : (
            ""
          )}
      </div>
    );
  }
}
