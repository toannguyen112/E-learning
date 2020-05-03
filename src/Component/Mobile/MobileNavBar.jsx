import React, { Component } from "react";

export default class MobileNavBar extends Component {
  render() {
    let { closeMobileNavbar } = this.props;
    return (
      <div>
        {/* <div className="overPlay" onClick={() => closeMobileNavbar()}></div> */}
        <div className="warpper__mobile__nav">
          <div className="warpper__signUP__login">
            <button>Sign up / Log in</button>
            <ul className="list__category">
              <h3 className="list__header">
              <div className="fa fa-setting"></div>
              <i className="fa fa-chrome" aria-hidden="true"></i>
                Most popular</h3>
              <li className="li list__categpry__item">
                <span className="category"> Web Development</span>
                <i className="fa fa-angle-right" />
              </li>
              <li className="li list__categpry__item">
                <span className="category"> Mobile Apps</span>
                <i className="fa fa-angle-right" />
              </li>
              <li className="li list__categpry__item">
                <span className="category"> Game Development</span>
                <i className="fa fa-angle-right" />
              </li>
              <li className="li list__categpry__item">
                <span className="category"> Finance</span>
                <i className="fa fa-angle-right" />
              </li>
              <li className="li list__categpry__item">
                <span className="category"> Entrepreneurship</span>
                <i className="fa fa-angle-right" />
              </li>
              <li className="li list__categpry__item">
                <span className="category">Data & Analytics</span>
                <i className="fa fa-angle-right" />
              </li>
              <li className="li list__categpry__item">
                <span className="category">Personal Transformation</span>
                <i className="fa fa-angle-right" />
              </li>
              <li className="li list__categpry__item">
                <span className="category">Graphic Design</span>
                <i className="fa fa-angle-right" />
              </li>
              <li className="li list__categpry__item">
                <span className="category">Digital Marketing</span>
                <i className="fa fa-angle-right" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
