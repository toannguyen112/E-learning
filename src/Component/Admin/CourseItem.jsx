import React, { Component } from 'react'

export default class CourseItem extends Component {





    onDeleteCourse = (maKhoaHoc) => {
        this.props.deleteCourse(this.props.course.maKhoaHoc)
    }
    render() {

        let { course } = this.props
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
                    <button className="btn btn-danger" onClick={this.onDeleteCourse}>
                        <i className="fa fa-trash" aria-hidden="true" />
                    </button>
                </td>
            </tr>
        )
    }
}
