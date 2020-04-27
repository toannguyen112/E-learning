import React, { Component } from "react";
import Slider from "react-slick";
import BannerItem from "./BannerItem";
import { Link } from "react-router-dom";
import CourseService from '../../Services/courseService'
const courseService = new CourseService();
export default class Banner extends Component {
  // componentDidMount() {
  
  //   courseService.fetchCourseOnCatalog(maDanhMuc).then((res) => {
  //     this.state.course = res.data

  //   }).catch((err) => {
  //     console.log(err);

  //   })

  // }
  render() {
    let { courseCatalog } = this.props
    console.log(courseCatalog);
    
    const settingBanner = {
      autoplaySpeed: 1000,
      autoplay: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
    };
    return (
      <div className="banner">
        <div className="banner__content container">
          <div className="row">
            <div className=" banner__caterory col-md-3 col-sm-3" style={{ width: "100%" }}>
              <div className="banner__menu">
                <div className="banner__menu__content">
                  <h5>Catagory</h5>
                  <ul>

                    {
                      courseCatalog.map((item, index) => {
                        return <BannerItem item={item} key={index} />
                      })
                    }


                    <li> <Link style={{ color: "red" }} to="/courses">View more ...</Link></li>

                  </ul>



                </div>
              </div>
            </div>
            <div className=" banner__pr col-lg-6 col-md-12 " style={{ height: "100%" }}>
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
            <div className=" banner__pr-2 col-lg-3 col-md-6" style={{ height: "100%" }}>
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
