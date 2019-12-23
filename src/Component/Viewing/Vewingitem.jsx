import React, { Component } from 'react'

export default class Viewingitem extends Component {
    render() {
        let { course } = this.props
        return (
            <div className="product__item">
                <div className="item__img">
                    <img
                        src={course.hinhAnh}
                        alt=""
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
        )
    }
}
