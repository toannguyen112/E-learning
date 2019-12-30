import React, { Component } from "react";
import Profile from "./Profile";
import UserService from "../../Services/userService";
import Certificates from "./Certificates";
import Edit from "./Edit";
import Account from "./Account";
import { connect } from "react-redux";
import reduxAction from '../../Store/Action/action'
let userService = new UserService();

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: true,
      certificates: false,
      account: false,
      edit: false,
      // userProfile: {}

    };
  }

  componentDidMount() {
    let userLogin = JSON.parse(localStorage.getItem("userLogin"));
    userService
      .personalInfo(userLogin.taiKhoan)
      .then(res => {
       
        // this.setState(prve => {
        //   return { userProfile: res.data };
        // });
        this.props.dispatch(reduxAction("USER_PROFILE",res.data))
       
      })
      .catch(err => {
        console.log(err);
      });
  }



  handleChangeMenu = param => {
    this.setState(state => {
      return {
        profile: false,
        certificates: false,
        account: false,
        edit: false,
        [param]: true
      };
    });
  };






  showMenu = () => {
    let { profile, certificates, account, edit } = this.state;
    let {userProfile}= this.props
    if (profile) {
      return <Profile />;
    } else if (certificates) {
      return <Certificates />;
    } else if (account) {
      return <Account userProfile={userProfile} />;
    } else if (edit) {
      return <Edit userProfile={userProfile} />;
    }
  };

  render() {

    let { userProfile } = this.props;
    console.log(userProfile);
    

    return (
      <div className="user">
        <div className="container">
          <div className="row">
            <div className="col-md-3 user__category">
              <div className="user__avatar">
                <img className="img-fluid" src="/img/avatar.png" alt="" />
              </div>
              <div className="user__info">
                <h5> Name : {userProfile.hoTen} </h5>
                <p>Tài khoản : {userProfile.taiKhoan} </p>
                <p>Mật Khẩu : {userProfile.matKhau} </p>
                <p>Email : {userProfile.email}</p>
                <p>Front-end Developer</p>
              </div>
              <div className="user__edit">
                <button
                  className="btn-profile"
                  onClick={() => this.handleChangeMenu("profile")}
                >
                  My profile
                </button>
                <div
                  className={`edit__profile ${
                    this.state.certificates ? "active" : ""
                    }`}
                  onClick={() => this.handleChangeMenu("certificates")}
                >
                  <i className="fa fa-certificate" aria-hidden="true" />
                  Certificates
                </div>
                <div
                  className={`edit__profile ${
                    this.state.account ? "active" : ""
                    }`}
                  onClick={() => this.handleChangeMenu("account")}
                >
                  <i className="fa fa-user" aria-hidden="true" />
                  Account
                </div>
                <div
                  className={`edit__profile ${this.state.edit ? "active" : ""}`}
                  onClick={() => this.handleChangeMenu("edit")}
                >
                  <i className="fa fa-cogs" aria-hidden="true" />
                  Edit Profile
                </div>
              </div>
            </div>
            <div className="col-md-9 user__course">{this.showMenu()}</div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return{
    userProfile : state.editUser
  }
}




export default connect(mapStateToProps)(User)
