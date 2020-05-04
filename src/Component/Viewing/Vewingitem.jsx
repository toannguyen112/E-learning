import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Viewingitem extends Component {
    render() {
        let { course } = this.props
        return (
            <Link to={`/coursedetail/${course.maKhoaHoc}`} style={{ textDecoration: "none" }} className="col-md-3 col-sm-12">
                <div className="product__item">
                    <div className="item__img">
                        <img
                            src={course.hinhAnh}
                            alt="hinhAnh"
                            className="img-fluid"
                        />
                    </div>
                    <div className="item__info">
                        <h5>
                            Complete Python Bootcamp: Go from zero to hero...
                        </h5>
                        <h6> Jose Portilla</h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        3.5 <span>(176,466)</span>
                        </div>
                        <h4> $19.99</h4>
                    </div>
                </div>

            </Link>
        )
    }
}
