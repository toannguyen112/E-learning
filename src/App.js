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

import { BrowserRouter, Switch, Route } from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div className="App">

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/CourseDetail" component={CourseDetailPage} />
            <Route exact path="/Courses" component={CoursesPage} />
            <Route exact path="/Cart" component={CartPage} />
            <Route exact path="/SignUp" component={SignUpPage} />
            <Route exact path="/Login" component={LoginPage} />
            <Route exact path="/Checkout" component={CheckoutPage} />
            <Route exact path="/User" component={UserPage} />
            <Route exact path="/AdminPage" component={AdminPage} />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}
