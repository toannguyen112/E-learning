import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class HeaderItemCourseFavories extends Component {
    render() {
        let { courseFavories } = this.props;
        return (
            <Link
                to={`/coursedetail/${courseFavories.maKhoaHoc}`}
                className="heade__item"
                style={{ textDecoration: "none" }}
            >
                <div className=" header-img">
                    <img className="img-fluid" src={courseFavories.hinhAnh} alt="" />
                </div>
                <div className="header-content ">
                    <p className="name" >{courseFavories.tenKhoaHoc}</p>
                    <p className="info"> By Chris Croft, Management Trainer</p>
                    <p className="price" >$19.99  <span className="price-old">$89.99</span> </p>
                    <button className="button__addToCart">
                        Add to cart
                    </button>
                </div>
            </Link>


        );
    }
}
