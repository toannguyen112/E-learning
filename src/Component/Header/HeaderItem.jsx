import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeaderItem extends Component {
    render() {
        let { course } = this.props;
        return (
            <Link
                to={`/coursedetail/${course.maKhoaHoc}`}
                className="row header-item"
                style={{ textDecoration: "none" }}
            >
                <div className="col-4 p-0 header-img">
                    <img src={course.hinhAnh} alt="" />
                </div>
                <div className="col-8 header-content ">
                    <p>{course.tenKhoaHoc}</p>
                    <p style={{ color: "red" }}>$19.99</p>
                </div>
            </Link>

        );
    }
}

export default HeaderItem;
