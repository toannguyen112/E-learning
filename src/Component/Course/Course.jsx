import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ADD_TO_CART } from "../../Store/Action/type";
class Course extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showGoCart: false
    };
  }

  onCart = course => {
   
    this.props.addToCart(course);
    this.setState({
      showGoCart: true
    });
  };



   static getDerivedStateFromProps = (prevProps, nextState) => {
    let cart = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : [];
    let index = cart.findIndex(item => {
      return item.maKhoaHoc === prevProps.course.maKhoaHoc;
    });
    if (index !== -1) {
     
      
      nextState.showGoCart = true
    }
    return null;



  }

  
  render() {
    console.log(this.state.showGoCart);
    
    let { course } = this.props;
    return (
      <div className="product__item">
        <Link to={`/coursedetail/${course.maKhoaHoc}`}>
          <div className="item__img">
            <img src={course.hinhAnh} alt="" className="img-fluid" />
            <div className="img__overplay"></div>
          </div>
          <div className="item__info">
            <h5>{course.tenKhoaHoc}</h5>
            <div className="raiting">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <div className="price">
              <span className="old__price">$199.99</span>
              <span className="new__price">
                $19.99 <i className="fa fa-tag" aria-hidden="true" />
              </span>
            </div>
          </div>
        </Link>

        <div className="sub__info">
          <div className="info__content">
            <div className="teacher">
              <img src="/img/teacher.jpg" className="img-fluid" alt="" />
              <h6>George Richards</h6>
            </div>
            <h5>{course.tenKhoaHoc}</h5>
            <p>
              In this 8.5 hour course you will learn by example building 2 real
              world server-side applications from scratch all the way up to
              deployment with a real domain. No more confusion about how to
              build a No...
            </p>
            <div className="meta">
              <div>
                <i className="fa fa-signal" aria-hidden="true" /> Advanced
              </div>
              <div>
                <i className="fa fa-signal" aria-hidden="true" /> Advanced
              </div>
              <div>
                {" "}
                <i className="fa fa-signal" aria-hidden="true" /> Advanced
              </div>
            </div>
            {this.state.showGoCart ? 
              <Link to="/cart">
                <button className="add__cart" style={{ backgroundColor: "blue" }}>
                  GO TO CART
              </button>
              </Link>
             : 
                <button className="add__cart" onClick={() => this.onCart(course)}>
                  ADD TO CART
              </button>
              }
            <div className="wishlist">
              <div className="add__list">
                <div className="heart">
                  <i className="fa fa-heart"></i>
                </div>
                <span>Add to Wishlist</span>
              </div>
              <span className="price">$19.99</span>
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
    }
  };
};

export default connect(null, mapDispatchToProps)(Course);
