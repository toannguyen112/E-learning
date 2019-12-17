import React, { Component } from "react";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Checkout from "../Component/Checkout/Checkout";

export default class CheckoutPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Checkout/>
        <Footer />
      </div>
    );
  }
}
