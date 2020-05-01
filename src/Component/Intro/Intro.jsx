import React, { Component } from "react";

export default class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <div className="intro__content container p-0">
          <div className="intro__title">
            <h2 style={{paddingLeft :"15px"}} >Professional luggage for you</h2>
          </div>
          <div className="intro__slider">
            <div className="row">
              <div className=" big__img col-md-6 col-sm-6 col-lg-6 col-xl-6">
                <div className="intro-banner">
                  <img
                    className="img-fluid"
                    src="https://dvch1hlupt.cdn.hostvn.net/button/image/roadmap_Edumallcombo_2_1.png"
                    alt=""
                  />

                </div>
              </div>
              <div className=" big__img col-md-6 col-sm-6 col-lg-6 col-xl-6">
                <div className="intro-banner">
                  <img
                    className="img-fluid"
                    src="https://dvch1hlupt.cdn.hostvn.net/button/image/roadmap_digital-min_1_1_1_1.png"
                    alt=""
                  />

                </div>
              </div>
              <div className=" small__img col-md-4 col-sm-4 col-lg-4 col-xl-4">
                <div className="intro-banner">
                  <img
                    className="img-fluid"
                    src="https://dvch1hlupt.cdn.hostvn.net/button/image/child-reading-facebook-ai-tes_1.jpg"
                    alt=""
                  />

                </div>
              </div>
              <div className=" small__img col-md-4 col-sm-4 col-lg-4 col-xl-4">
                <div className="intro-banner">
                  <img
                    className="img-fluid"
                    src="https://dvch1hlupt.cdn.hostvn.net/button/image/roadmap_ielts-min_2.png"
                    alt=""
                  />

                </div>
              </div>
              <div className=" small__img col-md-4 col-sm-4 col-lg-4 col-xl-4">
                <div className="intro-banner">
                  <img
                    className="img-fluid"
                    src="https://dvch1hlupt.cdn.hostvn.net/button/image/roadmap_design-min_1_1_1_1.png"
                    alt=""
                  />

                </div>
              </div>
              <div className=" small__img col-md-4 col-sm-4 col-lg-4 col-xl-4">
                <div className="intro-banner">
                  <img
                    className="img-fluid"
                    src="https://dvch1hlupt.cdn.hostvn.net/button/image/roadmap_bhonline-min_1_.png"
                    alt=""
                  />

                </div>
              </div>
              <div className=" small__img col-md-4 col-sm-4 col-lg-4 col-xl-4">
                <div className="intro-banner">
                  <img
                    className="img-fluid"
                    src="https://dvch1hlupt.cdn.hostvn.net/button/image/roadmap_dtck-min_1_1.png"
                    alt=""
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
