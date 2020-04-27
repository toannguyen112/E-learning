import React, { Component } from "react";
import { Link } from "react-router-dom";
import CourseService from '../../Services/courseService'
const courseService = new CourseService();
export default class BannerItem extends Component {


  render() {

    let { item } = this.props



    return (
      <li>
        <Link to="/courses">


          {item.tenDanhMuc}

        </Link>

        <div className="banner-info">
          <h5>{item.tenDanhMuc}</h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          dolore odio inventore iusto dicta quia sint ullam illo cupiditate
          sapiente vero reprehenderit totam repudiandae velit enim est? Ullam,
          consequuntur unde.
        </div>
        <div className="banner-info-items">
          <h5>Featured Course</h5>
          <div className="banner-info-item ">
            <div className="banner-img">
              <img className="img-fluid" src="./img/item1.jpg" alt="" />
              <div className="banner-heart">
                <i className="fa fa-heart-o" aria-hidden="true"></i>
              </div>
            </div>
            <div className="banner-text">
              <div> Lorem ipsum dolor sit amet ..</div>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="price-wrapper">
                <span className="price">$19.99</span>
                <span className="old-price">$30</span>
              </div>
            </div>
          </div>

          <div className="banner-info-item ">
            <div className="banner-img">
              <img className="img-fluid" src="./img/item3.jpg" alt="" />
              <div className="banner-heart">
                <i className="fa fa-heart-o" aria-hidden="true"></i>
              </div>
            </div>
            <div className="banner-text">
              <div> Lorem ipsum dolor sit amet ..</div>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="price-wrapper">
                <span className="price">$19.99</span>
                <span className="old-price">$30</span>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}
