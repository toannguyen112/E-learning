import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer_content container">
                    <div className="footer_top">
                        <div className="row ">
                            <div className="col-md-9">
                                <ul className="d-flex">
                                    <li><a className="footer-text" href="https://www.facebook.com/">Udemy for Business</a></li>
                                    <li><a className="footer-text" href="https://www.facebook.com/">Teach on Udemy</a></li>
                                    <li><a href="https://www.facebook.com">Udemy app</a></li>
                                    <li><a href="https://www.facebook.com">About us</a></li>
                                    <li><a href="https://www.facebook.com">Careers</a></li>
                                    <li><a href="https://www.facebook.com">Blog</a></li>
                                    <li><a href="https://www.facebook.com">Help and Support</a></li>
                                    <li><a href="https://www.facebook.com">Affiliate</a></li>
                                    <li><a href="https://www.facebook.com">Sitemap</a></li>
                                    <li><a href="https://www.facebook.com">Popular courses</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-3 ">
                               
                                <div className="btn-group dropup">
                                    <button disabled className="btn  dropdown-toggle btn--white " data-toggle="dropdown" >
                                        <i className="fa fa-globe" aria-hidden="true" /><span>English</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bot">
                        <div className="row">
                            <div className="col-md-6 d-flex">
                                <div className="footer_img"> <img className="img-fluid" src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg" alt="" /></div>
                                <span>Copyright © 2019 Udemy, Inc.</span>
                            </div>
                            <div className="col-md-6 ">
                                <div className="footer_bot_info d-flex">
                                    <a href="https://www.facebook.com/">Terms</a>
                                    <a href="https://www.facebook.com/">Privacy Policy and Cookie Policy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        )
    }
}
