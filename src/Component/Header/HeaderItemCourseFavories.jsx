import React, { Component } from 'react'

export default class HeaderItemCourseFavories extends Component {
    addToCart = (course) => {
        this.props.addToCart(course)



    }
    render() {
        let { courseFavories } = this.props;
        return (
            <div

                className="heade__item"

            >
                <div className=" header-img">
                    <img className="img-fluid" src={courseFavories.hinhAnh} alt="" />
                </div>
                <div className="header-content ">
                    <p className="name" >{courseFavories.tenKhoaHoc}</p>
                    <p className="info"> By Chris Croft, Management Trainer</p>
                    <p className="price" >$19.99  <span className="price-old">$89.99</span> </p>
                    <button className="button__addToCart" onClick={() => this.addToCart(courseFavories)} >
                        Add to cart
                    </button>
                </div>
            </div>


        );
    }
}
