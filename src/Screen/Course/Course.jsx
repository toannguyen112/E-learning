import React, { Component } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

export default class Course extends Component {
  render() {
    return (

      <div>
        <Header />
        <div className="Course">
          <div className="search__box ">
            <div className="container">
              <div className="row  ">
                <div className="col-md-12 col-sm-12 px-0">
                  <form className="search-form">
                    <ul className="search__menu">
                      <li>
                        <select class="course__category">
                          <option>Category</option>
                          <option class="level-0" value="21">
                            Business&nbsp;&nbsp;(2)
                          </option>
                          <option class="level-1" value="29">
                            &nbsp;&nbsp;&nbsp;Finance&nbsp;&nbsp;(2)
                          </option>
                          <option class="level-1" value="38">
                            &nbsp;&nbsp;&nbsp;Management&nbsp;&nbsp;(1)
                          </option>
                          <option class="level-1" value="55">
                            &nbsp;&nbsp;&nbsp;Strategy&nbsp;&nbsp;(1)
                          </option>
                          <option class="level-0" value="25">
                            Creative&nbsp;&nbsp;(4)
                          </option>
                          <option class="level-1" value="33">
                            &nbsp;&nbsp;&nbsp;GraphicDesign&nbsp;&nbsp;(3)
                          </option>
                          <option class="level-1" value="34">
                            &nbsp;&nbsp;&nbsp;Guitar&nbsp;&nbsp;(1)
                          </option>{" "}
                          <option class="level-1" value="42">
                            &nbsp;&nbsp;&nbsp;Music&nbsp;&nbsp;(2)
                          </option>
                          <option class="level-0" value="31">
                            General&nbsp;&nbsp;(2)
                          </option>
                          <option class="level-1" value="36">
                            &nbsp;&nbsp;&nbsp;Health&nbsp;&nbsp;(1)
                          </option>
                          <option class="level-1" value="58">
                            &nbsp;&nbsp;&nbsp;Travel&nbsp;&nbsp;(1)
                          </option>
                          <option class="level-1" value="60">
                            &nbsp;&nbsp;&nbsp;Gaming&nbsp;&nbsp;(1)
                          </option>
                          <option class="level-0" value="56">
                            Technology&nbsp;&nbsp;(3)
                          </option>
                          <option class="level-1" value="59">
                            &nbsp;&nbsp;&nbsp;WebDevelopment&nbsp;&nbsp;(1)
                          </option>
                          <option class="level-1" value="61">
                            &nbsp;&nbsp;&nbsp;Hardware&nbsp;&nbsp;(1)
                          </option>
                          <option class="level-1" value="62">
                            &nbsp;&nbsp;&nbsp;OperatingSystems&nbsp;&nbsp;(3)
                          </option>
                        </select>
                      </li>
                      <li>
                        <select class="status">
                          <option value="true">Course Status</option>
                          <option value="free">Free</option>
                          <option value="paid">Paid</option>
                        </select>
                      </li>
                      <li>
                        <input
                          className="search__input"
                          type="text"
                          placeholder="Type Keyword"
                        />
                      </li>
                      <li>
                        <button className="search__button" type="submit">
                          Search
                        </button>
                      </li>
                    </ul>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="courses">
            <div className="container">
              <div className="row sort__filter align-items-center">
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 pl-0">
                  <div className="sort">
                    <span>
                      <i className="fa fa-th-list" aria-hidden="true" />
                    </span>
                    <span>
                      <i className="fa fa-th-list" aria-hidden="true" />
                    </span>
                    <select class="sort__select" disabled="">
                      <option value="newness">Sort by name high to low</option>
                      <option value="popularity">Sort by name low to high</option>
                      <option value="low">Sort by price low to high</option>
                      <option value="high">Sort by price high to low</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 pl-0">
                  <div className="filter text-right">
                    <span>Showing 1–16 of 16 results</span>
                    <span>
                      <a href="">
                        Filter <i className="fa fa-filter" aria-hidden="true" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="row sort__items">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex px-0">
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

        </div>
        <Footer />

      </div>
    );
  }
}
