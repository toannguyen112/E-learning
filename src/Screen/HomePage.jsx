import React, { Component } from "react";

import Countdown from "../Component/Countdown/Countdown";
import Header from "../Component/Header/Header";
import Banner from "../Component/Banner/Banner";
import Promotion from "../Component/Promotion/Promotion";
import TopSelling from "../Component/Topselling/TopSelling";
import Featured from "../Component/Featured/Featured";
import Intro from "../Component/Intro/Intro";
import Footer from "../Component/Footer/Footer";
// import ScrollUpButton from "react-scroll-up-button";

import { connect } from "react-redux";
class HomePage extends Component {
  render() {
    return (
      <div className="wrapper">
        {/* header  */}
        <Header />

        {/* banner */}
        <Banner courseCatalog={this.props.courseCatalog} />

        {/* promotion */}

        <Promotion courseList={this.props.courseList} />

        {/* top selling */}
        <TopSelling courseList={this.props.courseList} />
        {/* featured */}
        <Featured courseList={this.props.courseList} />
        {/* intro */}
        <Intro />
        <Countdown />
        {/* footer */}
        <Footer />
        {/*ScrollUpButton  */}

        {/* <ScrollUpButton style={{ width: 75 }} ToggledStyle={{ right: 100 }} /> */}
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
export default connect(mapStateToProps)(HomePage);
