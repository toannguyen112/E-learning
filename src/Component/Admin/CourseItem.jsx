import React, { Component } from "react";
import CourseService from "../../Services/courseService";
import { notify } from "../notify/Notify";
import reduxAction from "../../Store/Action/action";
import {
  DELETE_COURSE,
  UPDATE_COURSE,
  EDIT_COURSE
} from "../../Store/Action/type";
import { connect } from "react-redux";
import _ from "lodash";

let courseService = new CourseService();
class CourseItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      course: {
        maKhoaHoc: "",
        biDanh: "",
        tenKhoaHoc: "",
        moTa: "",
        luotXem: 0,
        hinhAnh: "",
        maNhom: "",
        ngayTao: "",
        soLuongHocVien: 0,
        nguoiTao: {
          taiKhoan: "",
          hoTen: "",
          maLoaiNguoiDung: "",
          tenLoaiNguoiDung: ""
        },
        danhMucKhoaHoc: { maDanhMucKhoahoc: "", tenDanhMucKhoaHoc: "" }
      }
    };
  }

  onChange = e => {
    this.setState(
      {
        course: {
          ...this.state.course,
          [e.target.name]: e.target.value
        }
      },
      console.log(this.state.course)
    );
  };
  onDeleteCourse = () => {
    let { maKhoaHoc } = this.props.course;

    courseService
      .deleteCourse(this.props.course.maKhoaHoc)
      .then(res => {
        console.log(res.data);

        this.props.dispatch(reduxAction(DELETE_COURSE, maKhoaHoc));
        notify("", "Xóa thành công");
      })
      .catch(err => {
        notify("", "Khóa học đã ghi danh học viên nên ko thể xóa");
      });
  };

  OnUpdate = course => {
    this.props.dispatch(reduxAction(EDIT_COURSE, course));
  };
  handleUpdate = () => {
    let { course } = this.state;
    console.log(this.state.course);

    // courseService.updateCourse(this.state.course).then(res => {
    //     console.log(res.data);
    //     this.props.dispatch(reduxAction(UPDATE_COURSE, res.data))

    // }).catch(err => {
    //     console.log(err);

    // })

    this.props.dispatch(reduxAction(UPDATE_COURSE, course));
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    
    
    if (nextProps.editCourse.maKhoaHoc !== prevState.course.maKhoaHoc) {
      return {
        ...prevState,
        course: nextProps.editCourse
      };
    }
    return null;
  }
  render() {
    let { course } = this.props;
    return (
      <tr>
        <td>
          <div className="name__wrapper d-flex">
            <img src={course.hinhAnh} alt="" />
            <div className="course__name ml-3">
              <h6>{course.tenKhoaHoc}</h6>
              <span className="badge badge-info">development</span>
            </div>
          </div>
        </td>
        <td>
          <h6>Toan Nguyen</h6>
          <div className="badge badge-danger">Admin</div>
        </td>
        <td>{course.ngayTao}</td>
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
          <button
            type="button"
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#fix"
            onClick={() => this.OnUpdate(course)}
          >
            <i className="fa fa-edit"></i>
          </button>

          <div
            className="modal fade"
            id="fix"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Update course</h5>
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
                      value={this.state.course.tenKhoaHoc || ""}
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
                      value={this.state.course.moTa || ""}
                    />
                  </div>

                  <div className="form-group">
                    <label>Image</label>
                    <input
                      onChange={this.onChange}
                      value={this.state.course.hinhAnh || ""}
                      style={{ width: "100%" }}
                      name="hinhAnh"
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.handleUpdate}
                  >
                    Update
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

          <button className="btn btn-danger" onClick={this.onDeleteCourse}>
            <i className="fa fa-trash" aria-hidden="true" />
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => ({
  editCourse: state.editCourse || {}
});

export default connect(mapStateToProps)(CourseItem);
