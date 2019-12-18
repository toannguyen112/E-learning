import React, { Component } from "react";
import PromotionCard from "./PromotionCard";
import { Link } from "react-router-dom";

export default class Promotion extends Component {
  render() {
    return (
      <div className="promotion">
        <div className="promotion__content container">
          <div className="promotion__content__title__section ">
            <h5>Khuyến mãi</h5>
            <Link to="/courses">
              Xem thêm
              <i className="fa fa-arrow-circle-right" aria-hidden="true" />

            </Link>
          </div>
          <div className="promotion__content__product">
            <div className="card " id="item-1">
              <img
                className="card-img-top"
                src="https://dvch1hlupt.cdn.hostvn.net/HOTDEAL.png"
                alt=""
              />
            </div>
            <PromotionCard />
          </div>
        </div>
      </div>
    );
  }
}
