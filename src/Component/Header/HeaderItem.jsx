import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeaderItem extends Component {
    render() {
        let { course } = this.props;
        return (
            <Link
                to={`/coursedetail/${course.maKhoaHoc}`}
                className="header-item"
                style={{ textDecoration: "none" }}
            >
                <div className=" header-img">
                    <img className="img-fluid" src={course.hinhAnh} alt="" />
                </div>
                <div className="header-content ">
                    <p className="name" >{course.tenKhoaHoc}</p>
                    <p className="info"> By Chris Croft, Management Trainer, Speaker, Author</p>
                    <p className="price" >$19.99  <span className="price-old">$89.99</span> </p>
                    <button className="button__addToCart">
                       Go to cart
                    </button>
                </div>
            </Link>

        );
    }
}

export default HeaderItem;
