import React, { Component } from "react";
import Viewing from "../Viewing/Viewing";


export default class Profile extends Component {
  render() {
    return (
      <div className="my__profile">
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
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
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
                <Viewing />
                </div>
                <button className="showmore">SHOW MORE</button>
              </div>

              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="product__items">
                  <Viewing />
                </div>

                <button className="showmore">SHOW MORE</button>
              </div>
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <table className="table table-striped table__quiz">
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
                        <span className="lnr lnr-checkmark-circle"></span> Passed
                      </td>
                    </tr>
                    <tr>
                      <td>How to be a DJ? Make Electronic Music</td>
                      <td>Final Middle Quiz</td>
                      <td>67%</td>
                      <td>
                        <span className="lnr lnr-cross"></span> Failed
                      </td>
                    </tr>
                    <tr>
                      <td>How to be a DJ? Make Electronic Music</td>
                      <td>Final Middle Quiz</td>
                      <td>75%</td>
                      <td>
                        <span className="lnr lnr-cross"></span> Failed
                      </td>
                    </tr>
                    <tr>
                      <td>How to be a DJ? Make Electronic Music</td>
                      <td>Final Middle Quiz</td>
                      <td>75%</td>
                      <td>
                        <span className="lnr lnr-checkmark-circle"></span> Passed
                      </td>
                    </tr>
                    <tr>
                      <td>How to be a DJ? Make Electronic Music</td>
                      <td>Final Middle Quiz</td>
                      <td>33%</td>
                      <td>
                        <span className="lnr lnr-cross"></span> Failed
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
                  <div className="order__id">313915636810515d33e11bbbbf6</div>
                  <div className="order__time">July 21, 2019 3:50 am</div>
                  <div className="order__success">Success</div>
                </div>
                <div className="order">
                  <div className="order__id">313915636810515d33e11bbbbf6</div>
                  <div className="order__time">July 21, 2019 3:50 am</div>
                  <div className="order__Pending">Pending</div>
                </div>
                <div className="order">
                  <div className="order__id">313915636810515d33e11asbbb</div>
                  <div className="order__time">July 21, 2019 3:50 am</div>
                  <div className="order__success">Success</div>
                </div>
                <div className="order">
                  <div className="order__id">313915636810515d33vsagbbb</div>
                  <div className="order__time">July 21, 2019 3:50 am</div>
                  <div className="order__Pending">Pending</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
