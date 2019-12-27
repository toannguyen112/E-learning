import React, { Component } from "react";
import Slider from "react-slick";
import BannerItem from "./BannerItem";
import { Link } from "react-router-dom";
export default class Banner extends Component {
  render() {
    let { courseCatalog } = this.props
    const settingBanner = {
      autoplaySpeed: 700,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
    };
    return (
      <div className="banner">
        <div className="banner__content container">
          <div className="row">
            <div className="col-md-3" style={{ width: "100%" }}>
              <div className="banner__menu">
                <div className="banner__menu__content">
                  <h5>Catagory</h5>
                  <ul>
                    <div>
                      {
                        courseCatalog.map((item, index) => {
                          return <BannerItem item={item} key={index} />
                        })
                      }
                      {/* <li>
                        <a href="https://www.facebook.com/">
                          {" "}
                          <i className="fa fa-music" aria-hidden="true" />
                          Âm nhạc
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/">
                          {" "}
                          <i className="fa fa-laptop" aria-hidden="true" />
                          Công nghệ thông tin
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/">
                          {" "}
                          <i className="fa fa-money" aria-hidden="true" />
                          Marketing
                        </a>
                      </li> */}
                      
                      <li> <Link to="/courses">view more ...</Link></li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6" style={{ height: "100%" }}>
              <div className="banner__slide">
                <Slider {...settingBanner}>
                  <div>
                    <img
                      src="https://dvch1hlupt.cdn.hostvn.net/button/image/Rectangle_4_-_540x540.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://dvch1hlupt.cdn.hostvn.net/button/image/1_540x540_.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://dvch1hlupt.cdn.hostvn.net/button/image/540x540_48.png"
                      alt=""
                    />
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-md-3" style={{ height: "100%" }}>
              <div className="banner__tab">
                <ul>
                  <li>
                    <img src="https://dvch1hlupt.cdn.hostvn.net/button/image/255x160_32.png" alt="" />
                  </li>
                  <li>
                    <img src="https://dvch1hlupt.cdn.hostvn.net/button/image/255x160_33.png" alt="" />
                  </li>
                  <li>
                    <img src="https://dvch1hlupt.cdn.hostvn.net/button/image/255x160_34.png" alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
