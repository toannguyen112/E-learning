import React, { Component } from "react";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Checkout from "../Component/Checkout/Checkout";
import Loader from "../Component/Loader/Loader";
import Footer__inst from '../Component/footer__inst/Footer__inst'

export default class CheckoutPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1500);
  }
  render() {
    return (
      <div>
        <Header history={this.props.history} />
        {this.state.loading ? (
          <Loader />
        ) : (
            <div>
              <Checkout history={this.props.history} />
            </div>
          )}
        <Footer__inst />
        <Footer />

      </div>
    );
  }
}
