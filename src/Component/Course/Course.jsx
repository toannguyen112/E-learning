import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ADD_TO_CART, ADD_COURSE_FAVORIES } from "../../Store/Action/type";

import LoaderButton from "../LoaderButton/LoaderButton";
import LoaderFavorites from "../LoaderButton/LoaderFavorites";
class Course extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showGoCart: false,
      loader: false,
      loaderFavorities: false,
    };
  }

  onCart = (course) => {
    this.props.addToCart(course);

    this.setState({
      showGoCart: true,
    });

    setTimeout(() => {
      this.setState({
        loader: true,
      });
    }, 2000);
  };

  componentDidMount() {
    let { course } = this.props;
    let cart = JSON.parse(localStorage.getItem("cart"))
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    let index = cart.findIndex((item) => {
      return item.maKhoaHoc === course.maKhoaHoc;
    });

    if (index !== -1) {
      this.setState({
        showGoCart: true,
        loader: true,
      });
    }
  }

  onFavorites = (course) => {
    this.props.addCourseFavories(course);
    this.setState({
      loaderFavorities: true,
    });
    setTimeout(() => {
      this.setState({
        loaderFavorities: false,
      });
    }, 2000);
  };

  render() {
    let { course } = this.props;

    return (
     


      <div className="product__item col-md-3 col-sm-12 ">
        <div className="product__item__content" style={{boxShadow :"0 0 1px 1px rgba(20,23,28,.1), 0 3px 1px 0 rgba(20,23,28,.1)"}} >
          <Link to={`/courses/${course.maKhoaHoc}`}>
            <div className="item__img">
              <img src={course.hinhAnh} alt="item" />
              <div className="img__overlay" />
            </div>
            <div className="item__info">
              <h5>

                {course.tenKhoaHoc.length > 45 ? course.tenKhoaHoc.substr(0, 45) + "..." : course.tenKhoaHoc}

              </h5>
              <h6>Jose Portilla</h6>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <span className="score">3.5 <span className="reviews">(176,466)</span></span>
              </div>
              <div className="price">
                <span className="old__price">$199.99</span>
                <span className="price">$19.99 <i className="fa fa-tag"></i></span>
              </div>
            </div>
          </Link>
        
          <div className="sub__info">
            <p className="lastUpdate">Last update : 11/02/2000</p>
            <h4 className="course__name">{course.tenKhoaHoc}</h4>
            <div className="sub-bestseller">
              <div className="d-flex ml-2">
                in <div className="ml-1"> Data AnaLysis</div>
              </div>
              <div>Development</div>
            </div>

            <div className="sub__info__body">
              <div>
                <i className="fa fa-play"></i>
                <span> 93 Lectures</span>
              </div>
              <div>
                <i className="fa fa-clock-o" aria-hidden="true" /> <span>11.5 Hours</span>
              </div>
              <div>
                <i className="fa fa-sliders" aria-hidden="true" /> <span>All levels</span>
              </div>
              <div>
                <i className="fa fa-cc" aria-hidden="true"></i>
              </div>
            </div>
            <div className="sub__text">
              <p>
                Complete Data Science Training: Mathematics, Statistics, Python,
                Advanced Statistics in Python, Machine & Deep
              </p>
            </div>
            <ul className="sub__body__list">
              <li>
                The course provides the entire toolbox you need to become a data
                scientist
              </li>
              <li>Understand the difference between Groups and Sets</li>
              <li>Create and use Static Sets</li>
            </ul>
            <div className="sub__button">
              <div className="sub__button-addtocart">
                {this.state.showGoCart ? (
                  <Link to="/cart">
                    {this.state.loader ? (
                      <button className=" btn-handle go_toCart">
                        Go to cart
                      </button>
                    ) : (
                        <LoaderButton className="loading" />
                      )}
                  </Link>
                ) : (
                    <button
                      className=" btn-handle add__cart"
                      onClick={() => this.onCart(course)}
                    >
                      Add to cart
                    </button>
                  )}
              </div>
              <div className="sub__heart">
                {!this.state.loaderFavorities ? (
                  <i
                    onClick={() => this.onFavorites(course)}
                    className="fa fa-heart-o"
                    aria-hidden="true"
                  ></i>
                ) : (
                    <LoaderFavorites />
                  )}
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (course) => {
      dispatch({
        type: ADD_TO_CART,
        payload: course,
      });
    },

    addCourseFavories: (course) => {
      dispatch({
        type: ADD_COURSE_FAVORIES,
        payload: course,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(Course);
