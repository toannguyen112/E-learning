import React, { Component } from "react";

import User from "../Component/User/User";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
export default class UserPage extends Component {
  render() {
    return (
      <div>
        <Header history={this.props.history} />
        <User/>
        <Footer />
      </div>
    );
  }
}
