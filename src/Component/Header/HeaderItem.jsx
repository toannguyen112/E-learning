import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeaderItem extends Component {
    render() {
        let { course  } = this.props;
        return (
            <Link
                to={`/coursedetail/${course.maKhoaHoc}`}
                className="heade__item"
                style={{ textDecoration: "none" }}
            >
                <div className=" header-img">
                    <img className="img-fluid" src={course.hinhAnh} alt="" />
                </div>
                <div className="header-content ">
                    <p className="name" >{course.tenKhoaHoc}</p>
                    <p className="info"> By Chris Croft, Management Trainer, Speaker, Author</p>
                    <p className="price" >$19.99  <span className="price-old">$89.99</span> </p>

                </div>
            </Link>

        );
    }
}

export default HeaderItem;
