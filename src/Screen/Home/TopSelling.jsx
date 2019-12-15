import React, { Component } from "react";
import Slider from "react-slick";

import OwlCarousel from "react-owl-carousel";
export default class TopSelling extends Component {
  render() {
    return (
      <section className="TopSelling">
        <div className="TopSelling__content container-fluid ">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <h3 className="title">Top Selling</h3>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 viewing__content">
              <div className="product__items">
                <div className="product__item">
                  <a href="">
                    <div className="item__img">
                      <img src="./img/item1.jpg" alt="" className="img-fluid" />
                      <div className="img__overplay"></div>
                    </div>
                    <div className="item__info">
                      <h5>Node.js, Express & MongoDB Dev to Deployment</h5>
                      <h6>Jose Portilla</h6>
                      <div className="raiting">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="price">
                        <span className="old__price">$199.99</span>
                        <span className="new__price">
                          $19.99 <i class="fa fa-tag" aria-hidden="true"></i>
                        </span>
                      </div>
                    </div>
                  </a>

                  <div className="sub__info">
                    <div className="info__content">
                      <div className="teacher">
                        <img
                          src="/img/teacher.jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <h6>George Richards</h6>
                      </div>
                      <h5>Node.js, Express & MongoDB Dev to Deployment</h5>
                      <p>
                        In this 8.5 hour course you will learn by example
                        building 2 real world server-side applications from
                        scratch all the way up to deployment with a real domain.
                        No more confusion about how to build a No...
                      </p>
                      <div className="meta">
                        <div>
                          <i className="fa fa-signal" aria-hidden="true" />{" "}
                          Advanced
                        </div>
                        <div>
                          <i className="fa fa-signal" aria-hidden="true" />{" "}
                          Advanced
                        </div>
                        <div>
                          {" "}
                          <i className="fa fa-signal" aria-hidden="true" />{" "}
                          Advanced
                        </div>
                      </div>
                      <button className="add__cart">ADD TO CART</button>
                      <div className="wishlist">
                        <div className="add__list">
                          <div className="heart">
                            <i className="fa fa-heart"></i>
                          </div>
                          <span>Add to Wishlist</span>
                        </div>
                        <span className="price">$19.99</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="product__item">
                  <a href="">
                    <div className="item__img">
                      <img src="./img/item1.jpg" alt="" className="img-fluid" />
                      <div className="img__overplay"></div>
                    </div>
                    <div className="item__info">
                      <h5>Node.js, Express & MongoDB Dev to Deployment</h5>
                      <h6>Jose Portilla</h6>
                      <div className="raiting">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="price">
                        <span className="old__price">$199.99</span>
                        <span className="new__price">
                          $19.99 <i class="fa fa-tag" aria-hidden="true"></i>
                        </span>
                      </div>
                    </div>
                  </a>

                  <div className="sub__info">
                    <div className="info__content">
                      <div className="teacher">
                        <img
                          src="/img/teacher.jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <h6>George Richards</h6>
                      </div>
                      <h5>Node.js, Express & MongoDB Dev to Deployment</h5>
                      <p>
                        In this 8.5 hour course you will learn by example
                        building 2 real world server-side applications from
                        scratch all the way up to deployment with a real domain.
                        No more confusion about how to build a No...
                      </p>
                      <div className="meta">
                        <div>
                          <i className="fa fa-signal" aria-hidden="true" />{" "}
                          Advanced
                        </div>
                        <div>
                          <i className="fa fa-signal" aria-hidden="true" />{" "}
                          Advanced
                        </div>
                        <div>
                          {" "}
                          <i className="fa fa-signal" aria-hidden="true" />{" "}
                          Advanced
                        </div>
                      </div>
                      <button className="add__cart">ADD TO CART</button>
                      <div className="wishlist">
                        <div className="add__list">
                          <div className="heart">
                            <i className="fa fa-heart"></i>
                          </div>
                          <span>Add to Wishlist</span>
                        </div>
                        <span className="price">$19.99</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product__item">
                  <a href="">
                    <div className="item__img">
                      <img src="./img/item1.jpg" alt="" className="img-fluid" />
                      <div className="img__overplay"></div>
                    </div>
                    <div className="item__info">
                      <h5>Node.js, Express & MongoDB Dev to Deployment</h5>
                      <h6>Jose Portilla</h6>
                      <div className="raiting">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="price">
                        <span className="old__price">$199.99</span>
                        <span className="new__price">
                          $19.99 <i class="fa fa-tag" aria-hidden="true"></i>
                        </span>
                      </div>
                    </div>
                  </a>

                  <div className="sub__info">
                    <div className="info__content">
                      <div className="teacher">
                        <img
                          src="/img/teacher.jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <h6>George Richards</h6>
                      </div>
                      <h5>Node.js, Express & MongoDB Dev to Deployment</h5>
                      <p>
                        In this 8.5 hour course you will learn by example
                        building 2 real world server-side applications from
                        scratch all the way up to deployment with a real domain.
                        No more confusion about how to build a No...
                      </p>
                      <div className="meta">
                        <div>
                          <i className="fa fa-signal" aria-hidden="true" />{" "}
                          Advanced
                        </div>
                        <div>
                          <i className="fa fa-signal" aria-hidden="true" />{" "}
                          Advanced
                        </div>
                        <div>
                          {" "}
                          <i className="fa fa-signal" aria-hidden="true" />{" "}
                          Advanced
                        </div>
                      </div>
                      <button className="add__cart">ADD TO CART</button>
                      <div className="wishlist">
                        <div className="add__list">
                          <div className="heart">
                            <i className="fa fa-heart"></i>
                          </div>
                          <span>Add to Wishlist</span>
                        </div>
                        <span className="price">$19.99</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product__item">
                  <a href="">
                    <div className="item__img">
                      <img src="./img/item1.jpg" alt="" className="img-fluid" />
                      <div className="img__overplay"></div>
                    </div>
                    <div className="item__info">
                      <h5>Node.js, Express & MongoDB Dev to Deployment</h5>
                      <h6>Jose Portilla</h6>
                      <div className="raiting">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="price">
                        <span className="old__price">$199.99</span>
                        <span className="new__price">
                          $19.99 <i class="fa fa-tag" aria-hidden="true"></i>
                        </span>
                      </div>
                    </div>
                  </a>

                  <div className="sub__info">
                    <div className="info__content">
                      <div className="teacher">
                        <img
                          src="/img/teacher.jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <h6>George Richards</h6>
                      </div>
                      <h5>Node.js, Express & MongoDB Dev to Deployment</h5>
                      <p>
                        In this 8.5 hour course you will learn by example
                        building 2 real world server-side applications from
                        scratch all the way up to deployment with a real domain.
                        No more confusion about how to build a No...
                      </p>
                      <div className="meta">
                        <div>
                          <i className="fa fa-signal" aria-hidden="true" />{" "}
                          Advanced
                        </div>
                        <div>
                          <i className="fa fa-signal" aria-hidden="true" />{" "}
                          Advanced
                        </div>
                        <div>
                          {" "}
                          <i className="fa fa-signal" aria-hidden="true" />{" "}
                          Advanced
                        </div>
                      </div>
                      <button className="add__cart">ADD TO CART</button>
                      <div className="wishlist">
                        <div className="add__list">
                          <div className="heart">
                            <i className="fa fa-heart"></i>
                          </div>
                          <span>Add to Wishlist</span>
                        </div>
                        <span className="price">$19.99</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product__item">
                  <a href="">
                    <div className="item__img">
                      <img src="./img/item1.jpg" alt="" className="img-fluid" />
                      <div className="img__overplay"></div>
                    </div>
                    <div className="item__info">
                      <h5>Node.js, Express & MongoDB Dev to Deployment</h5>
                      <h6>Jose Portilla</h6>
                      <div className="raiting">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="price">
                        <span className="old__price">$199.99</span>
                        <span className="new__price">
                          $19.99 <i class="fa fa-tag" aria-hidden="true"></i>
                        </span>
                      </div>
                    </div>
                  </a>

                  <div className="sub__info">
                    <div className="info__content">
                      <div className="teacher">
                        <img
                          src="/img/teacher.jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <h6>George Richards</h6>
                      </div>
                      <h5>Node.js, Express & MongoDB Dev to Deployment</h5>
                      <p>
                        In this 8.5 hour course you will learn by example
                        building 2 real world server-side applications from
                        scratch all the way up to deployment with a real domain.
                        No more confusion about how to build a No...
                      </p>
                      <div className="meta">
                        <div>
                          <i className="fa fa-signal" aria-hidden="true" />{" "}
                          Advanced
                        </div>
                        <div>
                          <i className="fa fa-signal" aria-hidden="true" />{" "}
                          Advanced
                        </div>
                        <div>
                          {" "}
                          <i className="fa fa-signal" aria-hidden="true" />{" "}
                          Advanced
                        </div>
                      </div>
                      <button className="add__cart">ADD TO CART</button>
                      <div className="wishlist">
                        <div className="add__list">
                          <div className="heart">
                            <i className="fa fa-heart"></i>
                          </div>
                          <span>Add to Wishlist</span>
                        </div>
                        <span className="price">$19.99</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    );
  }
}
