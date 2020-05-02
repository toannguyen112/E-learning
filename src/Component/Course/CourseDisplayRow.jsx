import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CourseDisplayRow extends Component {
    render() {

        let { course } = this.props
        return (
            <div className="course__row col-md-12 col-sm-12">
                <Link to={`/coursedetail/${course.maKhoaHoc}`} style={{ textDecoration: "none" }} >
                    <div className="wrapper__content row ">
                        <div className="col-3 col-sm-3 course__img ">
                            <img className="img-fluid" src={course.hinhAnh} alt="" />
                        </div>
                        <div className="col-6 col-sm-6 course__content ">
                            <h4 className="nameCourse">
                                {course.tenKhoaHoc}
                            </h4>
                            <p className="list__view">
                                <span className="list__view--item">
                                    199 lecuters
                                </span>
                                <span className="list__view--item">
                                    16.5 total hours
                                    </span>
                                <span className="list__view--item">
                                    All levels
                                </span>
                            </p>
                            <p className="headline">
                                Excel with this A-Z Microsoft Excel Course. Microsoft Excel 2010, 2013, 2016, Excel 2019 and Office 365
                            </p>
                        </div>
                        <div className="col-3 col-sm-3 course__price ">
                            <span className=" price course__price--new">
                                $29.99
                            </span>
                            <span className=" price course__price--old">
                                $29.99
                            </span>
                            <div className="warpper__rating">
                                <span className="raiting__icon">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </span>
                                <span className="rating__number">
                                    (115,675 ratings)
                                </span>

                            </div>
                        </div>
                    </div>
                </Link>
            </div>







        )
    }
}
export default CourseDisplayRow