import React, { Component } from "react";
import Slider from "react-slick";
import OwlCarousel from 'react-owl-carousel';

export default class Intro extends Component {
  render() {

    return (
      <div className="intro">
        <div className="intro__content container">
          <div className="intro__title">
            <h2>Hành trang nghề nghiệp cho bạn</h2>
          </div>
          <div className="intro__slider">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="intro-banner">
                  <img
                    className="img-fluid"
                    src="https://dvch1hlupt.cdn.hostvn.net/button/image/roadmap_Edumallcombo_2_1.png"
                    alt=""
                  />
                  <div className="banner_text">
                    <i class="fa fa-money" aria-hidden="true"></i>
                    <span>Edumall Combo Ngọc Thô Tỏa Sáng</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="intro-banner">
                  <img
                    className="img-fluid"
                    src="https://dvch1hlupt.cdn.hostvn.net/button/image/roadmap_Edumallcombo_2_1.png"
                    alt=""
                  />
                  <div className="banner_text">
                    <i class="fa fa-money" aria-hidden="true"></i>
                    <span>Edumall Combo Ngọc Thô Tỏa Sáng</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="intro-banner">
                  <img
                    className="img-fluid"
                    src="https://dvch1hlupt.cdn.hostvn.net/button/image/child-reading-facebook-ai-tes_1.jpg"
                    alt=""
                  />
                  <div className="banner_text">
                    <i class="fa fa-money" aria-hidden="true"></i>
                    <span>Edumall Combo Ngọc Thô Tỏa Sáng</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="intro-banner">
                  <img
                    className="img-fluid"
                    src="https://dvch1hlupt.cdn.hostvn.net/button/image/roadmap_ielts-min_2.png"
                    alt=""
                  />
                  <div className="banner_text">
                    <i class="fa fa-money" aria-hidden="true"></i>
                    <span>Edumall Combo Ngọc Thô Tỏa Sáng</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="intro-banner">
                  <img
                    className="img-fluid"
                    src="https://dvch1hlupt.cdn.hostvn.net/button/image/roadmap_design-min_1_1_1_1.png"
                    alt=""
                  />
                  <div className="banner_text">
                    <i class="fa fa-money" aria-hidden="true"></i>
                    <span>Edumall Combo Ngọc Thô Tỏa Sáng</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="intro-banner">
                  <img
                    className="img-fluid"
                    src="https://dvch1hlupt.cdn.hostvn.net/button/image/roadmap_bhonline-min_1_.png"
                    alt=""
                  />
                  <div className="banner_text">
                    <i class="fa fa-money" aria-hidden="true"></i>
                    <span>Edumall Combo Ngọc Thô Tỏa Sáng</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="intro-banner">
                  <img
                    className="img-fluid"
                    src="https://dvch1hlupt.cdn.hostvn.net/button/image/roadmap_dtck-min_1_1.png"
                    alt=""
                  />
                  <div className="banner_text">
                    <i class="fa fa-money" aria-hidden="true"></i>
                    <span>Edumall Combo Ngọc Thô Tỏa Sáng</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="intro__manual">
            <section className="testimonials ">
              <div className="container">
                <h2>What our students have to say</h2>
                <div className="testimonials__content ">
                  <OwlCarousel className="owl-theme"
                    items={3}
                    dots =  {false}
                    margin={5}
                  nav>
                    <div className="testimonials_items">
                    <div className="testimonials_items__info">
                      <div className="testimonials__items__img">
                        {" "}
                        <img
                          className="img-fluid"
                          src="https://i.udemycdn.com/user/100x100/26154780_76c8.jpg"
                          alt
                        />
                      </div>
                      <div className="testimonials_items__name">
                        <span>Zulaika</span>
                      </div>
                    </div>
                    <p>
                      The best part about Udemy is the selection. You can find
                      a course for anything you want to learn!
                      </p>
                  </div>
                  <div className="testimonials_items">
                    <div className="testimonials_items__info">
                      <div className="testimonials__items__img">
                        {" "}
                        <img
                          className="img-fluid"
                          src="https://i.udemycdn.com/user/100x100/31841220_f398_2.jpg"
                          alt
                        />
                      </div>
                      <div className="testimonials_items__name">
                        <span>Dipesh</span>
                      </div>
                    </div>
                    <p>
                      Thank you Udemy! You've renewed my passion for learning
                      and my dream of becoming a web developer.
                      </p>
                  </div>
                  <div className="testimonials_items">
                    <div className="testimonials_items__info">
                      <div className="testimonials__items__img">
                        {" "}
                        <img
                          className="img-fluid"
                          src="https://i.udemycdn.com/user/100x100/8872940_27b4_3.jpg"
                          alt
                        />
                      </div>
                      <div className="testimonials_items__name">
                        <span>Kathy</span>
                      </div>
                    </div>
                    <p>
                      The best part about Udemy is the selection. You can find
                      a course for anything you want to learn!
                      </p>
                  </div>
                  <div className="testimonials_items">
                    <div className="testimonials_items__info">
                      <div className="testimonials__items__img">
                        {" "}
                        <img
                          className="img-fluid"
                          src="https://i.udemycdn.com/user/100x100/26154780_76c8.jpg"
                          alt
                        />
                      </div>
                      <div className="testimonials_items__name">
                        <span>Kathy</span>
                      </div>
                    </div>
                    <p>
                      The best part about Udemy is the selection. You can find
                      a course for anything you want to learn!
                      </p>
                  </div>
                  </OwlCarousel>
              </div>
              <div className=" partner-text text-center">
                Được tin cậy bởi các công ty thuộc mọi quy mô
                </div>
              <div className="partners__logos">
                <div className="logo-item">
                  <img src="./img/mercedes.svg" alt />
                </div>
                <div className="logo-item">
                  <img src="./img/mercedes.svg" alt />
                </div>
                <div className="logo-item">
                  <img src="./img/mercedes.svg" alt />
                </div>
                <div className="logo-item">
                  <img src="./img/mercedes.svg" alt />
                </div>
                <div className="logo-item">
                  <img src="./img/mercedes.svg" alt />
                </div>
                <div className="logo-item">
                  <img src="./img/mercedes.svg" alt />
                </div>
              </div>
              <div className=" partners__content">
                <div className=" row   ">
                  <div className="col-6 p-0  line-center ">
                    <div className="partners__items ">
                      <a href>Dạy trên Udemy</a>
                      <p>
                        Dạy những gì bạn yêu thích. Udemy cung cấp cho bạn các
                        công cụ để tạo một khóa học trực tuyến.
                        </p>
                      <button className="btn-red ">Bắt đầu giảng dạy</button>
                    </div>
                  </div>
                  <div className="col-6  p-0  ">
                    <div className="partners__items">
                      <a href>Udemy cho doanh nghiệp</a>
                      <p>
                        Nhận quyền truy cập không giới hạn vào hơn 3.500 khóa
                        học hàng đầu của Udemy Phụ cho nhóm của bạn
                        </p>
                      <button className="btn-red">
                        Nhận Udemy cho doanh nghiệp
                        </button>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </section>
        </div>
      </div>
      </div >
    );
  }
}
