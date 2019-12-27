import React, { Component } from "react";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";

import  Cart  from "../Component/Cart/Cart";
export default class CartPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Cart />

        <Footer />
      </div>
    );
  }
}
