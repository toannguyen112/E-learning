import React, { Component } from "react";

import Dashboard from "../Component/Admin/Dashboard";
import Course from "../Component/Admin/Course";
import User from "../Component/Admin/User";
export default class AdminPage extends Component {
  render() {
    return (
      <div className="admin">
        <div className="admin__header">
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
              <i className="fa fa-cogs" aria-hidden="true"></i> Admin Panel
            </a>
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
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    <i class="fa fa-home" aria-hidden="true"></i> Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#1">
                    <i class="fa fa-power-off" aria-hidden="true"></i> SignOut
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
                <li>
                  <i className="fa fa-database"></i>
                  Dashboard
                </li>
                <li>
                  <i className="fa fa-graduation-cap"></i>
                  Courses
                </li>
                <li>
                  <i className="fa fa-user"></i>
                  Users 20
                </li>
                <li>
                  <i className="fa fa-commenting-o"></i>
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

            <Dashboard />
            {/* <Course /> */}
            {/* <User/> */}
          </div>


        </div>
      </div>
    );
  }
}
