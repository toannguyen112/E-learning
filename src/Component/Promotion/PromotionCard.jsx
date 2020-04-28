import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class PromotionCard extends Component {
    render() {

        let { courseList } = this.props

        return (
            <NavLink to={`/coursedetail/${courseList.maKhoaHoc}`} style={{ textDecoration: "none" }} className="card">
                <span className="sale">30%</span>
                <img className="card-img-top img-fluid " src={courseList.hinhAnh} alt="" />
                <div className="card-body">
                    <div className="new-tag">New</div>
                    <h6 className="card-title">{courseList.tenKhoaHoc}</h6>
                    <div className="card-descripton-teacher">
                        <img className="img-fluid" src="https://d303ny97lru840.cloudfront.net/kelley-57b67d6e60af25054a055b1d/20160901-/images.jpg" alt="" />
                        <span>Urs Ravi Telugu</span>
                    </div>
                    <div className="card-pirce">
                        <span className="price-old">$120.99</span>
                        <span className="price-new">$19.99</span>
                    </div>
                </div>
            </NavLink>
        )
    }
}
