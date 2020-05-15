import React, { Component } from "react";

import Course from "../Course/Course";

export default class TopSelling extends Component {
  render() {
    let { courseList, title } = this.props;

    return (
      <div className="TopSelling">
        <div className=" container ">
          <h5 className="title"> {title} </h5>
          <div className=" product__items">
            {this.showViewingItem(courseList)}
          </div>
        </div>
      </div>
    );
  }

  showViewingItem = (courseList) => {
    let result = [];
    if (courseList && courseList.length > 0) {
      for (let i = 10; i < 15; i++) {
        result.push(<Course key={i} course={courseList[i]} />);
      }
    }
    return result;
  };
}
