import React, { Component } from 'react'
import "./sass/main.scss"
import "./App.css";
import HomePage from './Screen/HomePage';

import CoursePage from './Screen/CoursePage';



export default class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <HomePage/> */}
        {/* <SignUp/> */}
        {/* <Login /> */}
        {/* <CourseDetail/> */}
        <CoursePage/> 

        {/* <CartPage/> */}
        {/* <CheckoutPage/> */}
        {/* <UserPage /> */}
        {/* <AdminPage/> */}
      </div>
    )
  }
}
