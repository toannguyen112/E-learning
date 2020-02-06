import React, { Component } from "react";
import UserItem from "./UserItem";
import UserService from "../../Services/userService";
import { connect } from "react-redux";
import { ADD_USER, SEARCH_USER } from "../../Store/Action/type";
import { notify } from "../notify/Notify";
let userService = new UserService();
class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        soDT: "",
        maLoaiNguoiDung: "HV",
        maNhom: "GP01",
        email: ""
      },
      search: ""
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

  onChangeSearch = e => {
    let { search } = this.state;
    this.setState(
      {
        search: e.target.value
      },
      this.props.handleSearch(search)
    );
  };

  onAddUser = () => {
    
    userService
      .addUser(this.state.user)
      .then(res => {
        this.props.addUser(res.data);
        notify("", "Thêm thành công");
      })
      .catch(err => {
        notify("", "tài khoản hoặc email đã tồn tại");
      });
  };

  render() {
    let { userList, searchKeyword } = this.props;

    console.log(searchKeyword);

    return (
      <div>
        <div className="title">
          <i className="fa fa-user"></i>
          My User
        </div>
        <div className="row users__manager">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 add__user">
            <button
              className="add__course"
              data-toggle="modal"
              data-target="#modelId"
            >
              <i className="fa fa-plus mr-1"></i> ADD User
            </button>
            <input
              type="text"
              name="search"
              placeholder="Search User"
              onChange={this.onChangeSearch}
              value={this.state.search}
            />
          </div>
        </div>
        {/* modal */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" style={{ fontWeight: "bold" }}>
                  Add New User
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
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
                  />
                </div>

                <div className="form-group">
                  <label>mật khẩu : </label>
                  <input
                    name="matKhau"
                    type="text"
                    style={{ width: "100%" }}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <label>Họ Tên : </label>
                  <input
                    name="hoTen"
                    type="text"
                    style={{ width: "100%" }}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <label>Email : </label>
                  <input
                    name="email"
                    type="text"
                    style={{ width: "100%" }}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <label>Phone : </label>
                  <input
                    name="soDT"
                    type="text"
                    style={{ width: "100%" }}
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={this.onAddUser}
                >
                  Add
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end modal */}

        <table className="table">
          <thead>
            <tr>
              <th>
                ID <i className="fa fa-sort-alpha-desc" aria-hidden="true" />
              </th>
              <th>Fullname </th>
              <th> Phone </th>
              <th> Email </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.showUser(userList, searchKeyword)}</tbody>
        </table>
      </div>
    );
  }

  showUser = (userList, searchKeyword) => {
    let result = null;
    let newArr = [...userList];
    if (userList && userList.length > 0) {
      if (searchKeyword && searchKeyword.length > 0) {
        newArr = newArr.filter(
          item =>
            item.taiKhoan
              .toLowerCase()
              .indexOf(searchKeyword.toLowerCase().trim()) !== -1
        );

        result = newArr.map((user, index) => {
          return <UserItem user={user} key={index} />;
        });
      } else {
        result = newArr.map((user, index) => {
          return <UserItem user={user} key={index} />;
        });
      }
    }

    return result;
  };
}
const mapStateToProps = state => ({
  userList: state.user,
  searchKeyword: state.display.searchKeyword
});

const mapDispatchToProps = dispatch => {
  return {
    handleSearch: keyword => {
      dispatch({
        type: SEARCH_USER,
        payload: keyword
      });
    },

    addUser: user => {
      dispatch({
        type: ADD_USER,
        payload: user
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
