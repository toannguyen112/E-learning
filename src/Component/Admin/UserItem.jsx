import React, { Component } from "react";
import UserService from "../../Services/userService";
import { DELETE_USER, EDIT_USER, UPDATE_USER } from "../../Store/Action/type";
import { notify } from "../notify/Notify";
import { connect } from "react-redux";
import reduxAction from "../../Store/Action/action";
let userService = new UserService();
class UserItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        taiKhoan: "",

        hoTen: "",
        soDT: "",
        maLoaiNguoiDung: "",
        maNhom: "",
        email: ""
      }
    };
  }

  onChange = e => {
    this.setState(
      {
        user: {
          ...this.state.user,
          [e.target.name]: e.target.value
        }
      },
      console.log(this.state.user)
    );
  };

  OnUpdate = user => {
    this.props.dispatch(reduxAction(EDIT_USER, user));
  };

  handleUpdate = () => {
    let { user } = this.state;

    this.props.dispatch(reduxAction(UPDATE_USER, user));
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");

    if (nextProps.userUpdate.taiKhoan !== prevState.user.taiKhoan) {
      return {
        ...prevState,
        user: nextProps.userUpdate
      };
    }
    return null;
  }
  onDeleteUser = () => {
    let { taiKhoan } = this.props.user;

    userService
      .deleteUser(this.props.user.taiKhoan)
      .then(res => {
        console.log(res.data);

        this.props.dispatch(reduxAction(DELETE_USER, taiKhoan));
        notify("success", "success");
      })
      .catch(err => {
        notify("error", "This account cannot be deleted");
      });
  };

  render() {
    let { user } = this.props;
    console.log(this.props.userUpdate);

    return (
      <tr>
        <td>
          <div className="name__wrapper d-flex">
            <img
              alt=""
              src="/img/avatar.png"
              style={{ height: "60px", width: "60px" }}
            />
            <div className="course__name ml-3">
              <h6 style={{ fontWeight: "bold" }}>{user.taiKhoan}</h6>
              <span className="badge badge-info">development</span>
            </div>
          </div>
        </td>
        <td>
          <h6>{user.hoTen}</h6>
        </td>
        <td>{user.soDt}</td>
        <td>{user.email}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#fix"
            onClick={() => this.OnUpdate(user)}
          >
            <i className="fa fa-pencil" aria-hidden="true" />
          </button>

          <div
            className="modal fade"
            id="fix"
            tabindex="-1"
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Update User</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label>Tài khoản : </label>
                    <input
                      name="taiKhoan"
                      type="text"
                      style={{ width: "100%" }}
                      onChange={this.onChange}
                      value={this.state.user.taiKhoan || {}}
                      disabled
                    />
                  </div>

                  <div className="form-group">
                    <label>Họ Tên : </label>
                    <input
                      name="hoTen"
                      type="text"
                      style={{ width: "100%" }}
                      onChange={this.onChange}
                      value={this.state.user.hoTen || {}}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email : </label>
                    <input
                      name="email"
                      type="text"
                      style={{ width: "100%" }}
                      onChange={this.onChange}
                      value={this.state.user.email || {}}
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone : </label>
                    <input
                      name="soDT"
                      type="text"
                      style={{ width: "100%" }}
                      onChange={this.onChange}
                      value={this.state.user.soDt || {}}
                    />
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={this.handleUpdate}
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-danger" onClick={this.onDeleteUser}>
            <i className="fa fa-user-times" aria-hidden="true" />
          </button>
        </td>
      </tr>
    );
  }
}
const mapStateToProps = state => ({
  userUpdate: state.editUser || {}
});

export default connect(mapStateToProps)(UserItem);
