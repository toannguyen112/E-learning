import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class LinkbarListItem extends Component {
  render() {
    let { courseCatalog, imgCataloge } = this.props;
    console.log(courseCatalog);

    return (
      <div className="col-md-2 p-0">
        <Link
          style={{ textDecoration: "none" }}
          to={`/category/${courseCatalog.maDanhMuc}`}
        >
          <li className="linkBarList__item">
            <img
              className="linkBarList__item__img"
              src={imgCataloge}
              alt=""
            />
              <img
              className="linkBarList__item__img"
              src={courseCatalog.icon}
              alt=""
            />
            {courseCatalog.tenDanhMuc}
            
          </li>
        </Link>
      </div>
    );
  }
}
