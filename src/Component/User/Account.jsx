import React, { Component } from "react";

export default class Account extends Component {
  render() {
    return (
      <div className="acount">
        <h1>My Account</h1>
        <form action="">
          <div className="email">
            <h4>
              Your email address is: <span>nguyentoan@gmail.com</span>
            </h4>
          </div>
          <div className="password">
            <label>password</label>
            <input type="text" placeholder="Enter Current Password" />
            <input type="text" placeholder="Enter New Password" />
            <input type="text" placeholder="Re-type new Password" />
          </div>
          <button className="change__pass">Change Password</button>
        </form>
      </div>
    );
  }
}
