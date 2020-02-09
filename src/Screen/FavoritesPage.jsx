import React, { Component, Fragment } from "react";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Favories from "../Component/Favorites/Favories";

class FavoritesPage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Favories history={this.props.history} />
        <Footer />
      </Fragment>
    );
  }
}

export default FavoritesPage;
