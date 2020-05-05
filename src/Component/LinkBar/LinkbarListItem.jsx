import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class LinkbarListItem extends Component {
  render() {
    let { courseCatalog, imgCataloge } = this.props;

    return (
      <div className="col-md-2 p-0">
        <Link
          style={{ textDecoration: "none" }}
          to={`/category/${courseCatalog.maDanhMuc}`}
        >
          <li className="linkBarList__item">
            <img
              className="linkBarList__item__img"
              src={imgCataloge.icon}
              alt=""
            />
            {courseCatalog.tenDanhMuc}
            <div className="wrapper__linkBarList__item__showContent">
              <ul className="showContent__list container ">
                <div className="row showContent__list__row ">
                  <div className="col-md-2">
                    <li className="showContent__list__item">
                      <div className="caterogy">
                        <i className="fa fa-apple" aria-hidden="true" />
                        <span>Web Development</span>
                      </div>
                    </li>
                  </div>
                  <div className="col-md-2">
                    <li className="showContent__list__item">
                      <div className="caterogy">
                        <i className="fa fa-apple" aria-hidden="true" />
                        <span>Web Development</span>
                      </div>
                    </li>
                  </div>
                  <div className="col-md-2">
                    <li className="showContent__list__item">
                      <div className="caterogy">
                        <i className="fa fa-apple" aria-hidden="true" />
                        <span>Web Development</span>
                      </div>
                    </li>
                  </div>
                  <div className="col-md-2">
                    <li className="showContent__list__item">
                      <div className="caterogy">
                        <i className="fa fa-apple" aria-hidden="true" />
                        <span>Web Development</span>
                      </div>
                    </li>
                  </div>
                  <div className="col-md-2">
                    <li className="showContent__list__item">
                      <div className="caterogy">
                        <i className="fa fa-apple" aria-hidden="true" />
                        <span>Web Development</span>
                      </div>
                    </li>
                  </div>
                  <div className="col-md-2">
                    <li className="showContent__list__item">
                      <div className="caterogy">
                        <i className="fa fa-apple" aria-hidden="true" />
                        <span>Web Development</span>
                      </div>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
          </li>
        </Link>
      </div>
    );
  }
}
