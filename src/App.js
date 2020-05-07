import React, { Component } from "react";
import HomePage from "./Screen/HomePage";
import CoursesPage from "./Screen/CoursePage";
import LoginPage from "./Screen/LoginPage";
import CourseDetailPage from "./Screen/CourseDetailPage";
import CartPage from "./Screen/CartPage";
import CheckoutPage from "./Screen/CheckoutPage";
import SignUpPage from "./Screen/SignUpPage";
import UserPage from "./Screen/UserPage";
import AdminPage from "./Screen/AdminPage";
import Auth from "./Component/Auth/auth";
import FavoritesPage from "./Screen/FavoritesPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./sass/main.scss";
import "./App.css";
import PucharseHistoryPage from "./Screen/PucharseHistoryPage";
import messagePage from "./Screen/messagePage";
import LoadingBackground from "./Component/LoadingBackground/loadingBackground";
import CoursesCategoryPage from "./Screen/CoursesCategoryPage";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courseCatalog: [],
      loading: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 4000);
  }
  render() {
    return (
      <div className="App">
        {/* {this.state.loading ? <LoadingBackground /> : (
          <BrowserRouter>
            <Switch>
              <Route exact path="/admin" component={AdminPage} />
              <Route exact path="/" component={HomePage} />
              <Route exact path="/home" component={HomePage} />
              <Route
                exact
                path="/coursedetail/:courseid"
                component={CourseDetailPage}
              />
              <Route exact path="/courses" component={CoursesPage} />
              <Route exact path="/cart" component={CartPage} />
              <Route exact path="/signup" component={SignUpPage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/checkout" component={CheckoutPage} />
              <Route exact path="/favorites" component={FavoritesPage} />
              <Route exact path="/pucharse-history" component={PucharseHistoryPage} />
              <Route exact path="/message" component={messagePage} />

              <Auth path="/user" Component={UserPage} />
            </Switch>
          </BrowserRouter>
        )} */}

        <BrowserRouter>
          <Switch>
            <Route exact path="/admin" component={AdminPage} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route
              exact
              path="/coursedetail/:courseid"
              component={CourseDetailPage}
            />
            <Route exact path="/courses" component={CoursesPage} />
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/checkout" component={CheckoutPage} />

            <Route
              exact
              path="/pucharse-history"
              component={PucharseHistoryPage}
            />
            <Route exact path="/message" component={messagePage} />
            <Route
              exact
              path="/category/:id"
              component={CoursesCategoryPage}
            />
            <Auth path="/favorites" Component={FavoritesPage} />

            <Auth path="/user" Component={UserPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
