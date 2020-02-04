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

  // static getDerivedStateFromProps = (prevProps, nextState) => {
  //   let cart = JSON.parse(localStorage.getItem("cart"))
  //     ? JSON.parse(localStorage.getItem("cart"))
  //     : [];
  //   let index = cart.findIndex(item => {
  //     return item.maKhoaHoc === prevProps.course.maKhoaHoc;
  //   });
  //   if (index !== -1) {
  //     nextState.showGoCart = true;
  //   }
  //   return null;
  // };

  componentDidMount() {

    let {course} = this.props
    let cart = JSON.parse(localStorage.getItem("cart"))
        ? JSON.parse(localStorage.getItem("cart"))
        : [];

    let index = cart.findIndex(item => {
        return item.maKhoaHoc === course.maKhoaHoc;
    });


    if (index !== -1) {
        this.setState({
            showGoCart : true
        })   
    }

}

  render() {
    console.log(this.state.showGoCart);

    let { course } = this.props;
    return (
      <div className="product__item">
        <Link to={`/coursedetail/${course.maKhoaHoc}`}  style={{textDecoration : "none"}}>
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
          <div className="info__content">
            <div className="teacher">
              <img className="img-fluid" src="/img/teacher.jpg" alt="teacher" />
              <h6>George Richards</h6>
            </div>
            <h5>
              {course.tenKhoaHoc.length > 45
                ? course.tenKhoaHoc.substr(0, 45) + "..."
                : course.tenKhoaHoc}
            </h5>
            <p>
              {course.moTa.length > 200
                ? course.moTa.substr(0, 200) + "..."
                : course.moTa}
            </p>
            <div className="meta">
              <div>
                <i className="fa fa-signal" /> Advanced
              </div>
              <div>
                <i className="fa fa-list-ul" /> 6 Lectures
              </div>
              <div>
                <i className="fa fa-clock" /> 6 Hours
              </div>
            </div>
            {this.state.showGoCart ? (
              <Link to="/cart">
                <button
                  className="add__cart"
                  style={{ backgroundColor: "blue" }}
                >
                  GO TO CART
                </button>
              </Link>
            ) : (
              <button
                className="add__cart"
                style={{ backgroundColor: "red" }}
                onClick={() => this.onCart(course)}
              >
                ADD TO CART
              </button>
            )}
            <div className="wishlist">
              <div className="add__list">
                <div className="heart">
                  <i className="lnr lnr-heart" />
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
