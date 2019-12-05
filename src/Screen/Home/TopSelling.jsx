import React, { Component } from "react";
import Slider from "react-slick";

import OwlCarousel from 'react-owl-carousel';
export default class TopSelling extends Component {
    render() {
        const settingTopSelling = {
            autoplaySpeed: 1000,
            infinite: true,
            speed: 10,
            slidesToShow: 5,
            slidesToScroll: 5
        };
        return (
            // <div className="Top__selling">
            //     <div className="Top__selling__content container">
            //         <div className="Top__selling__title__section">
            //             <h5>Top bán chạy</h5>
            //             <a>Xem thêm <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
            //             </a>
            //         </div>
            //         <div className="Top__selling__product">
            //             <Slider {...settingTopSelling}>
            //                 <div className="card">
            //                     <span className="sale">70%</span>
            //                     <img className="card-img-top" src="https://d1nzpkv5wwh1xf.cloudfront.net/320/k-5cac6776ce4b14365029fdae/20190502-duhq042504/du.jpg" alt />
            //                     <div className="card-body">
            //                         <div className="new-tag">Mới</div>
            //                         <div className="star">
            //                             <i class="fa fa-star" aria-hidden="true"></i>
            //                             <i class="fa fa-star" aria-hidden="true"></i>
            //                             <i class="fa fa-star" aria-hidden="true"></i>
            //                             <i class="fa fa-star" aria-hidden="true"></i>

            //                             <i class="fa fa-star-half-o" aria-hidden="true"></i>

            //                         </div>
            //                         <h6 className="card-title">BẢN ĐỒ ĐỘT PHÁ KINH DOANH ONLINE 2019</h6>
            //                         <div className="card-descripton-teacher">
            //                             <img className="img-fluid" src="https://d303ny97lru840.cloudfront.net/kelley-57b67d6e60af25054a055b1d/20160901-/images.jpg" alt="" />
            //                             <span>Hán Quang Dự</span>
            //                         </div>
            //                         <div className="card-pirce">
            //                             <span className="price-old">1.999.000 ₫</span>
            //                             <span className="price-new">599.000 ₫</span>
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div className="card">
            //                     <span className="sale">70%</span>
            //                     <img className="card-img-top" src="https://d1nzpkv5wwh1xf.cloudfront.net/320/k-5cac6776ce4b14365029fdae/20190502-duhq042504/du.jpg" alt />
            //                     <div className="card-body">
            //                         <div className="new-tag">Mới</div>
            //                         <div className="star">
            //                             <i class="fa fa-star" aria-hidden="true"></i>
            //                             <i class="fa fa-star" aria-hidden="true"></i>
            //                             <i class="fa fa-star" aria-hidden="true"></i>
            //                             <i class="fa fa-star" aria-hidden="true"></i>

            //                             <i class="fa fa-star-half-o" aria-hidden="true"></i>

            //                         </div>
            //                         <h6 className="card-title">BẢN ĐỒ ĐỘT PHÁ KINH DOANH ONLINE 2019</h6>
            //                         <div className="card-descripton-teacher">
            //                             <img className="img-fluid" src="https://d303ny97lru840.cloudfront.net/kelley-57b67d6e60af25054a055b1d/20160901-/images.jpg" alt="" />
            //                             <span>Hán Quang Dự</span>
            //                         </div>
            //                         <div className="card-pirce">
            //                             <span className="price-old">1.999.000 ₫</span>
            //                             <span className="price-new">599.000 ₫</span>
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div className="card">
            //                     <span className="sale">70%</span>
            //                     <img className="card-img-top" src="https://d1nzpkv5wwh1xf.cloudfront.net/320/k-5cac6776ce4b14365029fdae/20190502-duhq042504/du.jpg" alt />
            //                     <div className="card-body">
            //                         <div className="new-tag">Mới</div>
            //                         <div className="star">
            //                             <i class="fa fa-star" aria-hidden="true"></i>
            //                             <i class="fa fa-star" aria-hidden="true"></i>
            //                             <i class="fa fa-star-half-o" aria-hidden="true"></i>
            //                             <i class="fa fa-star-half-o" aria-hidden="true"></i>

            //                             <i class="fa fa-star-half-o" aria-hidden="true"></i>

            //                         </div>
            //                         <h6 className="card-title">BẢN ĐỒ ĐỘT PHÁ KINH DOANH ONLINE 2019</h6>
            //                         <div className="card-descripton-teacher">
            //                             <img className="img-fluid" src="https://d303ny97lru840.cloudfront.net/kelley-57b67d6e60af25054a055b1d/20160901-/images.jpg" alt="" />
            //                             <span>Hán Quang Dự</span>
            //                         </div>
            //                         <div className="card-pirce">
            //                             <span className="price-old">1.999.000 ₫</span>
            //                             <span className="price-new">599.000 ₫</span>
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div className="card">
            //                     <span className="sale">70%</span>
            //                     <img className="card-img-top" src="https://d1nzpkv5wwh1xf.cloudfront.net/320/k-5cac6776ce4b14365029fdae/20190502-duhq042504/du.jpg" alt />
            //                     <div className="card-body">
            //                         <div className="new-tag">Mới</div>
            //                         <div className="star">
            //                             <i class="fa fa-star" aria-hidden="true"></i>
            //                             <i class="fa fa-star" aria-hidden="true"></i>
            //                             <i class="fa fa-star" aria-hidden="true"></i>
            //                             <i class="fa fa-star" aria-hidden="true"></i>

            //                             <i class="fa fa-star-half-o" aria-hidden="true"></i>

            //                         </div>
            //                         <h6 className="card-title">BẢN ĐỒ ĐỘT PHÁ KINH DOANH ONLINE 2019</h6>
            //                         <div className="card-descripton-teacher">
            //                             <img className="img-fluid" src="https://d303ny97lru840.cloudfront.net/kelley-57b67d6e60af25054a055b1d/20160901-/images.jpg" alt="" />
            //                             <span>Hán Quang Dự</span>
            //                         </div>
            //                         <div className="card-pirce">
            //                             <span className="price-old">1.999.000 ₫</span>
            //                             <span className="price-new">599.000 ₫</span>
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div className="card">
            //                     <span className="sale">70%</span>
            //                     <img className="card-img-top" src="https://d1nzpkv5wwh1xf.cloudfront.net/320/k-5cac6776ce4b14365029fdae/20190502-duhq042504/du.jpg" alt />
            //                     <div className="card-body">
            //                         <div className="new-tag">Mới</div>
            //                         <div className="star">
            //                             <i class="fa fa-star" aria-hidden="true"></i>
            //                             <i class="fa fa-star" aria-hidden="true"></i>
            //                             <i class="fa fa-star" aria-hidden="true"></i>
            //                             <i class="fa fa-star" aria-hidden="true"></i>

            //                             <i class="fa fa-star-half-o" aria-hidden="true"></i>

            //                         </div>
            //                         <h6 className="card-title">BẢN ĐỒ ĐỘT PHÁ KINH DOANH ONLINE 2019</h6>
            //                         <div className="card-descripton-teacher">
            //                             <img className="img-fluid" src="https://d303ny97lru840.cloudfront.net/kelley-57b67d6e60af25054a055b1d/20160901-/images.jpg" alt="" />
            //                             <span>Hán Quang Dự</span>
            //                         </div>
            //                         <div className="card-pirce">
            //                             <span className="price-old">1.999.000 ₫</span>
            //                             <span className="price-new">599.000 ₫</span>
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div className="card">
            //                     <span className="sale">70%</span>
            //                     <img className="card-img-top" src="https://d1nzpkv5wwh1xf.cloudfront.net/320/k-5cac6776ce4b14365029fdae/20190502-duhq042504/du.jpg" alt />
            //                     <div className="card-body">
            //                         <div className="new-tag">Mới</div>
            //                         <h6 className="card-title">BẢN ĐỒ ĐỘT PHÁ KINH DOANH ONLINE 2019</h6>
            //                         <div className="card-descripton-teacher">
            //                             <img className="img-fluid" src="https://d303ny97lru840.cloudfront.net/kelley-57b67d6e60af25054a055b1d/20160901-/images.jpg" alt="" />
            //                             <span>Hán Quang Dự</span>
            //                         </div>
            //                         <div className="card-pirce">
            //                             <span className="price-old">1.999.000 ₫</span>
            //                             <span className="price-new">599.000 ₫</span>
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div className="card">
            //                     <span className="sale">70%</span>
            //                     <img className="card-img-top" src="https://d1nzpkv5wwh1xf.cloudfront.net/320/k-5cac6776ce4b14365029fdae/20190502-duhq042504/du.jpg" alt />
            //                     <div className="card-body">
            //                         <div className="new-tag">Mới</div>
            //                         <div className="star">
            //                             <i class="fa fa-star" aria-hidden="true"></i>
            //                             <i class="fa fa-star" aria-hidden="true"></i>
            //                             <i class="fa fa-star" aria-hidden="true"></i>
            //                             <i class="fa fa-star" aria-hidden="true"></i>

            //                             <i class="fa fa-star-half-o" aria-hidden="true"></i>

            //                         </div>
            //                         <h6 className="card-title">BẢN ĐỒ ĐỘT PHÁ KINH DOANH ONLINE 2019</h6>
            //                         <div className="card-descripton-teacher">
            //                             <img className="img-fluid" src="https://d303ny97lru840.cloudfront.net/kelley-57b67d6e60af25054a055b1d/20160901-/images.jpg" alt="" />
            //                             <span>Hán Quang Dự</span>
            //                         </div>
            //                         <div className="card-pirce">
            //                             <span className="price-old">1.999.000 ₫</span>
            //                             <span className="price-new">599.000 ₫</span>
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div className="card">
            //                     <span className="sale">70%</span>
            //                     <img className="card-img-top" src="https://d1nzpkv5wwh1xf.cloudfront.net/320/k-5cac6776ce4b14365029fdae/20190502-duhq042504/du.jpg" alt />
            //                     <div className="card-body">
            //                         <div className="new-tag">Mới</div>
            //                         <div className="star">
            //                             <i class="fa fa-star" aria-hidden="true"></i>
            //                             <i class="fa fa-star" aria-hidden="true"></i>
            //                             <i class="fa fa-star" aria-hidden="true"></i>
            //                             <i class="fa fa-star" aria-hidden="true"></i>

            //                             <i class="fa fa-star-half-o" aria-hidden="true"></i>

            //                         </div>
            //                         <h6 className="card-title">BẢN ĐỒ ĐỘT PHÁ KINH DOANH ONLINE 2019</h6>
            //                         <div className="card-descripton-teacher">
            //                             <img className="img-fluid" src="https://d303ny97lru840.cloudfront.net/kelley-57b67d6e60af25054a055b1d/20160901-/images.jpg" alt="" />
            //                             <span>Hán Quang Dự</span>
            //                         </div>
            //                         <div className="card-pirce">
            //                             <span className="price-old">1.999.000 ₫</span>
            //                             <span className="price-new">599.000 ₫</span>
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div className="card">
            //                     <span className="sale">70%</span>
            //                     <img className="card-img-top" src="https://d1nzpkv5wwh1xf.cloudfront.net/320/k-5cac6776ce4b14365029fdae/20190502-duhq042504/du.jpg" alt />
            //                     <div className="card-body">
            //                         <div className="new-tag">Mới</div>
            //                         <div className="star">
            //                             <i class="fa fa-star" aria-hidden="true"></i>
            //                             <i class="fa fa-star" aria-hidden="true"></i>
            //                             <i class="fa fa-star" aria-hidden="true"></i>
            //                             <i class="fa fa-star" aria-hidden="true"></i>

            //                             <i class="fa fa-star-half-o" aria-hidden="true"></i>

            //                         </div>
            //                         <h6 className="card-title">BẢN ĐỒ ĐỘT PHÁ KINH DOANH ONLINE 2019</h6>
            //                         <div className="card-descripton-teacher">
            //                             <img className="img-fluid" src="https://d303ny97lru840.cloudfront.net/kelley-57b67d6e60af25054a055b1d/20160901-/images.jpg" alt="" />
            //                             <span>Hán Quang Dự</span>
            //                         </div>
            //                         <div className="card-pirce">
            //                             <span className="price-old">1.999.000 ₫</span>
            //                             <span className="price-new">599.000 ₫</span>
            //                         </div>
            //                     </div>
            //                 </div>

            //             </Slider>
            //         </div>
            //     </div>
            // </div>

            <section className="Mystudent">
                <div className="student_content container ">
                    <h3>Top bán chạy</h3>
                    <div className="student_course ">
                        <OwlCarousel className="owl-theme"
                            items={4}

                            margin={5}
                            nav>
                            <div className="card">
                                <img
                                    className=" card-img-top "
                                    src=" ./img/kh2.jpg "
                                    alt=" Card image "
                                />
                                <div className=" card-body ">
                                    <h4 className=" card-title ">John Doe</h4>
                                    <p className=" card-text ">Some example text.</p>
                                    <div className=" rating ">
                                        <div className=" rating-star ">
                                            <i className=" fa fa-star " />
                                            <i className=" fa fa-star " />
                                            <i className=" fa fa-star " />
                                            <i className=" fa fa-star " />
                                            <i className=" fa fa-star " />
                                        </div>
                                        <span>4.8 </span>
                                        <span>(43028)</span>
                                    </div>
                                    <div className=" price ">
                                        <span className=" old-price ">$179.99</span>
                                        <span className=" new-price ">$9.99</span>
                                    </div>
                                </div>
                            </div>
                            <div className=" card ">
                                <img
                                    className="card-img-top "
                                    src="./img/kh1.jpg "
                                    alt="Card image "
                                />
                                <div className="card-body ">
                                    <h4 className="card-title ">John Doe</h4>
                                    <p className="card-text ">Some example text.</p>
                                    <div className="rating ">
                                        <div className="rating-star ">
                                            <i className="fa fa-star " />
                                            <i className="fa fa-star " />
                                            <i className="fa fa-star " />
                                            <i className="fa fa-star " />
                                            <i className="fa fa-star " />
                                        </div>
                                        <span>4.8 </span>
                                        <span>(43028)</span>
                                    </div>
                                    <div className="price ">
                                        <span className="old-price ">$179.99</span>
                                        <span className="new-price ">$9.99</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card ">
                                <img
                                    className="card-img-top img-fluid "
                                    src="./img/kh11.jpg "
                                    alt="Card image "
                                />
                                <div className="card-body ">
                                    <h4 className="card-title ">John Doe</h4>
                                    <p className="card-text ">Some example text.</p>
                                    <div className="rating ">
                                        <div className="rating-star ">
                                            <i className="fa fa-star " />
                                            <i className="fa fa-star " />
                                            <i className="fa fa-star " />
                                            <i className="fa fa-star " />
                                            <i className="fa fa-star " />
                                        </div>
                                        <span>4.8 </span>
                                        <span>(43028)</span>
                                    </div>
                                    <div className="price ">
                                        <span className="old-price ">$179.99</span>
                                        <span className="new-price ">$9.99</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card ">
                                <img
                                    className="card-img-top "
                                    src="./img/kh11.jpg "
                                    alt="Card image "
                                />
                                <div className="card-body ">
                                    <h4 className="card-title ">John Doe</h4>
                                    <p className="card-text ">Some example text.</p>
                                    <div className="rating ">
                                        <div className="rating-star ">
                                            <i className="fa fa-star " />
                                            <i className="fa fa-star " />
                                            <i className="fa fa-star " />
                                            <i className="fa fa-star " />
                                            <i className="fa fa-star " />
                                        </div>
                                        <span>4.8 </span>
                                        <span>(43028)</span>
                                    </div>
                                    <div className="price ">
                                        <span className="old-price ">$179.99</span>
                                        <span className="new-price ">$9.99</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card ">
                                <img
                                    className="card-img-top img-fluid "
                                    src="./img/kh2.jpg "
                                    alt="Card image "
                                />
                                <div className="card-body ">
                                    <h4 className="card-title ">John Doe</h4>
                                    <p className="card-text ">Some example text.</p>
                                    <div className="rating ">
                                        <div className="rating-star ">
                                            <i className="fa fa-star " />
                                            <i className="fa fa-star " />
                                            <i className="fa fa-star " />
                                            <i className="fa fa-star " />
                                            <i className="fa fa-star " />
                                        </div>
                                        <span>4.8 </span>
                                        <span>(43028)</span>
                                    </div>
                                    <div className="price ">
                                        <span className="old-price ">$179.99</span>
                                        <span className="new-price ">$9.99</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card ">
                                <img
                                    className="card-img-top img-fluid "
                                    src="./img/kh2.jpg "
                                    alt="Card image "
                                />
                                <div className="card-body ">
                                    <h4 className="card-title ">John Doe</h4>
                                    <p className="card-text ">Some example text.</p>
                                    <div className="rating ">
                                        <div className="rating-star ">
                                            <i className="fa fa-star " />
                                            <i className="fa fa-star " />
                                            <i className="fa fa-star " />
                                            <i className="fa fa-star " />
                                            <i className="fa fa-star " />
                                        </div>
                                        <span>4.8 </span>
                                        <span>(43028)</span>
                                    </div>
                                    <div className="price ">
                                        <span className="old-price ">$179.99</span>
                                        <span className="new-price ">$9.99</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card ">
                                <img
                                    className="card-img-top img-fluid "
                                    src="./img/kh2.jpg "
                                    alt="Card image "
                                />
                                <div className="card-body ">
                                    <h4 className="card-title ">John Doe</h4>
                                    <p className="card-text ">Some example text.</p>
                                    <div className="rating ">
                                        <div className="rating-star ">
                                            <i className="fa fa-star " />
                                            <i className="fa fa-star " />
                                            <i className="fa fa-star " />
                                            <i className="fa fa-star " />
                                            <i className="fa fa-star " />
                                        </div>
                                        <span>4.8 </span>
                                        <span>(43028)</span>
                                    </div>
                                    <div className="price ">
                                        <span className="old-price ">$179.99</span>
                                        <span className="new-price ">$9.99</span>
                                    </div>
                                </div>
                            </div>

                        </OwlCarousel>
                    </div>
                </div>
            </section>
        );
    }
}
