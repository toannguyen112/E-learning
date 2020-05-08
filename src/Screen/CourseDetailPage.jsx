import React, { Component } from "react";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";

// import reduxAction from "../Store/Action/action";
// import { FETCH_COURSE_DETAIL } from "../Store/Action/type";
// import CourseService from "../Services/courseService";

import { connect } from "react-redux";
import CourseItem from "../Component/courseItem/CourseItem";
import Loader from "../Component/Loader/Loader";
import Footer__inst from '../Component/footer__inst/Footer__inst'

import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";

// const courseService = new CourseService();
class CourseDetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courseDetail: {},
      loading: true,
      id: 0,
    };
  }

  // call api

  // componentDidMount() {
  //   // lấy tham số mã khóa học từ url
  //   const { courseid } = this.props.match.params;
  //   courseService
  //     .fetchCourseDetail(courseid)
  //     .then((res) => {
  //       // this.props.dispatch(reduxAction(FETCH_COURSE_DETAIL, res.data));
  //       this.setState({
  //         courseDetail: res.data,
  //       });

  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   setTimeout(() => {
  //     this.setState({
  //       loading: false,
  //     });
  //   }, 2000);
  // }

  // ko call api
  componentDidMount() {
    this.setState({
      id: this.props.match.params.courseid,
    });

    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 2000);
  }

  render() {
    let { courseDetail, id } = this.state;
    let { courses } = this.props;

    return (
      <div>
        <Header history={this.props.history} />
          
        {this.state.loading ? (
          <Loader />
        ) : (
            // <CourseItem
            //   courseDetail={courseDetail}
            //   history={this.props.history}
            // />
            <>
              {this.showItem(courses, id)}
            </>
          )}
          <Footer__inst/>
          <Footer />
        <ScrollUpButton />
      </div>
    );
  }
  showItem = (courses, id) => {
    let result = null;
    let thisItem = null;

    if (courses.length > 0) {
      thisItem = courses.find((course) => {
        return course.maKhoaHoc === id;
      });
    } else {
      return;
    }

    result = <CourseItem course={thisItem} history={this.props.history} />;

    return result;
  };
}

const mapStateToProps = (state) => {
  return {
    courses: state.Course.course,
  };
};

export default connect(mapStateToProps, null)(CourseDetailPage);
