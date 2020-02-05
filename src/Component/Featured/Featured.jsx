import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
export default class Featured extends Component {
  render() {
    const settingFeatured = {
      autoplaySpeed: 3000,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };



    return (
      <div className="featured">
        <div className="featured__content container">
          <div className="row">
            <div className="col-md-4 col-sm-4 featured__content__items ">
              <div className="featured__box">
                <div className="featured__title">
                  <h5>
                    appreciate</h5>
                  <Link to="/courses">
                  View more...
                    <i
                      className="fa fa-arrow-circle-right"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
                <Slider {...settingFeatured}>
                  <div className="featured__list">
                    <div className="featured__list__item">
                      <div className="num">1</div>
                      <div className="course">
                        <div className="course-img">
                          {" "}
                          <img src="/img/item1.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="course-description">
                          <p>Ts. Lê Thẩm Dương - Chiến lược tài chính</p>
                          <div className="star-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <span>499.000 ₫</span>
                        </div>
                      </div>
                    </div>
                    <div className="featured__list__item">
                      <div className="num">2</div>
                      <div className="course">
                        <div className="course-img">
                          {" "}
                          <img
                            src="/img/item2.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="course-description">
                          <p>Ts. Lê Thẩm Dương - Chiến lược tài chính</p>
                          <div className="star-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <span>499.000 ₫</span>
                        </div>
                      </div>
                    </div>
                    <div className="featured__list__item">
                      <div className="num">3</div>
                      <div className="course">
                        <div className="course-img">
                          {" "}
                          <img
                            src="/img/item3.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="course-description">
                          <p>Ts. Lê Thẩm Dương - Chiến lược tài chính</p>
                          <div className="star-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <span>499.000 ₫</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="featured__list">
                    <div className="featured__list__item">
                      <div className="num">1</div>
                      <div className="course">
                        <div className="course-img">
                          {" "}
                          <img
                            src="./img/item4.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="course-description">
                          <p>Ts. Lê Thẩm Dương - Chiến lược tài chính</p>
                          <div className="star-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <span>499.000 ₫</span>
                        </div>
                      </div>
                    </div>
                    <div className="featured__list__item">
                      <div className="num">2</div>
                      <div className="course">
                        <div className="course-img">
                          {" "}
                          <img
                            src="/img/item5.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="course-description">
                          <p>Lập trình IOS</p>
                          <div className="star-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <span>499.000 ₫</span>
                        </div>
                      </div>
                    </div>
                    <div className="featured__list__item">
                      <div className="num">3</div>
                      <div className="course">
                        <div className="course-img">
                          {" "}
                          <img
                            src="/img/item6.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="course-description">
                          <p>Ts. Lê Thẩm Dương - Chiến lược tài chính</p>
                          <div className="star-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <span>499.000 ₫</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="featured__list">
                    <div className="featured__list__item">
                      <div className="num">1</div>
                      <div className="course">
                        <div className="course-img">
                          {" "}
                          <img
                            src="/img/item7.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="course-description">
                          <p>Khóa học PHP</p>
                          <div className="star-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <span>499.000 ₫</span>
                        </div>
                      </div>
                    </div>
                    <div className="featured__list__item">
                      <div className="num">2</div>
                      <div className="course">
                        <div className="course-img">
                          {" "}
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxitReVU1jc49PLvzwWlnpwxW6dl2V1Dv4VQ1o8E2ZdmCGklYv"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="course-description">
                          <p>SQL Server</p>
                          <div className="star-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <span>499.000 ₫</span>
                        </div>
                      </div>
                    </div>
                    <div className="featured__list__item">
                      <div className="num">3</div>
                      <div className="course">
                        <div className="course-img">
                          {" "}
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8kytrfOGRmDKCDjKE9kXqud6MZN3uqOuBGJqqxMTKA7vDIa35"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="course-description">
                          <p>Lập trình androi</p>
                          <div className="star-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <span>499.000 ₫</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 featured__content__items ">
              <div className="featured__box">
                <div className="featured__title">
                  <h5>
                    appreciate</h5>
                  <Link to="/courses">
                   View more...
                    <i className="fa fa-arrow-circle-right" aria-hidden="true" />

                  </Link>
                </div>
                <Slider {...settingFeatured}>
                  <div className="featured__list">
                    <div className="featured__list__item">
                      <div className="num">1</div>
                      <div className="course">
                        <div className="course-img">
                          {" "}
                          <img
                            src="https://d1nzpkv5wwh1xf.cloudfront.net/320/k-57ac2d8c047c990776574ffe/20170817-thayanh_linhnt19_17817/duonglt11.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="course-description">
                          <p>Ts. Lê Thẩm Dương - Chiến lược tài chính</p>
                          <div className="star-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <span>499.000 ₫</span>
                        </div>
                      </div>
                    </div>
                    <div className="featured__list__item">
                      <div className="num">2</div>
                      <div className="course">
                        <div className="course-img">
                          {" "}
                          <img
                            src="https://d1nzpkv5wwh1xf.cloudfront.net/320/k-57ac2d8c047c990776574ffe/20170817-thayanh_linhnt19_17817/loild03.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="course-description">
                          <p>Ts. Lê Thẩm Dương - Chiến lược tài chính</p>
                          <div className="star-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <span>499.000 ₫</span>
                        </div>
                      </div>
                    </div>
                    <div className="featured__list__item">
                      <div className="num">3</div>
                      <div className="course">
                        <div className="course-img">
                          {" "}
                          <img
                            src="https://d1nzpkv5wwh1xf.cloudfront.net/320/k-5768aeb1047c995f75fdbf6b/20170817-anhdaidienmoi_thinh/thangpp01.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="course-description">
                          <p>Ts. Lê Thẩm Dương - Chiến lược tài chính</p>
                          <div className="star-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <span>499.000 ₫</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="featured__list">
                    <div className="featured__list__item">
                      <div className="num">1</div>
                      <div className="course">
                        <div className="course-img">
                          {" "}
                          <img
                            src="https://d1nzpkv5wwh1xf.cloudfront.net/320/k-57ac2d8c047c990776574ffe/20170817-thayanh_linhnt19_17817/duonglt11.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="course-description">
                          <p>Ts. Lê Thẩm Dương - Chiến lược tài chính</p>
                          <div className="star-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <span>499.000 ₫</span>
                        </div>
                      </div>
                    </div>
                    <div className="featured__list__item">
                      <div className="num">2</div>
                      <div className="course">
                        <div className="course-img">
                          {" "}
                          <img
                            src="https://d1nzpkv5wwh1xf.cloudfront.net/320/k-57ac2d8c047c990776574ffe/20170817-thayanh_linhnt19_17817/loild03.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="course-description">
                          <p>Ts. Lê Thẩm Dương - Chiến lược tài chính</p>
                          <div className="star-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <span>499.000 ₫</span>
                        </div>
                      </div>
                    </div>
                    <div className="featured__list__item">
                      <div className="num">3</div>
                      <div className="course">
                        <div className="course-img">
                          {" "}
                          <img
                            src="https://d1nzpkv5wwh1xf.cloudfront.net/320/k-5768aeb1047c995f75fdbf6b/20170817-anhdaidienmoi_thinh/thangpp01.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="course-description">
                          <p>Ts. Lê Thẩm Dương - Chiến lược tài chính</p>
                          <div className="star-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <span>499.000 ₫</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="featured__list">
                    <div className="featured__list__item">
                      <div className="num">1</div>
                      <div className="course">
                        <div className="course-img">
                          {" "}
                          <img
                            src="https://d1nzpkv5wwh1xf.cloudfront.net/320/k-57ac2d8c047c990776574ffe/20170817-thayanh_linhnt19_17817/duonglt11.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="course-description">
                          <p>Ts. Lê Thẩm Dương - Chiến lược tài chính</p>
                          <div className="star-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <span>499.000 ₫</span>
                        </div>
                      </div>
                    </div>
                    <div className="featured__list__item">
                      <div className="num">2</div>
                      <div className="course">
                        <div className="course-img">
                          {" "}
                          <img
                            src="https://d1nzpkv5wwh1xf.cloudfront.net/320/k-57ac2d8c047c990776574ffe/20170817-thayanh_linhnt19_17817/loild03.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="course-description">
                          <p>Ts. Lê Thẩm Dương - Chiến lược tài chính</p>
                          <div className="star-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <span>499.000 ₫</span>
                        </div>
                      </div>
                    </div>
                    <div className="featured__list__item">
                      <div className="num">3</div>
                      <div className="course">
                        <div className="course-img">
                          {" "}
                          <img
                            src="https://d1nzpkv5wwh1xf.cloudfront.net/320/k-5768aeb1047c995f75fdbf6b/20170817-anhdaidienmoi_thinh/thangpp01.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="course-description">
                          <p>Ts. Lê Thẩm Dương - Chiến lược tài chính</p>
                          <div className="star-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <span>499.000 ₫</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 featured__content__items ">
              <Slider {...settingFeatured}>
                <div>
                  <img
                    src="https://dvch1hlupt.cdn.hostvn.net/button/image/360x434_42.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://dvch1hlupt.cdn.hostvn.net/button/image/360x434_41.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://dvch1hlupt.cdn.hostvn.net/button/image/360x434_39.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
