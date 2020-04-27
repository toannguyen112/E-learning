import React, { Component } from "react";

import Course from "../Course/Course";

export default class TopSelling extends Component {
  render() {
    let { courseList } = this.props;




    return (
      <div className="TopSelling">
        <div className="TopSelling__content container">
          <h5 className="title">Top Selling</h5>
          <div className="row product__items">

            {this.showViewingItem(courseList)}
          </div>
        </div>
      </div>
    );
  }

  showViewingItem = courseList => {
    let result = [];
    if (courseList && courseList.length > 0) {
      for (let i = 0; i < 4; i++) {
        result.push(<Course key={i} course={courseList[i]} />);
      }
    }

    return result;
  };
}
