import React, { Component } from "react";

import Course from "../Course/Course";
export default class Skill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Most: true,
      Intermediate: false,

    };
  }
  showTabContentCourse = (courseList) => {
    let { Most, Intermediate } = this.state;

    if (Most) {
      return  this.showCourseitemMost(courseList)
    } else if (Intermediate) {
      return this.showCourseitemIntermediate(courseList)
    }

  }
  showCourseitemMost = (courseList) => {
    let res = [];
    for (let i = 0; i < 5; i++) {
      res.push(<Course  key={i} course={courseList[i]} />)
    }

    return res;
  }
  showCourseitemIntermediate = (courseList) => {
    let res = [];
    for (let i = 15; i < 20; i++) {
      res.push(<Course  key={i} course={courseList[i]} />)
    }

    return res;
  }

  handleChange = (params) => {


    this.setState(() => {
      return {
        Most: false,
        Intermediate: false,
        [params]: true
      }
    })
  }
  render() {

    let { courseList ,title } = this.props


    return (
      <div className="Skill">
        <div className="container">
          <div className="skill__header">
           {title} <a href="">  </a>
          </div>
          <ul className="skill__tab">
            <li className={`tab__item  ${this.state.Most ? 'active' :""}`} onClick={() => this.handleChange("Most")} >Most popular</li>
              < li  className={`tab__item  ${this.state.Intermediate ? 'active' :""}`} onClick={() => this.handleChange("Intermediate")} >Intermediate & advanced</li>
          </ul>
          <div className="tab__content">
            {this.showTabContentCourse(courseList)}
          </div>
        </div>
      </div>
    );
  }
}
