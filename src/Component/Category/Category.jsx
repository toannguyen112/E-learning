import React, { Component } from "react";
import CourseDisplayRow from "../Course/CourseDisplayRow";

export default class Category extends Component {
  render() {
    let { courses, maDanhMuc } = this.props;
    console.log(courses);

    return (
      <div className="wrapper__category">
        <div className="jumboTron ">
          <div className="container">
            <div className="row">
              <div className=" col-sm-12 ">
                <h3 className="jumboTron__name"> {maDanhMuc} </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="courses">
          <div className="courses__content container">
            <h3 className="category__section">Courses to get you started</h3>
            {courses.map((course, index) => {
              return <CourseDisplayRow course={course} key={index} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
