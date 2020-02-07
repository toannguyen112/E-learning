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


import { connect } from "react-redux";
import LoadingBackground from "../Component/LoadingBackground/loadingBackground";
import Hotline from "../Component/Hotline/Hotline";
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
    }, 1000);
  }

  render() {
    return (
      <div className="wrapper">
        {this.state.loading ? (
          <div>
            <LoadingBackground />
          </div>
        ) : (
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
          )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    courseList: state.Course.course,
    courseCatalog: state.Course.courseCatalog,
   
  };
};
export default connect(mapStateToProps)(HomePage);
