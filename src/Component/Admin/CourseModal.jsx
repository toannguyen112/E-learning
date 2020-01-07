import React, { Component } from "react";
import CourseService from "../../Services/courseService";
import { ADD_COURSE } from "../../Store/Action/type";
import { connect } from "react-redux";
import reduxAction from "../../Store/Action/action";
import { UUID } from "./UUID";
import { notify } from "../notify/Notify";
let courseService = new CourseService();
let ngayTao = new Date();

class CourseModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      course: {
        tenKhoaHoc: "",
        biDanh: "",
        moTa: "",
        hinhAnh: "",
        maKhoaHoc: "",
        ngayTao: `${ngayTao.getDate()}/${ngayTao.getMonth()}/${ngayTao.getFullYear()}`,
        maNhom: "GP01",
        luotXem: 155,
        danhGia: 0,
        taiKhoanNguoiTao: "cuongnt5",
        maDanhMucKhoaHoc: "Design"
      },
      search: ""
    };
  }

  onChangeSearch = e => {
    this.setState(
      {
        search: e.target.value
      },
      this.props.handleSearch(this.state.search)
    );
  };

 

  onChange = e => {
    this.setState({
      course: {
        ...this.state.course,
        [e.target.name]: e.target.value
      }
    });
  };

  onAddCourse = () => {
    console.log(this.state.course);

    courseService
      .addCourse(this.state.course)
      .then(res => {
        this.props.addCourse(res.data);
        notify("", "thêm thành công");
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <div className="row post_title">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 add__search">
            <button
              className="add__course"
              data-toggle="modal"
              data-target="#modelId"
            
            >
              <i className="fa fa-plus mr-1"></i> ADD COURSE
            </button>
            <input
              onChange={this.onChangeSearch}
              type="text"
              name="search"
              placeholder="Search Course"
              value={this.state.search}
            />
          </div>
        </div>

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
                  <label>Tên khóa học</label>
                  <input
                    type="text"
                    style={{ width: "100%" }}
                    name="tenKhoaHoc"
                    value={this.state.tenKhoaHoc}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <label>Mã khóa học</label>
                  <input
                    type="text"
                    style={{ width: "100%" }}
                    name="maKhoaHoc"
                    value={this.state.maKhoaHoc}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <label>Mô tả</label>
                  <input
                    type="text"
                    style={{ width: "100%" }}
                    name="moTa"
                    onChange={this.onChange}
                    value={this.state.moTa}
                  />
                </div>

                <div className="form-group">
                  <label>Image</label>
                  <input
                    onChange={this.onChange}
                    value={this.state.hinhAnh}
                    style={{ width: "100%" }}
                    name="hinhAnh"
                    type="file"
                    className="form-control"
                  />
                </div>


              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={this.onAddCourse}
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
      </div>
    );
  }
}




export default connect()(CourseModal);
