import React, { Component } from "react";

export default class Course extends Component {
  render() {
    return (
      <div>
        <div className="title">
          <i className="fa fa-user"></i>
          My Course
        </div>
        <div className="row post_title">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 add__search">
            <button
              className="add__course"
              data-toggle="modal"
              data-target="#modelId"
            >
              <i className="fa fa-plus mr-1"></i> ADD COURSE
            </button>
            <input type="text" name="search" placeholder="Search Course" />
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
                  Add New Course
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
                  <label>Course's Name</label>
                  <input type="text" style={{ width: "100%" }} />
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <input type="text" style={{ width: "100%" }} />
                </div>

                <div className="form-group">
                  <label>Image</label>
                  <input
                    style={{ width: "100%" }}
                    name="hinhAnh"
                    type="text"
                    className="form-control"
                    defaultValue="/img/default-image.jpg"
                  />
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
                Name <i className="fa fa-sort-alpha-desc" aria-hidden="true" />
              </th>
              <th>Created by</th>
              <th>Published at </th>
              <th>Displayed</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="name__wrapper d-flex">
                  <img src="/img/item16.jpg" alt="" />
                  <div className="course__name ml-3">
                    <h6>React Tutorial and Projects Course</h6>
                    <span className="badge badge-info">development</span>
                  </div>
                </div>
              </td>
              <td>
                <h6>Toan Nguyen</h6>
                <div className="badge badge-danger">Admin</div>
              </td>
              <td>10/10/2019</td>
              <td>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customSwitch1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customSwitch1"
                  ></label>
                </div>
              </td>
              <td>
                <button className="btn btn-info mr-2" data-toggle="modal"
              data-target="#modelId">
                  <i className="fa fa-edit"></i>
                </button>
                <button className="btn btn-danger">
                  <i className="fa fa-trash" aria-hidden="true" />
                </button>
              </td>
            </tr>


            <tr>
              <td>
                <div className="name__wrapper d-flex">
                  <img src="/img/item14.jpg" alt="" />
                  <div className="course__name ml-3">
                    <h6>React Tutorial and Projects Course</h6>
                    <span className="badge badge-info">development</span>
                  </div>
                </div>
              </td>
              <td>
                <h6>Toan Nguyen</h6>
                <div className="badge badge-danger">Admin</div>
              </td>
              <td>10/10/2019</td>
              <td>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customSwitch2"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customSwitch2"
                  ></label>
                </div>
              </td>
              <td>
                <button className="btn btn-info mr-2" data-toggle="modal"
              data-target="#modelId">
                  <i className="fa fa-edit"></i>
                </button>
                <button className="btn btn-danger">
                  <i className="fa fa-trash" aria-hidden="true" />
                </button>
              </td>
            </tr>


            <tr>
              <td>
                <div className="name__wrapper d-flex">
                  <img src="/img/item15.jpg" alt="" />
                  <div className="course__name ml-3">
                    <h6>React Tutorial and Projects Course</h6>
                    <span className="badge badge-info">development</span>
                  </div>
                </div>
              </td>
              <td>
                <h6>Toan Nguyen</h6>
                <div className="badge badge-danger">Admin</div>
              </td>
              <td>10/10/2019</td>
              <td>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customSwitch3"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customSwitch3"
                  ></label>
                </div>
              </td>
              <td>
                <button className="btn btn-info mr-2" data-toggle="modal"
              data-target="#modelId">
                  <i className="fa fa-edit"></i>
                </button>
                <button className="btn btn-danger">
                  <i className="fa fa-trash" aria-hidden="true" />
                </button>
              </td>
            </tr>


            
          </tbody>
        </table>
      </div>
    );
  }
}
