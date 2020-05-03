import React, { Component, Fragment } from "react";
import Countdown from "../Component/Countdown/Countdown";
import Header from "../Component/Header/Header";
import Banner from "../Component/Banner/Banner";
import Promotion from "../Component/Promotion/Promotion";
import TopSelling from "../Component/Topselling/TopSelling";
import Featured from "../Component/Featured/Featured";
import Intro from "../Component/Intro/Intro";
import Footer from "../Component/Footer/Footer";
import CourseService from "../Services/courseService";
import Hotline from "../Component/Hotline/Hotline";
import reduxAction from "../Store/Action/action";
import { connect } from "react-redux";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button"; //Add this line Here
import { FETCH_COURSES } from "../Store/Action/type";
const courseService = new CourseService();

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courseCatalog: [],
      loading: true,
    };
  }

  getCatalog = (data) => {
    this.setState({
      courseCatalog: data,
    });
  };

  componentDidMount() {
    courseService
      .fetchCourses()
      .then((res) => {
        this.props.dispatch(reduxAction(FETCH_COURSES, res.data));
      })
      .catch((err) => {
        console.log(err);
      });

    courseService
      .fetchCourseCatalog()
      .then((res) => {
        this.getCatalog(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let { courseList, history } = this.props;
    let { courseCatalog } = this.state;
    return (
      <div className="wrapper">
        <Fragment>
          <Header history={history} />
          <Banner courseCatalog={courseCatalog} />
          <Promotion courseList={courseList} />

          <TopSelling courseList={courseList} />

          <Featured courseList={courseList} />

          <Intro />
          <Countdown />

          <Footer />
          <ScrollUpButton />
          <Hotline />
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    courseList: state.Course.course,
  };
};
export default connect(mapStateToProps, null)(HomePage);
