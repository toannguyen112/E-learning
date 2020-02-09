import React, { Component } from "react";

export default class HeaderItemNotify extends Component {
  render() {
    let { course } = this.props;
    return (
      <div className="row header-item">
        <div className="col-2 p-0 header-img">
          <img
            className="img-fluid"
            style={{ width: "100%", height: "85%" }}
            src="https://dvch1hlupt.cdn.hostvn.net/notification/image/khuy_n_m_i_2.png"
            alt=""
          />
        </div>
        <div className="col-10 header-content ">
          <p style={{ fontWeight: "bolde" }}>Nhập Q50</p>
          <p style={{ fontSize: "11px" }}>
            Nhập Q50 giảm ngày 50k cho Top20 khóa học chất lượng caoF
          </p>
        </div>
      </div>
    );
  }
}
