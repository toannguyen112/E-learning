import React, { Component, Fragment } from "react";
import FeaturedItem from "./FeaturedItem";

const arrAngularJs = [
  {
    name: "Spring Framework Development (Java JEE) with AngularJS UI",
    img: "https://img-a.udemycdn.com/course/240x135/2308032_fcc7.jpg ",
  },
  {
    name: "AngularJS JumpStart with Dan Wahlin",
    img: "https://img-a.udemycdn.com/course/125_H/164554_a2dd_7.jpg",
  },
  {
    name: "Angular JS [Beginner to Advance] with Bootstrap",
    img: "https://img-a.udemycdn.com/course/125_H/2698780_228e_2.jpg ",
  },
];
const arrTypescript = [
  {
    name: "Understanding TypeScript - 2020 Edition",
    img: "https://img-a.udemycdn.com/course/125_H/947098_02ec.jpg ",
  },
  {
    name: "Understanding TypeScript - 2020 Edition",
    img: "https://img-a.udemycdn.com/course/125_H/2337318_abfd_4.jpg",
  },
  {
    name: "Angular Crash Course for Busy Developers",
    img: "https://img-a.udemycdn.com/course/125_H/719002_af70_3.jpg",
  },
];
const arrMicrosoftWindows = [
  {
    name: "Mastering Windows 10 Made Easy Training Tutorial",
    img: "https://img-a.udemycdn.com/course/125_H/622228_6c89.jpg ",
  },
  {
    name: "Learn Microsoft Windows 10 the Easy Way for Beginners",
    img: "https://img-a.udemycdn.com/course/125_H/1140314_ee12_2.jpg",
  },
  {
    name: "Windows 10",
    img: "https://img-a.udemycdn.com/course/125_H/566534_2374_2.jpg ",
  },
];
export default class Featured extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Angularjs: true,
      Typescript: false,
      MicrosoftWindows: false,
    };
  }

  handleChangeList = (param) => {
    this.setState(() => {
      return {
        Angularjs: false,
        Typescript: false,
        MicrosoftWindows: false,
        [param]: true,
      };
    });
  };

  renderlistCourse = (arrAngularJs) => {
    return (
      <Fragment>
        {arrAngularJs.map((course, index) => {
          return <FeaturedItem course={course} key={index} />;
        })}
      </Fragment>

    );
  };

  showList = (value) => {
    let { Angularjs, Typescript, MicrosoftWindows } = this.state;

    if (Angularjs) {
      return (
        <ul className="topic__course__list">
          {this.renderlistCourse(arrAngularJs)}
        </ul>
      );
    } else if (Typescript) {
      return (
        <ul className="topic__course__list">
          {this.renderlistCourse(arrTypescript)}
        </ul>
      );
    } else if (MicrosoftWindows) {
      return (
        <ul className="topic__course__list">
          {this.renderlistCourse(arrMicrosoftWindows)}
        </ul>
      );
    }
  };

  render() {
    let { title } = this.props;
    return (
      <div className="featured">
        <div className="container">
          <h2 className="featured__head"> {title} </h2>
          <div className="wrapper__topic">
            <div className="row">
              <div className="col-md-3 ">
                <ul className="topic__title__list">
                  <li
                    className={`topic__title__list__item ${
                      this.state.Angularjs ? "active" : ""
                      }`}
                    onClick={() => this.handleChangeList("Angularjs")}
                  >
                    Angular Js
                </li>
                  <li
                    className={`topic__title__list__item ${
                      this.state.Typescript ? "active" : ""
                      }`}
                    onClick={() => this.handleChangeList("Typescript")}
                  >
                    Typescript
                </li>
                  <li
                    className={`topic__title__list__item ${
                      this.state.MicrosoftWindows ? "active" : ""
                      }`}
                    onClick={() => this.handleChangeList("MicrosoftWindows")}
                  >
                    Microsoft Windows
                </li>
                </ul>
              </div>
              <div className="col-md-9 ">{this.showList()}</div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
