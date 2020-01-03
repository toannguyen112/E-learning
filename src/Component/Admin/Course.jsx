import React, { Component } from "react";
import CourseItem from "./CourseItem";
import CourseModal from "./CourseModal";
import { connect } from "react-redux";
import { SEARCH_COURSES ,DELETE_COURSE } from '../../Store/Action/type'

class Course extends Component {
  render() {

    let { course, searchKeyword } = this.props
    console.log(course);

    return (
      <div>
        <div className="title">
          <i className="fa fa-user"></i>
          My Course
        </div>
        <CourseModal handleSearch={this.props.handleSearch} addCourse={this.props.addCourse} />

        <table className="table">
          <thead>
            <tr>
              <th>
                Name <i className="fa fa-sort-alpha-desc" aria-hidden="true" />
              </th>
              <th>Created by</th>
              <th>Published at </th>
              <th>Displayed</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.showCourse(course, searchKeyword)}





          </tbody>
        </table>
      </div>
    );
  }


  showCourse = (courses, searchKeyword) => {
    let result = null;
    let newArr = [...courses];
    if (courses && courses.length > 0) {
      if (searchKeyword && searchKeyword.length > 0) {
        newArr = newArr.filter(item => item.tenKhoaHoc.toLowerCase().indexOf(searchKeyword.toLowerCase().trim()) !== -1);


        result = newArr.map((course, index) => {
          return (
            <CourseItem course={course} key={index} />
          );
        });

      } else {
        result = newArr.map((course, index) => {
          return (
            <CourseItem course={course} key={index}  deleteCourse={this.props.deleteCourse}/>
          );
        });


      }
    }

    return result;
  }
}


const mapStateToProps = (state) => ({

  searchKeyword: state.display.searchKeyword,
  course: state.Course.course
})

const mapDispatchToProps = dispatch => {
  return {
    handleSearch: keyword => {
      dispatch({
        type: SEARCH_COURSES,
        payload: keyword
      });
    },

    deleteCourse: maKhoaHoc => {
      dispatch({
        type: DELETE_COURSE,
        payload: maKhoaHoc
      });
    }
,

    editCourse: course => {
      dispatch({
        type: "EDIT_COURSE",
        payload: course
      });
    }

   
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Course)


