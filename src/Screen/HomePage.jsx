import React, { Component, Fragment } from "react";

import Countdown from "../Component/Countdown/Countdown";
import Header from "../Component/Header/Header";
import Banner from "../Component/Banner/Banner";
import Promotion from "../Component/Promotion/Promotion";
import TopSelling from "../Component/Topselling/TopSelling";
import Featured from "../Component/Featured/Featured";
import Intro from "../Component/Intro/Intro";
import Footer from "../Component/Footer/Footer";
import ScrollUpButton from "react-scroll-up-button";
import CourseService from '../Services/courseService'
import Hotline from "../Component/Hotline/Hotline";
import { connect } from "react-redux";

import reduxAction from "../Store/Action/action";
import { FETCH_COURSES, FETCH_COURSES_CATALOG } from "../Store/Action/type";


const courseService = new CourseService();

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 2000);

    courseService
      .fetchCourses()
      .then(res => {
        this.props.dispatch(reduxAction(FETCH_COURSES, res.data));
      })
      .catch(err => {
        console.log(err);
      });

    courseService
      .fetchCourseCatalog()
      .then(res => {
        this.props.dispatch(reduxAction(FETCH_COURSES_CATALOG, res.data));
      })
      .catch(err => {
        console.log(err);
      });


  }

  render() {
   


    return (
      <div className="wrapper">
        <Fragment>
          <Header history={this.props.history} />

          <Banner courseCatalog={this.props.courseCatalog} />
          
          <Promotion courseList={this.props.courseList} />

          <TopSelling courseList={this.props.courseList} />

          <Featured courseList={this.props.courseList} />

          <Intro />
          <Countdown />

          <Footer />
          <ScrollUpButton EasingType="linear" />
          <Hotline />
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    courseList: state.Course.course,
    courseCatalog: state.Course.courseCatalog
  };
};
export default connect(mapStateToProps, null)(HomePage);
