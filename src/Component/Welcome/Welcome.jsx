import React, { Component } from "react";
let user = JSON.parse(localStorage.getItem("userLogin"))
export default class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      play: false,
    };
  }

  showTrailer = () => {
    this.setState({
      play: !this.state.play,
    });
  };

  render() {
    return (
      <div className="warpper__welcome">
        <div className="warpper__welcome__content container">
          <div className="welcomeBanner  row">
            <div className="col-sm-12">
              <div className="welcomeBanner_content">
                <img
                  src="./img/Welcomebanner.jpg"
                  alt=""
                  className="welcomeBanner__img img-fluid"
                />

                <div className="welcomeBanner__text">
                  <div className="banner-title">Aspire. Accomplish.</div>
                  <div className="banner-sub">
                    Upgrade your skills, level up in life. Courses from $9.99
                    ends May 14.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h4 className="headerTitle">Welcome back, {user.hoTen} </h4>
          <div className="welcome__ready">
            <h4 className="ready">Ready to jump back in?</h4>
            <h4 className="myCourses">My courses</h4>
          </div>

          <div className="row wrapper__welcome__body ">
            <div className="col-md-6 ">
              <div className="welcome__body__item">
                  <div className="welcome__body__item__content">
                  <div className="welcome__img__course">
                  <img
                    className="courseImg"
                    src="https://img-a.udemycdn.com/course/240x135/1514256_27f7_2.jpg"
                    alt=""
                  />
                  <div
                    className="play"
                    onClick={() => this.showTrailer()}
                  ></div>
                  {this.state.play ? (
                    <div className="trailer">
                      <div className="trailer__content">
                        <iframe
                          width="560"
                          height="315"
                          src="https://www.youtube.com/embed/ZLK5wT3BY8M"
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                        <div
                          className="close"
                          onClick={() => this.showTrailer()}
                        >
                          <i class="fa fa-times-circle" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="welcome__right__content">
                  <h4 className="des">
                    Complete Whiteboard Animation in VideoScribe - 5 Animations
                  </h4>
                  <p className="courseTime">5h 36m</p>
                </div>

                  </div>
                <div className="progress">
                    <div className="progressbar"></div>
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="welcome__body__item">
                  <div className="welcome__body__item__content">
                  <div className="welcome__img__course">
                  <img
                    className="courseImg img-fluid "
                    src="https://img-a.udemycdn.com/course/240x135/1378990_b5fe_3.jpg"
                    alt=""
                  />
                  <div
                    className="play"
                    onClick={() => this.showTrailer()}
                  ></div>
                  {this.state.play ? (
                    <div className="trailer">
                      <div className="trailer__content">
                        <iframe
                          width="560"
                          height="315"
                          src="https://www.youtube.com/embed/ZLK5wT3BY8M"
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                        <div
                          className="close"
                          onClick={() => this.showTrailer()}
                        >
                          <i class="fa fa-times-circle" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="welcome__right__content">
                  <h4 className="des">Mastering HTML and Css (Tiếng Việt)</h4>
                  <p className="courseTime">5h 36m</p>
                </div>

                  </div>
                <div className="progress">
                    <div className="progressbar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
