import React, { Component } from 'react'
import "./sass/main.scss"
import "./App.css";

import Home from "./Screen/Home/Home";
import SignUp from './Screen/SignUp/SignUp';
import Login from './Screen/Login/Login';
import CourseDetail from './Screen/CourseDetail/CourseDetail';
import Course from './Screen/Course/Course';
import CartPage from './Screen/Cart/CartPage';
import UserPage from './Screen/UserPage/UserPage';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Home/> */}
        {/* <SignUp/> */}
        {/* <Login /> */}
        {/* <CourseDetail/> */}
        <Course/> 

        {/* <CartPage/> */}
        {/* <UserPage /> */}
      </div>
    )
  }
}
