import React, { Component } from "react";

export default class User extends Component {
  render() {
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
            <input type="text" name="search" placeholder="Search User" />
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
                  <label>User Name : </label>
                  <input type="text" style={{ width: "100%" }} />
                </div>

                <div className="form-group">
                  <label>Password : </label>
                  <input type="text" style={{ width: "100%" }} />
                </div>

                <div className="form-group">
                  <label>Full Name : </label>
                  <input type="text" style={{ width: "100%" }} />
                </div>

                <div className="form-group">
                  <label>Email : </label>
                  <input type="text" style={{ width: "100%" }} />
                </div>

                <div className="form-group">
                  <label>Phone : </label>
                  <input type="text" style={{ width: "100%" }} />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger">
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
          <tbody>
            <tr>
              <td>
                <div className="name__wrapper d-flex">
                  <img
                    src="/img/avatar.png"
                    style={{ height: "60px", width: "60px" }}
                  />
                  <div className="course__name ml-3">
                    <h6 style={{ fontWeight: "bold" }}>
                      toannguyen.it99@gmail.com Member{" "}
                    </h6>
                    <span className="badge badge-info">development</span>
                  </div>
                </div>
              </td>
              <td>
                <h6>Toan Nguyen</h6>
              </td>
              <td>5636363463</td>
              <td>s@ff.ddd</td>
              <td>
                <button
                  className="btn btn-info mr-2"
                  data-toggle="modal"
                  data-target="#modelId"
                >
                  <i className="fa fa-pencil" aria-hidden="true" />
                </button>
                <button className="btn btn-danger">
                  <i className="fa fa-user-times" aria-hidden="true" />
                </button>
              </td>
            </tr>

            <tr>
              <td>
                <div className="name__wrapper d-flex">
                  <img src="/img/avatar.png"  style={{ height: "60px", width: "60px" }} />
                  <div className="course__name ml-3">
                    <h6 style={{ fontWeight: "bold" }}>
                      minhhung.it99@gmail.com Member{" "}
                    </h6>
                    <span className="badge badge-info">development</span>
                  </div>
                </div>
              </td>
              <td>
                <h6>Toan Nguyen</h6>
              </td>
              <td>63363636363</td>
              <td>toannguyen@gmail.com</td>
              <td>
                <button
                  className="btn btn-info mr-2"
                  data-toggle="modal"
                  data-target="#modelId"
                >
                 <i className="fa fa-pencil" aria-hidden="true" />
                </button>
                <button className="btn btn-danger">
                 <i className="fa fa-user-times" aria-hidden="true" />
                </button>
              </td>
            </tr>

            <tr>
              <td>
                <div className="name__wrapper d-flex">
                  <img src="/img/avatar.png"  style={{ height: "60px", width: "60px" }} />
                  <div className="course__name ml-3">
                    <h6 style={{ fontWeight: "bold" }}>
                      minhhung.it99@gmail.com Member{" "}
                    </h6>
                    <span className="badge badge-info">development</span>
                  </div>
                </div>
              </td>
              <td>
                <h6>Toan Nguyen</h6>
              </td>
              <td>64674747475869</td>
              <td>trantienhuy@gmail.com</td>
              <td>
                <button
                  className="btn btn-info mr-2"
                  data-toggle="modal"
                  data-target="#modelId"
                >
             <i className="fa fa-pencil" aria-hidden="true" />


                </button>
                <button className="btn btn-danger">
                <i className="fa fa-user-times" aria-hidden="true" />

                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
