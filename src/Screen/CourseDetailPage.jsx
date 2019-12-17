import React, { Component } from "react";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Viewing from "../Component/Viewing/Viewing";

export default class CourseDetailPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="courseDetail-content">
          <div className="container">
            <div class="row">
              <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8 pl-0 content">
                <div className="content__title">
                  <h1>Graphic Design Masterclass - Learn GREAT Design</h1>
                </div>
                <div className="intro-title">
                  <div className="teacher">
                    <img src="./img/teacher3.jpg" alt="" />
                    <div className="teacher-name">
                      <div>Teacher</div>
                      <div>Robert Richards</div>
                    </div>
                  </div>

                  <div className="category">
                    <span class="lnr lnr-layers"></span>
                    <div className="category__name">
                      <div>Category</div>
                      <div>Apache, Computer Science, PHP, CSS, JS</div>
                    </div>
                  </div>
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <span>3.5</span>
                    <p>500 reviews</p>
                  </div>
                </div>
                <div className="description">
                  <p>
                    It’s easy to go down the rabbit hole of libraries and tools
                    only to come out of it not knowing how to build and launch a
                    real-world React application. You get things configured, but
                    you’re not sure how the libraries fit together (or if you’re
                    even using the right one).
                  </p>
                </div>
                <div className="knowledge">
                  <h5>What you'll learn</h5>
                  <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                      <ul>
                        <li>
                          <i className="fa fa-check"></i>
                          Learn to use Python professionally, learning both
                          Python 2 and Python 3!
                        </li>
                        <li>
                          <i className="fa fa-check"></i>
                          Learn advanced Python features, like the collections
                          module and how to work with timestamps!
                        </li>
                        <li>
                          <i className="fa fa-check"></i>
                          Understand complex topics, like decorators.
                        </li>
                        <li>
                          <i className="fa fa-check"></i>
                          Get an understanding of how to create GUIs in the
                          Jupyter Notebook system!
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                      <ul>
                        <li>
                          <i className="fa fa-check"></i>
                          Create games with Python, like Tic Tac Toe and
                          Blackjack!
                        </li>
                        <li>
                          <i className="fa fa-check"></i>
                          Learn to use Object Oriented Programming with classes!
                        </li>
                        <li>
                          <i className="fa fa-check"></i>
                          Understand how to use both the Jupyter Notebook and
                          create .py files
                        </li>
                        <li>
                          <i className="fa fa-check"></i>
                          Build a complete understanding of Python! from the
                          ground up!
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="course__section">
                  <h5>Course content</h5>
                  <div className="section">
                    <div className="section__item">
                      <div className="section__header">
                        <span>SECTION 1: INTRODUCTION</span>
                        <span className="Preview">Preview</span>
                      </div>
                      <div className="section__entry">
                        <div className="gap"></div>
                        <div className="lesson">
                          <div className="lesson_content">
                            <div>Lessons</div>
                            <ul>
                              <li>
                                <i
                                  className="fa fa-play-circle"
                                  aria-hidden="true"
                                />
                                How to obtain your Certificate of Completion for
                                this course{" "}
                                <span>
                                  {" "}
                                  <i
                                    class="fa fa-clock-o"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  15:32{" "}
                                </span>{" "}
                              </li>
                              <li>
                                <i
                                  className="fa fa-play-circle"
                                  aria-hidden="true"
                                />
                                Working Files – Download These First{" "}
                                <span>
                                  {" "}
                                  <i
                                    class="fa fa-clock-o"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  15:32{" "}
                                </span>{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="section__item">
                      <div className="section__header">
                        <span>SECTION 2: WORKSPACE AND PREFERENCES</span>
                        <span className="Preview">Preview</span>
                      </div>
                      <div className="section__entry">
                        <div className="gap"></div>
                        <div className="lesson">
                          <div className="lesson_content">
                            <div>Lessons</div>
                            <ul>
                              <li>
                                <i
                                  className="fa fa-play-circle"
                                  aria-hidden="true"
                                />
                                Get In Total Control Of The Control Panel{" "}
                                <span>
                                  {" "}
                                  <i
                                    class="fa fa-clock-o"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  15:32{" "}
                                </span>{" "}
                              </li>
                              <li>
                                <i
                                  className="fa fa-play-circle"
                                  aria-hidden="true"
                                />
                                The Magic Of Auto Recovery{" "}
                                <span>
                                  {" "}
                                  <i
                                    class="fa fa-clock-o"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  15:32{" "}
                                </span>{" "}
                              </li>
                              <li>
                                <i
                                  className="fa fa-play-circle"
                                  aria-hidden="true"
                                />
                                Customize The Workspace{" "}
                                <span>
                                  {" "}
                                  <i
                                    class="fa fa-clock-o"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  15:32{" "}
                                </span>{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="section__item">
                      <div className="section__header">
                        <span>SECTION 3 : LAYOUT</span>
                        <span className="Preview">Preview</span>
                      </div>
                      <div className="section__entry">
                        <div className="gap"></div>
                        <div className="lesson">
                          <div className="lesson_content">
                            <div>Lessons</div>
                            <ul>
                              <li>
                                <i
                                  className="fa fa-play-circle"
                                  aria-hidden="true"
                                />
                                Outside-The-Box Thinking With Grids{" "}
                                <span>
                                  {" "}
                                  <i
                                    class="fa fa-clock-o"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  15:32{" "}
                                </span>{" "}
                              </li>
                              <li>
                                <i
                                  className="fa fa-play-circle"
                                  aria-hidden="true"
                                />
                                Creating Saving And Opening Documents{" "}
                                <span>
                                  {" "}
                                  <i
                                    class="fa fa-clock-o"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  15:32{" "}
                                </span>{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 pl-0 sidebar">
                <div className="sidebar__info">
                  <div className="info__img">
                    <img src="./img/item1.jpg" className="img-fluid" />
                  </div>
                  <div className="info__inner">
                    <div className="wishlist">
                      <div className="add__list">
                        <div className="heart">
                          <i className="fa fa-heart" aria-hidden="true" />
                        </div>
                        <span>Add to Wishlist</span>
                      </div>
                      <span className="price">$19.99</span>
                    </div>
                    <button className="add">Thêm vào giỏ hàng</button>
                    <button className="buy">Mua ngay</button>
                    <ul className="meta">
                      <li>
                        <div>
                          Enrolled: <span> 3 students</span>
                        </div>
                        <i className="fa fa-users" aria-hidden="true" />
                      </li>
                      <li>
                        <div>
                          Duration: <span> 6 hours</span>
                        </div>
                        <i className="fa fa-clock-o" aria-hidden="true" />
                      </li>
                      <li>
                        <div>
                          Lectures: <span> 6</span>
                        </div>
                        <i className="fa fa-film" aria-hidden="true" />
                      </li>
                      <li>
                        <div>
                          Video: <span> 3 hours</span>
                        </div>
                        <i className="fa fa-bullhorn" aria-hidden="true" />
                      </li>
                      <li>
                        <div>
                          Level: <span> 3 Beginner</span>
                        </div>
                        <i className="fa fa-sort" aria-hidden="true" />
                      </li>
                    </ul>
                    <div className="coupon">
                      <input type="text" placeholder="Enter coupon" />
                    </div>
                  </div>
                </div>
                <div className="sidebar__try">
                  <h5>Training 5 or more people?</h5>
                  <p>
                    Get your team access to 3,500+ top Skilled courses anytime,
                    anywhere.
                  </p>
                  <a href="">Try Skilled for Business</a>
                </div>
              </div>
            </div>


          </div>
          <Viewing />
        </div>

        <Footer />
      </div>
    );
  }
}
