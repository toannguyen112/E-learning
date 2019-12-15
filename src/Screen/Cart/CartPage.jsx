import React, { Component } from "react";
import Header from "../../Screen/Home/Header";
import TopSelling from "../Home/TopSelling";
import Footer from "../Home/Footer";
export default class CartPage extends Component {
    render() {
        return (
            <div>
                <Header />
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
                                        <tr className="cart_item">
                                            <td className="cart_thumbnail">
                                                <div>
                                                    <img
                                                        src="./img/item12.jpg"
                                                        className="img-fluid"
                                                        alt=""
                                                    />
                                                </div>
                                            </td>
                                            <td className="cart_name">
                                                <div>
                                                    The Complete React Developer Course (w/ Hooks and ...
                        </div>
                                                <div>
                                                    By Jonas Schmedtmann, Web Developer, Designer...
                        </div>
                                            </td>
                                            <td className="cart_price">
                                                <div className="amount">
                                                    $19.90 <i className="fa fa-tag"></i>
                                                </div>
                                                <div className="oldamount">$199.90</div>
                                            </td>
                                            <td className="cart_remove">
                                                <div className="btn__remove">
                                                    <a href="">
                                                        <i className="fa fa-times"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
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
                                                <td className="amount">$20.00</td>
                                            </tr>
                                            <tr>
                                                <td style={{ fontWeight: "bold" }}>Total</td>
                                                <td className="amount" style={{ fontSize: "1.4rem" }}>
                                                    $20.00
                        </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2">
                                                    <a href="">
                                                        <button className="add">PROCEED TO CHECKOUT</button>
                                                    </a>
                                                    <a href="">
                                                        <button className="continue">
                                                            CONTINUE SHOPPING
                            </button>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <TopSelling />
                <Footer />
            </div>
        );
    }
}
