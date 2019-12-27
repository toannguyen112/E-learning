import React, { Component } from "react";
import Profile from "./Profile";

// import Certificates from "./Certificates";
// import Edit from "./Edit";
// import Account from "./Account";



export default class User extends Component {
  
  
  render() {
    let userLogin = JSON.parse(localStorage.getItem("userLogin")) || {};
  
    
    return (
      <div className="user">
        <div className="container">
          <div className="row">
            <div className="col-md-3 user__category">
              <div className="user__avatar">
                <img className="img-fluid" src="/img/avatar.png" alt="" />
              </div>
              <div className="user__info">
                <h5>{userLogin.hoTen }</h5>
                <p>Front-end Developer</p>
              </div>
              <div className="user__edit">
                <button className="btn-profile">My profile</button>
                <div className="edit__profile">
                  <i className="fa fa-certificate" aria-hidden="true" />
                  Certificates
                </div>
                <div className="edit__profile">
                  <i className="fa fa-user" aria-hidden="true" />
                  Account
                </div>
                <div className="edit__profile">
                  <i className="fa fa-cogs" aria-hidden="true" />
                  Edit Profile
                </div>
              </div>
            </div>
            <div className="col-md-9 user__course">
              <Profile />

              {/* <Certificates />

              <Edit /> */}
              {/* <Account/> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
