import React, { Component } from "react";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";

import Courses from "../Component/Courses/Courses";

export default class CoursePage extends Component {
  render() {
    return (

      <div>
        <Header />
        <Courses/>
        <Footer />

      </div>
    );
  }
}
