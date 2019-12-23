import React, { Component } from "react";
import PromotionCard from "./PromotionCard";
import { Link } from "react-router-dom";

export default class Promotion extends Component {

  showViewingItem = (courseList) => {
    let result = [];
    if (courseList && courseList.length > 0) {

      for (let i = 0; i < 8; i++) {
        result.push(<PromotionCard key={i} courseList={courseList[i]} />)


      }
    }

    return result;
  }

  render() {
    let { courseList } = this.props
    return (
      <div className="promotion">
        <div className="promotion__content container">
          <div className="promotion__content__title__section ">
            <h5>Khuyến mãi</h5>
            <Link to="/courses">
            View more...
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
            {this.showViewingItem(courseList)}
          </div>
        </div>
      </div>
    );
  }
}
