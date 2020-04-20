import React, { Component } from "react";
import CartItem from "../Cart/CartItem";
import { DELETE_CART } from "../../Store/Action/type";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Cart extends Component {
  showCartItem = (cart) => {
    if (this.props.cart.length > 0) {
      return cart.map((course, index) => {
        return (
          <CartItem
            course={course}
            key={index}
            deleteCart={this.props.deleteCart}
          />
        );
      });
    }
    return (
      <p className="text-center my-4" style={{ fontWeight: "400" }}>
        cart is empty <i className="fa fa-shopping-cart" aria-hidden="true" />{" "}
        (0)
      </p>
    );
  };

  render() {
    let { cart } = this.props;

    return (
      <div className="cart_page">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-9 col-lg-9">
              <table className="cart__table text-center table">
                <thead>
                  <tr>
                    <th colSpan="2">Course</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="cart__body">
                  {this.showCartItem(cart)}

                  <tr className="cart__footer">
                    <td colSpan="3" className="cart__coupon text-left">
                      <input type="text" placeholder="Coupon code" />
                      <button className="blog__button"> APPLY COUPON</button>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3">
              <div className="cart_total">
                <table className="table">
                  <tbody className="table_total">
                    <tr>
                      <td colSpan="2">
                        <span className="total__header">Cart totals</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Subtotal</td>
                      <td className="amount">
                        ${Math.ceil(19.99 * cart.length)}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Total</td>
                      <td className="amount" style={{ fontSize: "1.4rem" }}>
                        ${19.99 * cart.length}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <Link to="/checkout">
                          <button className="add">PROCEED TO CHECKOUT</button>
                        </Link>
                        <Link to="/">
                          <button className="continue">
                            CONTINUE SHOPPING
                          </button>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCart: (course) => {
      dispatch({
        type: DELETE_CART,
        payload: course,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
