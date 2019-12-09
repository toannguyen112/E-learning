import React, { Component } from 'react'
import "./sass/main.scss"
import "./App.css";

import Home from "./Screen/Home/Home";
import SignUp from './Screen/SignUp/SignUp';
import Login from './Screen/Login/Login';
import CourseDetail from './Screen/CourseDetail/CourseDetail';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        {/* <SignUp/> */}
        {/* <Login /> */}
        {/* <CourseDetail/> */}
      </div>
    )
  }
}
