import React, { Component } from "react";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Viewing from "../Component/Viewing/Viewing";
import reduxAction from "../Store/Action/action";
import CourseService from "../Services/courseService";

import { FETCH_COURSE_DETAIL } from "../Store/Action/type";
import { connect } from "react-redux";

import CourseItem from "../Component/courseItem/CourseItem";
import Loader from "../Component/Loader/Loader";
const courseService = new CourseService();
class CourseDetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    // lấy tham số mã khóa học từ url
    const { courseid } = this.props.match.params;
    courseService
      .fetchCourseDetail(courseid)
      .then(res => {
        this.props.dispatch(reduxAction(FETCH_COURSE_DETAIL, res.data));
      })
      .catch(err => {
        console.log(err);
      });

    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 1000);
  }

  render() {
    let { courseDetail, course } = this.props;

    return (
      <div>
        <Header history={this.props.history} />
        {this.state.loading ? (
          <Loader />
        ) : (
          <CourseItem
            courseDetail={courseDetail}
            course={course}
            history={this.props.history}
          />
        )}
        {/* <Viewing /> */}

        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  courseDetail: state.Course.courseDetail || {
    maKhoaHoc: "",
    tenKhoaHoc: "",
    hinhAnh: "",
    nguoiTao: {
      taiKhoan: "",
      hoTen: ""
    }
  },

  course: state.Course.course
});

export default connect(mapStateToProps)(CourseDetailPage);
