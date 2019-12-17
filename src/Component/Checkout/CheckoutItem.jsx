import React, { Component } from "react";

export default class CheckoutItem extends Component {
  render() {
    return (
      <div className="row cart__item">
        <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 item__thumb  pr-0">
          <img src="/img/item2.jpg" className="img-fluid" />{" "}
        </div>
        <div className="col-sm-9 col-md-9 col-lg-9 col-xl-9 item__info">
          <h6>The Web Developer Bootcamp & Data Analytics</h6>
          <p>by Jose Portilla Head of Data Science, Pierian Data Inc.</p>
          <h5>$19.99</h5>
        </div>
      </div>
    );
  }
}
