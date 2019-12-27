import React, { Component } from "react";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Courses from "../Component/Courses/Courses";
import { connect } from "react-redux";

class CoursePage extends Component {


  render() {
    let { courses, history } = this.props;

    return (
      <div>
        <Header history={history} />
        <Courses courses={courses} />
        <Footer />
      </div>
    );
  }
}

const mapStateTopProp = state => {
  return {
    
    courses: state.Course.course
  };
};

export default connect(mapStateTopProp, null)(CoursePage);
