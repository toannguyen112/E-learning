import React, { Component } from "react";

import Pagination from "../Pagination/Pagination";
import "react-pagination-js/dist/styles.css";
import { connect } from "react-redux";
import CourseOfcourses from "../Course/CourseOfcourses";
import CourseDisplayRow from "../Course/CourseDisplayRow";

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayListCourse: false,
    };
  }

  changeDisplay(data) {
    this.setState({
      displayListCourse: data,
    });
  }

  render() {
    let { courses, searchKeyword } = this.props;

    return (
      <div className="Course">
        <div className="courses">
          <div className="container">
            <div className="row sort__filter align-items-center">
              <div className="col-md-6 col-sm-12 py-3">
                <div className="sort">
                  <span
                    className={!this.state.displayListCourse ? "active" : ""}
                    onClick={() => this.changeDisplay(false)}
                  >
                    <i className="fa fa-th-list" aria-hidden="true" />
                  </span>
                  <span
                    className={this.state.displayListCourse ? "active" : ""}
                    onClick={() => this.changeDisplay(true)}
                  >
                    <i className="fa fa-th-list" aria-hidden="true" />
                  </span>
                  <select className="sort__select" disabled>
                    <option value="newness">Sort by name high to low</option>
                    <option value="popularity">Sort by name low to high</option>
                    <option value="low">Sort by price low to high</option>
                    <option value="high">Sort by price high to low</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 py-3">
                <div className="filter text-right">
                  <span>
                    Showing 1–{courses.length} of {this.props.courses.length}{" "}
                    results
                  </span>
                  <span>
                    <span>
                      Filter <i className="fa fa-filter" aria-hidden="true" />
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="row sort__items">
              {!this.state.displayListCourse
                ? this.showCourseItem(courses, searchKeyword)
                : this.showCourseDisplayRow(courses, searchKeyword)}
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    );
  }

  showCourseItem = (courses, searchKeyword) => {
    let result = null;
    let newArr = [...courses];
    if (courses && courses.length > 0) {
      if (searchKeyword && searchKeyword.length > 0) {
        newArr = newArr.filter(
          (item) =>
            item.tenKhoaHoc
              .toLowerCase()
              .indexOf(searchKeyword.toLowerCase().trim()) !== -1
        );

        result = newArr.map((course, index) => {
          return (
            <div className="col-md-3 col-sm-3 my-3" key={index}>
              <CourseOfcourses course={course} />
            </div>
          );
        });
      } else {
        result = newArr.map((course, index) => {
          return (
            <div className="col-md-3 col-sm-3 my-3" key={index}>
              <CourseOfcourses course={course} />
            </div>
          );
        });
      }
    }

    return result;
  };
  showCourseDisplayRow = (courses, searchKeyword) => {
    let result = null;
    let newArr = [...courses];
    if (courses && courses.length > 0) {
      if (searchKeyword && searchKeyword.length > 0) {
        newArr = newArr.filter(
          (item) =>
            item.tenKhoaHoc
              .toLowerCase()
              .indexOf(searchKeyword.toLowerCase().trim()) !== -1
        );

        result = newArr.map((course, index) => {
          return <CourseDisplayRow course={course} />;
        });
      } else {
        result = newArr.map((course, index) => {
          return <CourseDisplayRow course={course} />;
        });
      }
    }

    return result;
  };
}

const mapStateToProps = (state) => ({
  searchKeyword: state.display.searchKeyword,
  courses: state.Course.course,
});

export default connect(mapStateToProps)(Courses);
