import React, { Component } from "react";

import UserPage from "./Screen/UserPage";
import Auth from "./Component/Auth/auth";
import FavoritesPage from "./Screen/FavoritesPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./sass/main.scss";
import "./App.css";

import routes from "./routes/routes";

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
        <BrowserRouter>
          <Switch>
            {this.showRoutes(routes)}
            <Auth path="/favorites" Component={FavoritesPage} />

            <Auth path="/user" Component={UserPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  showRoutes = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            component={route.main}
          />
        );
      });
    }

    return result;
  };
}
