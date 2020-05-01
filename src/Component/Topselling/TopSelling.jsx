import React, { Component } from "react";

import Course from "../Course/Course";

export default class TopSelling extends Component {
  render() {
    let { courseList } = this.props;

    return (
      <div className="TopSelling">
        <div className=" container p-0">
          <h5  style={{paddingLeft :"15px"}} className="title">Top Selling</h5>
          <div className="row product__items">
            {this.showViewingItem(courseList)}
          </div>
        </div>
      </div>
    );
  }

  showViewingItem = (courseList) => {
    let result = [];
    if (courseList && courseList.length > 0) {
      for (let i = 10; i < 14; i++) {
        result.push(<Course key={i} course={courseList[i]} />);
      }
    }
    return result;
  };
}
