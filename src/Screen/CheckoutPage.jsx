import React, { Component } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

export default class CheckoutPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="checkout">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 checkout__list">
                <h4>Yours Items(1)</h4>
                <div className="cart__items">
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
                </div>
              </div>
              <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8 checkout__payment">
                <h1>Total : $0</h1>
                <div className="payment">
                  <div className="card">
                    <div className="card__header">
                      <div className="card__radio">
                        <input type="radio" />
                      </div>
                      <div className="card__image">
                        <span>New Payment Cart</span>
                        <span>
                          <img
                            src="/img/payment-option.png"
                            style={{ width: "30%" }}
                            alt=""
                          />
                        </span>
                      </div>
                    </div>
                    <div className="card__body">
                      <form>
                        <input className="card__name"
                          type="text"
                          placeholder="Name on Card"
                          disabled
                        />
                        <input className="card__number" type="text" placeholder="Card Number" disabled />
                        <div className="code">
                          <select className="card__month" name="month" id="">
                            <option value="1">MM</option>
                          </select>
                          <select className="card__year" name="year" id="">
                            <option value="1">YY</option>
                          </select>
                          <input className="card__code"
                            type="text"
                            placeholder="Security Code"
                            disabled
                          />
                        </div>
                        <div className="zip">
                          <select className="country" disabled>
                            <option value="1">VietNam</option>
                          </select>
                          <input className="zipcode"
                            type="text"
                            placeholder="Zip/Postal Code"
                            disabled
                          />
                        </div>
                        <div className="card__footer">
                          <button>Complete Payment</button>
                          <p>
                            By completing your purchase you agree to these{" "}
                            <span>Terms of Service.</span>
                          </p>
                          <div className="lock">
                            <i className="fa fa-lock"></i>
                            <span>Secure Connection</span>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
