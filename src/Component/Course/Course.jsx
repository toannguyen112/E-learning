import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class Course extends Component {
  render() {
    let {item}= this.props
    return (
      <NavLink style={{textDecoration : "none"}} to={`/coursedetail/${item.maKhoaHoc}`} className="product__item">
        <div>
          <div className="item__img">
            <img src={item.hinhAnh} alt="" className="img-fluid" />
            <div className="img__overplay"></div>
          </div>
          <div className="item__info">
            <h5>Node.js, Express & MongoDB Dev to Deployment</h5>
            <h6>Jose Portilla</h6>
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
        </div>

        <div className="sub__info">
          <div className="info__content">
            <div className="teacher">
              <img src="/img/teacher.jpg" className="img-fluid" alt="" />
              <h6>George Richards</h6>
            </div>
            <h5>Node.js, Express & MongoDB Dev to Deployment</h5>
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
            <button className="add__cart">ADD TO CART</button>
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
      </NavLink>
    );
  }
}
