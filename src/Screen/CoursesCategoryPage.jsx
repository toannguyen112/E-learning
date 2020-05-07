import React, { Component } from "react";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Footer__inst from "../Component/footer__inst/Footer__inst";
import { connect } from "react-redux";
import Category from "../Component/Category/Category";
import CourseService from "../Services/courseService";
import Loader from "../Component/Loader/Loader";
const courseService = new CourseService();

class CoursesCategoryPage extends Component {

  loader = ()=>{
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1000);
  }
 
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
      maDanhMuc: "",
      loading: true,
    };
  }

  setId = (id) => {
    this.setState({
      maDanhMuc: id,
    });
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.setId(id);
    courseService
      .fetchCourseOnCatalog(id)
      .then((res) => {
        this.setState({
          courses: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

      this.loader()
  }

  showCourseCategory = (courses, maDanhMuc) => {
    let result = null;

    const arrCcourse = courses.filter(
      (course) => course.danhMucKhoaHoc.maDanhMucKhoahoc === maDanhMuc
    );
    result = <Category courses={arrCcourse} maDanhMuc={maDanhMuc} />;
    return result;
  };
  render() {
    let { courses } = this.props;
    let { maDanhMuc } = this.state;

    return (
      <div>
        <Header history={this.props.history} />

        {this.state.loading ? (
          <Loader />
        ) : (
          this.showCourseCategory(courses, maDanhMuc)
        )}

        <Footer__inst />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  courses: state.Course.course,
});

export default connect(mapStateToProps, null)(CoursesCategoryPage);
