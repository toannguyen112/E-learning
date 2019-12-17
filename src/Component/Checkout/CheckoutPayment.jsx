import React, { Component } from 'react'

export default class CheckoutPayment extends Component {
    render() {
        return (
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
                      <input
                        className="card__name"
                        type="text"
                        placeholder="Name on Card"
                        disabled
                      />
                      <input
                        className="card__number"
                        type="text"
                        placeholder="Card Number"
                        disabled
                      />
                      <div className="code">
                        <select className="card__month" name="month" id="">
                          <option value="1">MM</option>
                        </select>
                        <select className="card__year" name="year" id="">
                          <option value="1">YY</option>
                        </select>
                        <input
                          className="card__code"
                          type="text"
                          placeholder="Security Code"
                          disabled
                        />
                      </div>
                      <div className="zip">
                        <select className="country" disabled>
                          <option value="1">VietNam</option>
                        </select>
                        <input
                          className="zipcode"
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
        )
    }
}
