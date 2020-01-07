import React, { Component } from "react";

import Dashboard from "../Component/Admin/Dashboard";

import { Link } from "react-router-dom";
import Admin from "../Component/Admin/Admin";
// import Course from "../Component/Admin/Course";
// import User from "../Component/Admin/User";
export default class AdminPage extends Component {
  render() {
    return (
      <Admin history= {this.props.history}/>
    );
  }
}
