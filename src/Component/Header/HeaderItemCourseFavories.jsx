import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class HeaderItemCourseFavories extends Component {
    render() {
        let { courseFavories } = this.props;
        return (
            <NavLink
                to={`/coursedetail/${courseFavories.maKhoaHoc}`}
                className="row header-item"
                style={{ textDecoration: "none" }}
            >
                <div className="col-4 p-0 header-img">
                    <img src={courseFavories.hinhAnh} alt="" />
                </div>
                <div className="col-8 header-content ">
                    <p>{courseFavories.tenKhoaHoc}</p>
                    <p style={{ color: "red" }}>$19.99</p>
                </div>
            </NavLink>
        );
    }
}
