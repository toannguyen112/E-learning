import React, { Component } from "react";

import Pagination from "../Pagination/Pagination";
import "react-pagination-js/dist/styles.css";
import { connect } from "react-redux";
import CourseOfcourses from "../Course/CourseOfcourses";
import CourseDisplayRow from "../Course/CourseDisplayRow";
import reduxAction from '../../Store/Action/action'
import {
  SORT_PRICE_HIGH_TO_LOW,
  SORT_PRICE_LOW_TO_HIGH,
  SORT_NAME_LOW_TO_HIGH,
  SORT_NAME_HIGH_TO_LOW,
} from "../../Store/Action/type";
class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayType: false,
      value: "nameHighToLow",
      itemsPerPage: 1,
      itemsPerPage: 16,
    };
  }

  changeDisplay(data) {
    this.setState({
      displayType: data,
    });
  }
  handleChange = (event) => {
    this.setState(
      {
        value: event.target.value,
      },
      () => {
        this.sortCourse(this.state.value);
      }
    );
  };
  sortCourse = (value) => {
    if (value == "priceLowToHigh") {
      this.props.dispatch(reduxAction(SORT_PRICE_LOW_TO_HIGH));
    } else if (value == "priceHighToLow") {
      this.props.dispatch(reduxAction(SORT_PRICE_HIGH_TO_LOW));
    } else if (value == "nameHighToLow") {
      this.props.dispatch(reduxAction(SORT_NAME_HIGH_TO_LOW));
    } else if (value == "nameLowToHigh") {
      this.props.dispatch(reduxAction(SORT_NAME_LOW_TO_HIGH));
    }
  };

  showItem = (courses, displayType, searchKeyword) => {
    let result = null;
    let newArrCourses = [...courses];

    if (courses && courses.length > 0) {
      if (searchKeyword.length > 0) {
        //Filter search keyword
        newArrCourses = newArrCourses.filter(
          (item) =>
            item.tenKhoaHoc
              .toLowerCase()
              .indexOf(searchKeyword.toLowerCase().trim()) !== -1
        );
      }
      if (!displayType) {
        result = newArrCourses.map((course, index) => {
          return (
            <div className="col-md-3 col-sm-3 my-3" key={index}>
              <CourseOfcourses course={course} />
            </div>
          );
        });
      } else {
        result = newArrCourses.map((course, index) => {
          return <CourseDisplayRow course={course} key={index} />;
        });
      }
    }

    return result;
  };

  render() {
    let { courses, searchKeyword } = this.props;
    let { displayType } = this.state;

    return (
      <div className="Course">
        <div className="courses">
          <div className="container">
            <div className="row sort__filter">
              <div className=" sort__filter--top  col-md-6 col-sm-12 ">
                <div className="sort">
                  <span
                    className={!this.state.displayType ? "active" : ""}
                    onClick={() => this.changeDisplay(false)}
                  >
                    <i className="fa fa-th-list" aria-hidden="true" />
                  </span>
                  <span
                    className={this.state.displayType ? "active" : ""}
                    onClick={() => this.changeDisplay(true)}
                  >
                    <i className="fa fa-th-list" aria-hidden="true" />
                  </span>
                  <select
                    value={this.state.value}
                    onChange={this.handleChange}
                    className="sort__select"
                  >
                    <option value="nameHighToLow">
                      Sort by name high to low
                    </option>
                    <option value="nameLowToHigh">
                      Sort by name low to high
                    </option>
                    <option value="priceLowToHigh">
                      Sort by price low to high
                    </option>
                    <option value="priceHighToLow">
                      Sort by price high to low
                    </option>
                  </select>
                </div>
              </div>
              <div className=" sort__filter--bot  col-md-6 col-sm-12 ">
                <div className="filter ">
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
              {this.showItem(courses, displayType, searchKeyword)}
            </div>
          </div>
          <Pagination
            JSXitems={courses}
            handlePagination={this.handlePagination}
          />
        </div>
      </div>
    );
  }

 
}

const mapStateToProps = (state) => ({
  searchKeyword: state.display.searchKeyword,
  courses: state.Course.course,
});

export default connect(mapStateToProps)(Courses);
