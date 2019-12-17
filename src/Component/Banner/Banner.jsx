import React, { Component } from 'react'
import Slider from "react-slick";
export default class Banner extends Component {
    render() {
        const settingBanner = {
            autoplaySpeed: 700,
            autoplay: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
            , dots: true
        };
        return (
            <div className="banner">
                <div className="banner__content container">
                    <div className="row">
                        <div className="col-md-3" style={{ width: "100%" }}>
                            <div className="banner__menu">
                                <div className="banner__menu__content">
                                    <h5>Danh mục</h5>
                                    <ul>
                                        <li><a href=""> <i class="fa fa-commenting-o" aria-hidden="true"></i>Ngoại ngữ</a></li>


                                        <li><a href=""> <i class="fa fa-music" aria-hidden="true"></i>Âm nhạc</a></li>
                                        <li><a href=""> <i class="fa fa-laptop" aria-hidden="true"></i>Công nghệ thông tin</a></li>
                                        <li><a href=""> <i class="fa fa-money" aria-hidden="true"></i>
                                            Marketing</a></li>
                                        <li><i class="fa fa-pencil" aria-hidden="true"></i> Kinh doanh - khởi nghiệp </li>

                                        <li><a href=""> <i class="fa fa-diamond" aria-hidden="true"></i>Phát triển cá nhân</a></li>
                                        <li><a href=""> <i class="fa fa-television" aria-hidden="true"></i>Tin học văn phòng</a></li>
                                        <li><a href=""> <i class="fa fa-mobile" aria-hidden="true"></i> Multimedia</a></li>
                                        <li><a href=""> <i class="fa fa-graduation-cap" aria-hidden="true"></i>Kiến thức chuyên ngành</a></li>
                                        <li><a href=""> <i class="fa fa-star" aria-hidden="true"></i> Nghệ thuật - đời sống</a></li>
                                        <li><a href=""> <i class="fa fa-heart" aria-hidden="true"></i> Hôn nhân - gia đình</a></li>
                                        <li><a href=""> <i class="fa fa-user-md" aria-hidden="true"></i>Nuôi dạy con</a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" style={{ height: "100%" }}>
                            <div className="banner__slide">
                                <Slider {...settingBanner}>
                                    <div>
                                        <img src="https://dvch1hlupt.cdn.hostvn.net/button/image/app_540x540.png" alt="" />
                                    </div>
                                    <div>
                                        <img src="https://dvch1hlupt.cdn.hostvn.net/button/image/540x540_44.png" alt="" />
                                    </div>
                                    <div>
                                        <img src="https://dvch1hlupt.cdn.hostvn.net/button/image/540x540_44.png" alt="" />
                                    </div>

                                </Slider>
                            </div>
                        </div>
                        <div className="col-md-3" style={{ height: "100%" }}>
                            <div className="banner__tab">
                                <ul>
                                    <li><img src="https://dvch1hlupt.cdn.hostvn.net/button/image/255x160_29.png"  /></li>
                                    <li><img src="https://dvch1hlupt.cdn.hostvn.net/button/image/255x160_30.png"  /></li>
                                    <li><img src="https://dvch1hlupt.cdn.hostvn.net/button/image/255x160_31.png" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
