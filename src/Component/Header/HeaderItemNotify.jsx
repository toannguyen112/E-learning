import React, { Component } from "react";

export default class HeaderItemNotify extends Component {
  render() {
    let { item } = this.props;
    return (
      <div className="row header-item">
        <div className="col-2 p-0 header-img">
          <img
            className="img-fluid"
            style={{ width: "36px", height: "36px" }}
            src={item.hinhAnh}
            alt=""
          />
        </div>
        <div className="col-10 header-content p-0 ">
          <p style={{ fontWeight: "bold", fontSize: "14px" }}>{item.title}</p>
          <p style={{ fontSize: "11px" }}>{item.moTa}</p>
          <p style={{ color: "red", fontSize: "9px" }}>{item.time}</p>
        </div>
      </div>
    );
  }
}
