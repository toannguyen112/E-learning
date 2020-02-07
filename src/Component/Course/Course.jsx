import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ADD_TO_CART, ADD_COURSE_FAVORIES } from "../../Store/Action/type";

import LoaderButton from "../LoaderButton/LoaderButton";
class Course extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showGoCart: false,
      loader: false
    };
  }

  onCart = course => {
    this.props.addToCart(course);

    this.setState({
      showGoCart: true
    });

    setTimeout(() => {
      this.setState({
        loader: true
      });
    }, 1000);
  };

  componentDidMount() {
    let { course } = this.props;
    let cart = JSON.parse(localStorage.getItem("cart"))
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    let index = cart.findIndex(item => {
      return item.maKhoaHoc === course.maKhoaHoc;
    });

    if (index !== -1) {
      this.setState({
        showGoCart: true,
        loader: true
      });
    }
  }

  render() {
    console.log(this.state.showGoCart);

    let { course } = this.props;
    return (
      <div className="product__item">
        <Link
          to={`/coursedetail/${course.maKhoaHoc}`}
          style={{ textDecoration: "none" }}
        >
          <div className="item__img">
            <img className="img-fluid" src={course.hinhAnh} alt="item" />
            <div className="img__overlay" />
          </div>
          <div className="item__info">
            <h5>
              {course.tenKhoaHoc.length > 45
                ? course.tenKhoaHoc.substr(0, 45) + "..."
                : course.tenKhoaHoc}
            </h5>
            <h6>Jose Portilla</h6>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />

              <i className="fa fa-star" />
              <span className="score">
                3.5 <span className="reviews">(176,466)</span>
              </span>
            </div>
            <div className="price">
              <span className="old__price">$199.99</span>
              <span className="price">
                $19.99 <i className="fa fa-tag"></i>
              </span>
            </div>
          </div>
        </Link>
        <span className="best__seller">BEST</span>
        <div className="sub__info">
          <p>last update : 11/02/2000</p>
          <span>{course.tenKhoaHoc}</span>
          <div className="sub-bestseller">
            <div>BESTSELLER</div>
            <div className="d-flex ml-2">
              in <div className="ml-1"> Data AnaLysis</div>
            </div>
            <div>Development</div>
          </div>

          <div className="sub-info">
            <div>
              <i className="fa fa-play"></i>
              93 Lectures
            </div>
            <div>
              <i className="fa fa-clock-o" aria-hidden="true" /> 11.5 Hours
            </div>
            <div>
              <i className="fa fa-sliders" aria-hidden="true" /> All levels
            </div>
            <div>
              <i className="fa fa-cc" aria-hidden="true"></i>
            </div>
          </div>
          <div className="sub-text">
            <p>
              Complete Data Science Training: Mathematics, Statistics, Python,
              Advanced Statistics in Python, Machine & Deep
            </p>
          </div>

          <div className="sub-list">
            <ul>
              <li>
                The course provides the entire toolbox you need to become a data
                scientist
              </li>
              <li>Understand the difference between Groups and Sets</li>
              <li>Create and use Static Sets</li>
            </ul>
          </div>
          <div className="sub-button">
            <div className="sub-btn-addtocart">
              {this.state.showGoCart ? (
                <div>
                  <Link to="/cart">
                    {this.state.loader ? (
                      <button className="go_toCart">Go to cart</button>
                    ) : (
                        <LoaderButton />
                      )}
                  </Link>
                </div>
              ) : (
                  <button
                    className="add__cart"
                    onClick={() => this.onCart(course)}
                  >
                    Add to cart
                </button>
                )}
            </div>
            <div className="sub-heart">
              <i onClick={() => this.props.addCourseFavories(course)} className="fa fa-heart-o" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: course => {
      dispatch({
        type: ADD_TO_CART,
        payload: course
      });
    },

    addCourseFavories: course => {
      dispatch({
        type: ADD_COURSE_FAVORIES,
        payload: course
      });
    }
  };
};

export default connect(null, mapDispatchToProps)(Course);
