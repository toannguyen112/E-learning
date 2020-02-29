import React, { Component } from "react";
import Profile from "./Profile";
import UserService from "../../Services/userService";
import Certificates from "./Certificates";
import Edit from "./Edit";
import Account from "./Account";
import { connect } from "react-redux";
import reduxAction from "../../Store/Action/action";
let userService = new UserService();

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: true,
      certificates: false,
      account: false,
      edit: false
    };
  }

  componentDidMount() {
    let userLogin = JSON.parse(localStorage.getItem("userLogin"));
    userService
      .personalInfo(userLogin.taiKhoan)
      .then(res => {
        this.props.dispatch(reduxAction("USER_PROFILE", res.data));
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChangeMenu = param => {
    this.setState(() => {
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
    let { userProfile } = this.props;
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
                <img
                  className="img-fluid"
                  src="http://graph.facebook.com/v2.10/172902427148211/picture"
                  alt=""
                />
              </div>
              <div className="user__info ">
                <h5> {userProfile.hoTen} </h5>
                <div>
                  <p>
                    <span>User</span> : {userProfile.taiKhoan}{" "}
                  </p>
                  <p>
                    <span>Password</span> : {userProfile.matKhau}{" "}
                  </p>
                </div>

                <p>Front-end Developer</p>
              </div>
              <div className="user__edit">
                <button
                  style={{ outline: "none" }}
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
                  <i className="fa fa-certificate mr-2" aria-hidden="true" />
                  Certificates
                </div>
                <div
                  className={`edit__profile ${
                    this.state.account ? "active" : ""
                  }`}
                  onClick={() => this.handleChangeMenu("account")}
                >
                  <i className="fa fa-user mr-2" aria-hidden="true" />
                  Account
                </div>
                <div
                  className={`edit__profile ${this.state.edit ? "active" : ""}`}
                  onClick={() => this.handleChangeMenu("edit")}
                >
                  <i className="fa fa-cogs mr-2" aria-hidden="true" />
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

const mapStateToProps = state => {
  return {
    userProfile: state.editUser
  };
};

export default connect(mapStateToProps)(User);
