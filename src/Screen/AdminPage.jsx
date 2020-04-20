import React, { Component } from "react";

import Admin from "../Component/Admin/Admin";
import LoadingAdmin from "../Component/Admin/LoadingAdmin";
import { connect } from "react-redux";

import reduxAction from "../Store/Action/action";
import { FETCH_COURSES } from "../Store/Action/type";
import CourseService from "../Services/courseService";
const courseService = new CourseService();
class AdminPage extends Component {



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
    }, 3000);

    courseService
    .fetchCourses()
    .then(res => {
      this.props.dispatch(reduxAction(FETCH_COURSES, res.data));
    })
    .catch(err => {
      console.log(err);
    });
  }
  render() {
    return (
      <div>
        {this.state.loading ? (
          <LoadingAdmin />
        ) : (
          <Admin history={this.props.history} />
        )}
      </div>
    );
  }
}
export default connect()(AdminPage)