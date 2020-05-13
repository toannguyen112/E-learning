import React, { Component, Fragment } from "react";
import Countdown from "../Component/Countdown/Countdown";
import Header from "../Component/Header/Header";
import Banner from "../Component/Banner/Banner";
import Promotion from "../Component/Promotion/Promotion";
import TopSelling from "../Component/Topselling/TopSelling";
import Featured from "../Component/Featured/Featured";
import Skill from "../Component/Skill/Skill";
import Footer from "../Component/Footer/Footer";
import CourseService from "../Services/courseService";
import Hotline from "../Component/Hotline/Hotline";
import LinkBar from "../Component/LinkBar/LinkBar";
import Recom from "../Component/Recommended/Recom";
import reduxAction from "../Store/Action/action";
import { connect } from "react-redux";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button"; //Add this line Here
import { FETCH_COURSES } from "../Store/Action/type";
import Welcome from "../Component/Welcome/Welcome";
import SmartBar from "../Component/SmartBar/SmartBar";
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

  showWelcome = () => {
    const user = JSON.parse(localStorage.getItem("userLogin"));
    if (user) {
      return <Welcome />;
    } else {
      return "";
    }
  };

  render() {
    let { courseList, history } = this.props;
    let { courseCatalog } = this.state;

    return (
      <div className="wrapper">
        <Fragment>
          <SmartBar />
          <Header history={history} courseCatalog={courseCatalog} />

          <LinkBar courseCatalog={courseCatalog} />

          {this.showWelcome()}
          <Banner />
          <Promotion courseList={courseList} />
          <Recom />
          <TopSelling title={"TopSelling"} courseList={courseList} />
          <TopSelling title={"Students are viewing"} courseList={courseList} />
          <TopSelling
            title={"Because you viewed How to Draw Cute Cartoon Characters"}
            courseList={courseList}
          />

          <Featured  title={"Featured courses in Angular"} courseList={courseList} />

          <Skill  title={"What people who learn Angular take next"} courseList={courseList} />
          <Skill   title={"Featured courses in Vue JS"} courseList={courseList} />
          <Featured  title={"Featured courses in React Js"} courseList={courseList} />
          <Skill  title={"What people who learn Angular take next"} courseList={courseList} />

          <Countdown />
          <Footer />
          <ScrollUpButton />
          {/* <Hotline /> */}
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
