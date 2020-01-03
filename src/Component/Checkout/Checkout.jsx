import React, { Component } from "react";
import CheckoutItem from "./CheckoutItem";
import CheckoutPayment from "./CheckoutPayment";
import { connect } from "react-redux";

class Checkout extends Component {
  render() {
    let { cart, history } = this.props
    return (
      <section className="checkout">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 checkout__list">
              <h4>Yours Items({cart.length})</h4>
              <div className="cart__items">
                {
                  cart.map((course, index) => {
                    return (
                      <CheckoutItem course={course} key={index} />
                    )
                  })
                }
              </div>
            </div>
            <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8 checkout__payment">
              <h1>Total : {Math.ceil((cart.length * 19.99) * (20/100))}$</h1>
              <CheckoutPayment history={history} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state) => ({
  cart: state.cart
})




export default connect(mapStateToProps, null)(Checkout)

