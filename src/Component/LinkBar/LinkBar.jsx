import React, { Component } from "react";
import LinkbarListItem from "./LinkbarListItem";

export default class LinkBar extends Component {
  showListCatefory = () => {
    let { courseCatalog } = this.props;

    let imgCataloge = [
      "./img/interface.png",
      "./img/web.png",
      "./img/touch-screen.png",
      "./img/pencil.png",
      "./img/computer.png",
      "./img/thinking.png",
    ];
    return courseCatalog.map((courseCatalog, index) => {
      return (
        <LinkbarListItem
          courseCatalog={courseCatalog}
          key={index}
          imgCataloge={imgCataloge[index]}
        />
      );
    });
  };
  render() {
    return (
      <div className="WrapperLinkBar">
        <div className="container">
          <ul className="linkBarList  row">{this.showListCatefory()}</ul>
        </div>
      </div>
    );
  }
}
