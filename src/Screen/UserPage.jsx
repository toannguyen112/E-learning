import React, { Component } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
export default class UserPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="user">
          <div className="container">
            <div className="row">
              <div class="col-md-3 user__category">
                <div className="user__avatar">
                  <img className="img-fluid" src="/img/avatar.png" alt="" />
                </div>
                <div className="user__info">
                  <h5>toannguyen</h5>
                  <p>Front-end Developer</p>
                </div>
                <div className="user__edit">
                  <button className="btn-profile">My profile</button>
                  <div className="edit__profile">
                    <i className="fa fa-certificate" aria-hidden="true" />
                    Certificates

                  </div>
                  <div className="edit__profile">
                    <i className="fa fa-user" aria-hidden="true" />
                    Account
                  </div>
                  <div className="edit__profile">
                    <i className="fa fa-cogs" aria-hidden="true" />

                    Edit Profile
                  </div>
                </div>
              </div>
              <div className="col-md-9 user__course">
                {/* my profile  */}

                {/* <div className="my__profile">
                  <div className="user__title">
                    <h1>My Profile</h1>
                    <div className="social">
                      <i className="fa fa-facebook" aria-hidden="true" />
                      <i className="fa fa-twitter" aria-hidden="true" />
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="user__bio">
                    <h3>Biography</h3>
                    <h6>Front-end Developer</h6>
                  </div>
                  <div className="user__course">
                    <h3>Courses</h3>
                    <div>
                      <ul
                        className="nav nav-pills mb-3"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="pills-home-tab"
                            data-toggle="pill"
                            href="#pills-home"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="true"
                          >
                            My Wishlist
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="pills-profile-tab"
                            data-toggle="pill"
                            href="#pills-profile"
                            role="tab"
                            aria-controls="pills-profile"
                            aria-selected="false"
                          >
                            My Courses
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="pills-contact-tab"
                            data-toggle="pill"
                            href="#pills-contact"
                            role="tab"
                            aria-controls="pills-contact"
                            aria-selected="false"
                          >
                            My Quizzes
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="pills-contact-tab"
                            data-toggle="pill"
                            href="#my-orders"
                            role="tab"
                            aria-controls="pills-contact"
                            aria-selected="false"
                          >
                            My order
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div
                          className="tab-pane fade show active"
                          id="pills-home"
                          role="tabpanel"
                          aria-labelledby="pills-home-tab"
                        >

                          <div className="product__items">
                            <div className="product__item">
                              <a href="">
                                <div className="item__img">
                                  <img
                                    src="./img/item1.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                  <div className="img__overplay"></div>
                                </div>
                                <div className="item__info">
                                  <h5>
                                    Node.js, Express & MongoDB Dev to Deployment
                                  </h5>
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
                                      $19.99{" "}
                                      <i
                                        class="fa fa-tag"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                              </a>

                             
                            </div>

                            <div className="product__item">
                              <a href="">
                                <div className="item__img">
                                  <img
                                    src="./img/item1.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                  <div className="img__overplay"></div>
                                </div>
                                <div className="item__info">
                                  <h5>
                                    Node.js, Express & MongoDB Dev to Deployment
                                  </h5>
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
                                      $19.99{" "}
                                      <i
                                        class="fa fa-tag"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                              </a>

                              
                            </div>
                            <div className="product__item">
                              <a href="">
                                <div className="item__img">
                                  <img
                                    src="./img/item1.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                  <div className="img__overplay"></div>
                                </div>
                                <div className="item__info">
                                  <h5>
                                    Node.js, Express & MongoDB Dev to Deployment
                                  </h5>
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
                                      $19.99{" "}
                                      <i
                                        class="fa fa-tag"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                              </a>

                              
                            </div>
                          </div>
                          <button class="showmore">SHOW MORE</button>
                        </div>

                        <div
                          className="tab-pane fade"
                          id="pills-profile"
                          role="tabpanel"
                          aria-labelledby="pills-profile-tab"
                        >
                                                    <div className="product__items">
                            <div className="product__item">
                              <a href="">
                                <div className="item__img">
                                  <img
                                    src="/img/item2.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                  <div className="img__overplay"></div>
                                </div>
                                <div className="item__info">
                                  <h5>
                                    Node.js, Express & MongoDB Dev to Deployment
                                  </h5>
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
                                      $19.99{" "}
                                      <i
                                        class="fa fa-tag"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                              </a>

                             
                            </div>

                            <div className="product__item">
                              <a href="">
                                <div className="item__img">
                                  <img
                                    src="/img/item2.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                  <div className="img__overplay"></div>
                                </div>
                                <div className="item__info">
                                  <h5>
                                    Node.js, Express & MongoDB Dev to Deployment
                                  </h5>
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
                                      $19.99{" "}
                                      <i
                                        class="fa fa-tag"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                              </a>

                              
                            </div>
                            <div className="product__item">
                              <a href="">
                                <div className="item__img">
                                  <img
                                    src="/img/item2.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                  <div className="img__overplay"></div>
                                </div>
                                <div className="item__info">
                                  <h5>
                                    Node.js, Express & MongoDB Dev to Deployment
                                  </h5>
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
                                      $19.99{" "}
                                      <i
                                        class="fa fa-tag"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                              </a>

                              
                            </div>
                          </div>

                          <button class="showmore">SHOW MORE</button>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-contact"
                          role="tabpanel"
                          aria-labelledby="pills-contact-tab"
                        >
                          <table class="table table-striped table__quiz">
                            <thead>
                              <tr>
                                <th>COURSE</th>
                                <th>QUIZ</th>
                                <th>STATUS</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>How to be a DJ? Make Electronic Music</td>
                                <td>Final Middle Quiz</td>
                                <td>83%</td>
                                <td>
                                  <span class="lnr lnr-checkmark-circle"></span>{" "}
                                  Passed
                                </td>
                              </tr>
                              <tr>
                                <td>How to be a DJ? Make Electronic Music</td>
                                <td>Final Middle Quiz</td>
                                <td>67%</td>
                                <td>
                                  <span class="lnr lnr-cross"></span> Failed
                                </td>
                              </tr>
                              <tr>
                                <td>How to be a DJ? Make Electronic Music</td>
                                <td>Final Middle Quiz</td>
                                <td>75%</td>
                                <td>
                                  <span class="lnr lnr-checkmark-circle"></span>{" "}
                                  Passed
                                </td>
                              </tr>
                              <tr>
                                <td>How to be a DJ? Make Electronic Music</td>
                                <td>Final Middle Quiz</td>
                                <td>33%</td>
                                <td>
                                  <span class="lnr lnr-cross"></span> Failed
                                </td>
                              </tr>
                              <tr>
                                <td>How to be a DJ? Make Electronic Music</td>
                                <td>Final Middle Quiz</td>
                                <td>75%</td>
                                <td>
                                  <span class="lnr lnr-checkmark-circle"></span>{" "}
                                  Passed
                                </td>
                              </tr>
                              <tr>
                                <td>How to be a DJ? Make Electronic Music</td>
                                <td>Final Middle Quiz</td>
                                <td>33%</td>
                                <td>
                                  <span class="lnr lnr-cross"></span> Failed
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>




                        <div
                          className="tab-pane fade"
                          id="my-orders"
                          role="tabpanel"
                          aria-labelledby="pills-contact-tab"
                        >
                        <h3>My orders</h3>
                        <div className="order">
                          <div className="order__id">
                            313915636810515d33e11bbbbf6
                          </div>
                          <div className="order__time">July 21, 2019 3:50 am</div>
                          <div className="order__success">Success</div>
                        </div>
                        <div className="order">
                          <div className="order__id">
                            313915636810515d33e11bbbbf6
                          </div>
                          <div className="order__time">July 21, 2019 3:50 am</div>
                          <div className="order__Pending">Pending</div>
                        </div>
                        <div className="order">
                          <div className="order__id">
                            313915636810515d33e11asbbb
                          </div>
                          <div className="order__time">July 21, 2019 3:50 am</div>
                          <div className="order__success">Success</div>
                        </div>
                        <div className="order">
                          <div className="order__id">
                            313915636810515d33vsagbbb
                          </div>
                          <div className="order__time">July 21, 2019 3:50 am</div>
                          <div className="order__Pending">Pending</div>
                        </div>
                        </div>



                      </div>
                    </div>
                  </div>
                </div> */}

                {/* certificates */}
                {/* <div className="certificates">
                  <h1>My Certificates</h1>
                  <div className="certificate " id="cer">
                    <div>COURSE</div>
                    <div>CERTIFICATE</div>
                  </div>
                  <div className="certificate">
                    <div>Design Instruments for Communication</div>
                    <div>Download</div>
                  </div>
                  <div className="certificate">
                    <div>How to Work with Legendary RED camera?</div>
                    <div>Download</div>
                  </div>
                  <div className="certificate">
                    <div>Engine Creating for Xbox One X</div>
                    <div>Download</div>
                  </div>
                  <div className="certificate">
                    <div>Let`s paint Van Gogh`s Starry Night</div>
                    <div>Download</div>
                  </div>
                  <div className="certificate">
                    <div>Real Things Art Painting by Jason Ni</div>
                    <div>Download</div>
                  </div>
                  <div className="certificate">
                    <div>Web Coding and Apache Basics</div>
                    <div>Download</div>
                  </div>
                  <div className="certificate">
                    <div>Concept Art Printing on 3d Printer</div>
                    <div>Download</div>
                  </div>
                  <div className="certificate">
                    <div>Nvidia and UE4 Technologies Practice</div>
                    <div>Download</div>
                  </div>
                  <div className="certificate">
                    <div>How to be a DJ? Make Electronic Music</div>
                    <div>Download</div>
                  </div>
                </div> */}


                {/* account  */}
                {/* <div className="acount">
                  <h1>My Account</h1>
                  <form action="">
                    <div className="email">
                      <h4>
                        Your email address is: <span>nguyentoan@gmail.com</span>
                      </h4>
                    </div>
                    <div className="password">
                      <label >password</label>
                      <input type="text" placeholder="Enter Current Password" />
                      <input type="text" placeholder="Enter New Password" />
                      <input type="text" placeholder="Re-type new Password" />
                    </div>
                    <button className="change__pass">Change Password</button>
                  </form>
                </div> */}

                {/* edit */}
                <div className="edit__profile">
                  <h1>Edit Profile</h1>
                  <form >
                    <div className="fullname">
                      <div className="row">
                        <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                          <label>
                            First Name  :
                            </label>
                          <input type="text" placeholder="Enter First Name" />


                        </div>

                        <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                          <label>
                            Last Name  :
                            </label>
                          <input type="text" placeholder="Enter Last Name" />
                        </div>
                      </div>
                    </div>
                    <div className="position">
                      <label>
                        Position:
                      </label>
                      <input type="text" placeholder="Enter Position" />
                    </div>
                    <div className="bio">
                      <label>
                        Bio:
                      </label>
                      <input type="text" placeholder="Demo Biography of Demo Instructor" />
                    </div>
                    <div className="social__html_form">
                      <h2>Socials</h2>
                      <p>Add your social profiles links, they will be shown on your public profile.</p>
                      <div className="social__wrapper">
                        <div className="row">
                          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">

                            <div className="socila-item">
                              <div>
                                FACEBOOK
                              </div>
                              <input type="text" placeholder="Enter Your FaceBook URl" />
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">

                            <div className="socila-item">
                              <div>
                                TWITTER
                              </div>
                              <input type="text" placeholder="Enter Your FaceBook URl" />
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">

                            <div className="socila-item">
                              <div>
                                INSTAGRAM
                              </div>
                              <input type="text" placeholder="Enter Your FaceBook URl" />
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">

                            <div className="socila-item">
                              <div>
                                LINKEDIN
                              </div>
                              <input type="text" placeholder="Enter Your FaceBook URl" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="change__profile">Change Profile</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
