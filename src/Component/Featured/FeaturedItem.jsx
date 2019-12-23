import React, { Component } from 'react'

export default class FeaturedItem extends Component {
    render() {
        return (
            <div className="featured__list__item">
                <div className="num"></div>
                <div className="course">
                    <div className="course-img">
                        {" "}
                        <img src="./img/item15.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="course-description">
                        <p>Ts. Lê Thẩm Dương - Chiến lược tài chính</p>
                        <div className="star-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <span>499.000 ₫</span>
                    </div>
                </div>
            </div>

        )
    }
}
