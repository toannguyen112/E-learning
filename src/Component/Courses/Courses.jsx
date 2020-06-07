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
      displayType: false,
      typeSort: "priceLowToHigh",
    };
  }

  changeDisplay(data) {
    this.setState({
      displayType: data,
    });
  }
  handleChange = (event) => {
    this.setState({
      typeSort: event.target.value,
    });
  };


  showItem = (courses, displayType, searchKeyword, sort) => {
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

        result = newArrCourses;
      }

      // sort
      this.sort(newArrCourses, sort);


      // display type course
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

  sort = (newArrCourses, sort) => {
    switch (sort) {
      case 'priceLowToHigh':
        newArrCourses.sort((a, b) => {
          return a.price - b.price;
        });
        break;

      case 'priceHighToLow': {
        newArrCourses.sort((a, b) => {
          return b.price - a.price;
        });
        break;

      }

      case 'nameHighToLow': {
        newArrCourses.sort((a, b) => {
          var nameA = a.tenKhoaHoc.toUpperCase(); // bỏ qua hoa thường
          var nameB = b.tenKhoaHoc.toUpperCase(); // bỏ qua hoa thường
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          // name trùng nhau
          return 0;
        })
        break;

      }
      case 'nameLowToHigh': {
        newArrCourses.sort((c, d) => {
          var nameA = c.tenKhoaHoc.toUpperCase(); // bỏ qua hoa thường
          var nameB = d.tenKhoaHoc.toUpperCase(); // bỏ qua hoa thường
          if (nameA > nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          // name trùng nhau
          return 0;
        })
        break
      }

      default:
        break;
    }

  }

  render() {
    let { courses, searchKeyword, sort } = this.props;
    let { displayType, typeSort } = this.state;
    console.log(typeSort);

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
                    value={this.state.typeSort}
                    onChange={this.handleChange}
                    className="sort__select"
                  >
                    <option value="priceLowToHigh">
                      Sort by price low to high
                    </option>
                    <option value="priceHighToLow">
                      Sort by price high to low
                    </option>
                    <option value="nameHighToLow">
                      Sort by name high to low
                    </option>
                    <option value="nameLowToHigh">
                      Sort by name low to high
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
              {this.showItem(courses, displayType, searchKeyword, typeSort)}
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
  sort: state.sort,
});

export default connect(mapStateToProps)(Courses);
