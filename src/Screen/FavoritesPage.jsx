import React, { Component, Fragment } from "react";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Favories from "../Component/Favorites/Favories";
import Loader from "../Component/Loader/Loader";
import Footer__inst from '../Component/footer__inst/Footer__inst'

export default class FavoritesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 1000);
  }
  render() {
    return (
      <Fragment>
        <Header history={this.props.history} />

        {this.state.loading ? (
          <Loader />
        ) : (
            <>
              <Favories history={this.props.history} />
            </>
          )}
        <Footer__inst />
        <Footer />
      </Fragment>
    );
  }
}

;
