import React, { Component } from "react";

export default class HeaderItemNotify extends Component {
  render() {
    let { item } = this.props;
    return (
      <div className="notify">
        <div className="notify__header">
          <span className="text-notify">
            Notifications
          </span>
          <span className="icon__setting"></span>
        </div>
        <div className="notify__body"></div>
      </div>
    );
  }
}
