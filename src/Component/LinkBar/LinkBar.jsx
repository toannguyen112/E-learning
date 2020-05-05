import React, { Component } from "react";
import LinkbarListItem from "./LinkbarListItem";

export default class LinkBar extends Component {
    showListCatefory = () => {
        let imgCataloge = [
            {
                icon: "./img/interface.png",
            },

            {
                icon: "./img/web.png",
            },

            {
                icon: "./img/touch-screen.png",
            },

            {
                icon: "./img/pencil.png",
            },

            {
                icon: "./img/computer.png",
            },

            {
                icon: "./img/thinking.png",
            },
        ];
        return this.props.courseCatalog.map((courseCatalog, index) => {
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
        let { courseCatalog } = this.props;

        return (
            <div className="WrapperLinkBar">
                <div className="container">
                    <ul className="linkBarList  row">
                        {this.showListCatefory()}
                        {/* <LinkbarListItem courseCatalog={courseCatalog} /> */}
                    </ul>
                </div>

            </div>
        );
    }
}
