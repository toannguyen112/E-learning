import React, { Component } from "react";

import User from "../Component/User/User";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Loader from "../Component/Loader/Loader";
export default class UserPage extends Component {


  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }
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
      <div>
        <Header history={this.props.history} />
       {this.state.loading ? <Loader/> :  <User history={this.props.history}/>}
        <Footer />
      </div>
    );
  }
}
