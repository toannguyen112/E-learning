import React, { Component } from "react";

export default class LoaderButton extends Component {
  render() {
    return (
      <button  >
        <div className="spinner-border loader_button" role="status"></div>
      </button>
    );
  }
}
