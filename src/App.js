import React, { Component } from "react";
import "./sass/main.scss";
import "./App.css";
import HomePage from "./Screen/HomePage";
import CoursesPage from "./Screen/CoursePage";
import LoginPage from "./Screen/LoginPage";
import CourseDetailPage from "./Screen/CourseDetailPage";
import CartPage from "./Screen/CartPage";
import CheckoutPage from "./Screen/CheckoutPage";
import SignUpPage from "./Screen/SignUpPage";
import UserPage from "./Screen/UserPage";
import AdminPage from "./Screen/AdminPage";
import CourseService from "./Services/courseService";
import Auth from './Component/Auth/auth'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import reduxAction from "./Store/Action/action";
import { FETCH_COURSES } from "./Store/Action/type";

import { FETCH_COURSES_CATALOG } from "./Store/Action/type";
import { connect } from "react-redux";
// import Header from "./Component/Header/Header";
const courseService = new CourseService();

class App extends Component {
  componentDidMount() {
    
    courseService
      .fetchCourses()
      .then(res => {
        this.props.dispatch(reduxAction(FETCH_COURSES, res.data));
      })
      .catch(err => {
        console.log(err);
      });

    courseService
      .fetchCourseCatalog()
      .then(res => {
        this.props.dispatch(reduxAction(FETCH_COURSES_CATALOG, res.data));
      })
      .catch(err => {
        console.log(err);
      });

    // courseService
    //   .fixCourseImgServer()
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
         
          <Switch>
           
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/coursedetail/:courseid" component={CourseDetailPage}  />
            <Route exact path="/courses" component={CoursesPage} />
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            {/* <Route exact path="/user" component={UserPage} /> */}
            <Auth path="/user" Component={UserPage}/>
            <Route exact path="/admin" component={AdminPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default connect()(App);
