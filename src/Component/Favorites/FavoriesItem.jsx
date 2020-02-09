import React, { Component } from "react";

export default class FavoriesItem extends Component {
  addCourse = course => {
    this.props.addToCart(course);
    setTimeout(() => {
      this.props.history.push("/cart");
    }, 1000);
  };
  render() {
    let { course, deleteCoureseFavorites } = this.props;
    return (
      <div className="favories-card">
        <div className="favories-card-img">
          <img src={course.hinhAnh} alt="" />
        </div>
        <div className="favories-card-info">
          <span>new</span>
          <p>{course.tenKhoaHoc}</p>
          <div className="favories-author">
            <div className="favories-author-img">
              <img
                src="https://d1nzpkv5wwh1xf.cloudfront.net/320/k-5768aeb1047c995f75fdbf6b/20190621-buoint01_0621/53010740_344510122832768_8248.jpg"
                alt=""
              />
            </div>
            <div className="favories-author-text">toan nguyen</div>
          </div>
          <div className="favories-price">$19.99</div>
        </div>

        <div className="favories-delete">
          <i
            className="fa fa-cart-plus"
            aria-hidden="true"
            onClick={() => this.addCourse(course)}
          ></i>
          <i
            className="fa fa-heart-o"
            aria-hidden="true"
            onClick={() => deleteCoureseFavorites(course)}
          />
        </div>
      </div>
    );
  }
}
