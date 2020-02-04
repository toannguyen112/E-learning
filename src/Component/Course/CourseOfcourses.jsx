import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_TO_CART } from "../../Store/Action/type";
import { Link } from "react-router-dom";

class CourseOfcourses extends Component {
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

  //   static getDerivedStateFromProps = (prevProps, nextState) => {
  //     let cart = JSON.parse(localStorage.getItem("cart"))
  //       ? JSON.parse(localStorage.getItem("cart"))
  //       : [];
  //     let index = cart.findIndex(item => {
  //       return item.maKhoaHoc === prevProps.course.maKhoaHoc;
  //     });
  //     if (index !== -1) {
  //       nextState.showGoCart = true;
  //     }
  //     return null;
  //   };

  componentDidMount() {

    let { course } = this.props
    let cart = JSON.parse(localStorage.getItem("cart"))
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    let index = cart.findIndex(item => {
      return item.maKhoaHoc === course.maKhoaHoc;
    });

    if (index !== -1) {
      this.setState({
        showGoCart: true
      })
    }

  }
  render() {
    let { course } = this.props;
    return (
      <div className="card">
        <Link to={`/coursedetail/${course.maKhoaHoc}`} style={{ textDecoration: "none" }}>
          <div className="card-img">
            <img className="img-fluid" src={course.hinhAnh} alt="" />
          </div>
          <div className="card-body">
            <h5 className="card-title">{course.tenKhoaHoc}</h5>
          </div>
          <div className="ratings text-center">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>


          </div></Link>
        <div className="button">
          <div>
            <span className="old__price mr-1">$199.99</span>
            <span>$199   <i class="fa fa-tag"></i></span>
          </div>



          {this.state.showGoCart ? (
            <span className="btn-goToCart"><i style={{ color: "blue" }} className="fa fa-check" aria-hidden="true"></i></span>
          ) : (
              <span className="btn-addToCart"
                onClick={() => this.onCart(course)}><i className="fa fa-cart-plus" aria-hidden="true" />
              </span>
            )}
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

export default connect(null, mapDispatchToProps)(CourseOfcourses);
