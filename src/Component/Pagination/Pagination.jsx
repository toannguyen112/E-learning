import React, { Component } from "react";

export default class Pagination extends Component {
  render() {
    return (
      <div class="pagi">
        <ul class="pagi__wrapper">
          <li class="pagi__item disabled">
            <i className="fa fa-chevron-left" aria-hidden="true" />
          </li>
          <li class="pagi__item active" id="1">
            1
          </li>
          <li class="pagi__item " id="2">
            2
          </li>
          <li class="pagi__item " id="3">
            3
          </li>
          <li class="pagi__item disabled">...</li>
          <li class="pagi__item ">5</li>
          <li class="pagi__item ">
            <i className="fa fa-chevron-right" aria-hidden="true" />
          </li>
        </ul>
      </div>
    );
  }
}
