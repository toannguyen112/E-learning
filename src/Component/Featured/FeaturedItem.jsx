import React, { Component } from 'react'

export default class FeaturedItem extends Component {
  render() {

    let { course } = this.props
    return (
      <li className="item ">
        <div className="row">
          <div className=" col-sm-2 item__img">
            <img src={course.img} className="img-fluid" alt="" />
            <div className="courseHour">
              13.5 total hours
              </div>
          </div>
          <div className=" col-sm-4 item__title">
            <div className="title">
              {course.name}
            </div>
            <div className="update">
              Updated 3/2020
              </div>
          </div>
          <div className=" col-sm-2 item__rating">
            <i className="fa fa-star"></i>
            <span className="rating__number">
              4.7
              </span>
          </div>
          <div className=" col-sm-2 item__student">
            <i className="fa fa-user-o" aria-hidden="true" />
            <span className="item__student_number" >62,065</span>
          </div>
          <div className=" col-sm-2 warpperPrice">
            <div className="price">
              <div className="price--new">$9.99</div>
              <div className="price--old">$9.99</div>

            </div>
            <div className="heart">
              <i className="fa fa-heart-o" aria-hidden="true" />

            </div>
          </div>

        </div>
      </li>

    )
  }
}
