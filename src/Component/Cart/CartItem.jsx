import React, { Component } from "react";

export default class CartItem extends Component {
  render() {
    let { course ,deleteCart } = this.props;
    return (
      <tr className="cart_item">
        <td className="cart_thumbnail">
          <div>
            <img src={course.hinhAnh} className="img-fluid" alt="course" />
          </div>
        </td>
        <td className="cart_name">
          <div>{course.tenKhoaHoc}</div>
          <div>By Jonas Schmedtmann, Web Developer, Designer...</div>
        </td>
        <td className="cart_price">
          <div className="amount">
            $19.90 <i className="fa fa-tag"></i>
          </div>
          <div className="oldamount">$199.90</div>
        </td>
        <td className="cart_remove">
          <div className="btn__remove">
          <i style={{ cursor: "pointer" }} className="fa fa-times"  onClick={() => deleteCart(course)} ></i>

          </div>
        </td>
      </tr>
    );
  }
}
