import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Course from "./Course";
import User from "./User";
import UserService from "../../Services/userService";
import reduxAction from "../../Store/Action/action";
import { FETCH_USER } from "../../Store/Action/type";
import { connect } from "react-redux";
import { notify } from "../notify/Notify";
let userService = new UserService();

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dasboard: true,
      courses: false,
      users: false
    };
  }

  componentDidMount() {
    userService
      .fetchListUser()
      .then(res => {
        this.props.dispatch(reduxAction(FETCH_USER, res.data));
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChangeMenu = param => {
    this.setState(() => {
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

  signOut = () => {
    this.props.dispatch(reduxAction("SET_CURRENT_USER", {}));
    localStorage.removeItem("userLogin");
    notify("success", "Logged out successfully");
    this.props.history.push("/");
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
                  <Link to="/" className="nav-link">
                    <i className="fa fa-home" aria-hidden="true" /> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#1" onClick={this.signOut}>
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
                <li
                  className={this.state.dasboard ? "active" : ""}
                  onClick={() => this.handleChangeMenu("dasboard")}
                >
                  <i className="fa fa-database"></i>
                  Dashboard
                </li>
                <li
                  className={this.state.courses ? "active" : ""}
                  onClick={() => this.handleChangeMenu("courses")}
                >
                  <i className="fa fa-graduation-cap"></i>
                  Courses
                </li>
                <li
                  className={this.state.users ? "active" : ""}
                  onClick={() => this.handleChangeMenu("users")}
                >
                  <i className="fa fa-user"></i>
                  Users 
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

export default connect()(Admin);
