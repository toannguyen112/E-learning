import React, { Component } from "react";
import Header from "../Home/Header";

export default class CourseDetail extends Component {
    render() {
        return (
            <div className="courseDetail">
                <Header />
                <div className="courseDetail-content">
                    <div className="container">
                        <div class="row">
                            <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8 pl-0 content">
                                <div className="content__title">
                                    <h1>Graphic Design Masterclass - Learn GREAT Design</h1>
                                </div>
                                <div className="intro-title">
                                    <div className="teacher">
                                        <img src="./img/teacher3.jpg" alt="" />
                                        <div className="teacher-name">
                                            <div>teacher</div>
                                            <div>Robert Richards</div>
                                        </div>
                                    </div>

                                    <div className="category">
                                        <span class="lnr lnr-layers"></span>
                                        <div className="category__name">
                                            <div>Category</div>
                                            <div>Apache, Computer Science, PHP, CSS, JS</div>
                                        </div>
                                    </div>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <span>3.5</span>
                                        <p>500 reviews</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8 pl-0 content"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
