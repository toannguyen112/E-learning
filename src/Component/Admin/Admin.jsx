import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Course from "./Course";
import User from "./User";

export default class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dasboard: false,
      courses: true,
      users: false
    };
  }

  handleChangeMenu = param => {
    this.setState(state => {
      return {
        dasboard: false,
        courses: false,
        users: false,

        [param]: true
      };
    });
  };

  showMenu = () => {
    let { dasboard, users, courses } = this.state;
    if (dasboard) {
      return <Dashboard />;
    } else if (courses) {
      return <Course />;
    } else if (users) {
      return <User />;
    }
  };

  render() {
    return (
      <div className="admin">
        <div className="admin__header">
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link to="admin" className="navbar-brand">
              <i className="fa fa-cogs" aria-hidden="true"></i> Admin Panel
            </Link>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <i className="fa fa-home" aria-hidden="true" /> Home
    </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#1">
                    <i className="fa fa-power-off" aria-hidden="true" /> SignOut
    </a>
                </li>
              </ul>

            </div>
          </nav>
        </div>
        <div className="row admin__content">
          <div className=" col-sm-2 col-md-2 col-lg-2 col-xl-2 px-0">
            <div className="admin__manager">
              <div className="title">
                <i className="fa fa-connectdevelop" aria-hidden="true" />
                Management
              </div>
              <ul>
                <li onClick={() => this.handleChangeMenu("dasboard")}>
                  <i className="fa fa-database"></i>
                  Dashboard
                </li>
                <li onClick={() => this.handleChangeMenu("courses")}>
                  <i className="fa fa-graduation-cap"></i>
                  Courses
                </li>
                <li onClick={() => this.handleChangeMenu("users")}>
                  <i className="fa fa-user"></i>
                  Users 20
                </li>
                <li>
                  <i
                    className="fa fa-commenting-o"
                    onClick={() => this.handleChangeMenu("Messages")}
                  ></i>
                  Messages 6
                </li>
                <li>
                  <i className="fa fa-graduation-cap"></i>
                  Rules
                </li>
                <li>
                  <i className="fa fa-graduation-cap"></i>
                  Utilities
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10 admin__dashboard pl-4">
            {this.showMenu()}
          </div>
        </div>
      </div>
    );
  }
}
