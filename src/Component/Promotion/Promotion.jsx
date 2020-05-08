import React, { Component } from "react";
import PromotionCard from "./PromotionCard";
import { Link } from "react-router-dom";

export default class Promotion extends Component {

  showViewingItem = (courseList) => {
    let result = [];
    if (courseList && courseList.length > 0) {

      for (let i = 2; i < 10; i++) {
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
            <h5>
              Promotion</h5>
            <Link to="/courses">
              View more...
              <i className="fa fa-arrow-circle-right" aria-hidden="true" />

            </Link>
          </div>
          <div className="promotion__content__product">
            <div className="card description" id="item-1">
              <div className="description__content">
                <div className="description_text--top">
                  The world’s largest selection of courses
               </div>
                <div className="description_text--bot">
                  Choose from over 100,000 online video courses with new additions published every month
               </div>
              </div>
              {/* <img
                className="card-img-top"
                src="https://dvch1hlupt.cdn.hostvn.net/HOTDEAL.png"
                alt=""
              /> */}
            </div>
            {this.showViewingItem(courseList)}
          </div>
        </div>
      </div>
    );
  }
}
