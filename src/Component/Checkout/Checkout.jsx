import React, { Component } from "react";
import CheckoutItem from "./CheckoutItem";
import CheckoutPayment from "./CheckoutPayment";

export default class Checkout extends Component {
  render() {
    return (
      <section className="checkout">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 checkout__list">
              <h4>Yours Items(1)</h4>
              <div className="cart__items">
                <CheckoutItem/>
              </div>
            </div>
            <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8 checkout__payment">
              <h1>Total : $0</h1>
              <CheckoutPayment/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
