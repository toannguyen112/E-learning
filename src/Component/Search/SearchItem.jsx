import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class SearchItem extends Component {
  render() {

    let { course } = this.props
    return (
      <Link style={{ textDecoration: "none" }}  to={`/coursedetail/${course.maKhoaHoc}`}>
        <div className="search__form__item">
          <div className="search__img ">
            <img className="img-fluid" src={course.hinhAnh} alt="hinhanh" />
          </div>
          <div className="form__info">
            <h6>{course.tenKhoaHoc}</h6>
            <p>{course.moTa}</p>
          </div>
        </div>
      </Link>
    )
  }
}
