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
                                    <li><a className="footer-text" href="#">Udemy for Business</a></li>
                                    <li><a className="footer-text" href="#">Teach on Udemy</a></li>
                                    <li><a href="#">Udemy app</a></li>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Help and Support</a></li>
                                    <li><a href="#">Affiliate</a></li>
                                    <li><a href="#">Sitemap</a></li>
                                    <li><a href="#">Popular courses</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-3 ">
                                {/* Default dropup button */}
                                <div className="btn-group dropup">
                                    <button type="button" className="btn  dropdown-toggle btn--white " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fa fa-globe" aria-hidden="true" /><span>English</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bot">
                        <div className="row">
                            <div className="col-md-6 d-flex">
                                <div className="footer_img"> <img className="img-fluid" src="https://edumall.vn/static/version1574786512/frontend/Edumall/winstrike/default/images/logo_full.svg" alt /></div>
                                <span>Copyright © 2019 Udemy, Inc.</span>
                            </div>
                            <div className="col-md-6 ">
                                <div className="footer_bot_info d-flex">
                                    <a href>Terms</a>
                                    <a href>Privacy Policy and Cookie Policy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        )
    }
}
