import React, { Component } from "react";

export default class SmartBar extends Component {
  render() {
    return (
      <div className="wrapper__SmartBar">
        <div className="wrapper__SmartBar__content">
          <div className="SmartBar__text">
            <div className="SmartBar__text--top">
              <span className="text-bold">
                You know that thing you always wanted to do?
              </span>
              <span className="text-normal">
                | Skill up and make it happen. From $9.99 through May 14.
              </span>
            </div>
            <div className="SmartBar__text--bot">6 days left!</div>
          </div>
          <div className="close">
            <img src="../img/close.png" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
