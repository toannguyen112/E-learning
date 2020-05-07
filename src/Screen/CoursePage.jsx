import React, { Component } from "react";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Courses from "../Component/Courses/Courses";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
import Loader from "../Component/Loader/Loader";
import Footer__inst from "../Component/footer__inst/Footer__inst";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button"; 

class CoursePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 2000);
  }

  render() {
    let { courses, history } = this.props;

    return (
      <div className="wrapper">
        <Header history={history} />
        {this.state.loading ? (
          <Loader />
        ) : (
          <Fade bottom>
            <Courses courses={courses} />
          </Fade>
        )}
        <Footer__inst/>
        <Footer />
        <ScrollUpButton />
      </div>
    );
  }
}

const mapStateTopProp = (state) => {
  return {
    courses: state.Course.course,
  };
};

export default connect(mapStateTopProp, null)(CoursePage);
