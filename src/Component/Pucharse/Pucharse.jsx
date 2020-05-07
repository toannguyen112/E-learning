import React, { Component } from "react";

export default class Pucharse extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hiddeE: true
        }
    }
    close = () => {
        this.setState({
            hiddeE: false
        })
    }

    render() {
        return (
            <div className="pucharse">
                <div className="pucharse__header">
                    <div className="pucharse__wrapper__route container">
                        <div className="pucharse__route">
                            <i className=" icon__home fa fa-home" aria-hidden="true" />
                /
                <span className="route__text">Purchase history</span>
                        </div>
                        <h2 className="pucharse__name">Purchase history</h2>
                    </div>
                </div>
                <div className="pucharse__body container ">
                    {this.state.hiddeE ? (<div className="pucharse__notify">
                        <i className="fa fa-exclamation-circle pucharse__notify-icon " aria-hidden="true" />
                        <span className="pucharse__notify-text" >Invoices and credit notes are unavailable for most purchases made before April 2020 or for purchases without transaction taxes applied.</span>
                        <i className="fa fa-times" aria-hidden="true" onClick={() => this.close()} />

                    </div>) : ""}

                    <ul className="pucharse__list">

                        {/* thead  */}
                        <li className="pucharse__list__header row ">
                            <div className="col-sm-5 purchase__left ">
                                <span className="purchase__left__title" >
                                    Purchase history
                                </span>
                            </div>
                            <div className="col-sm-7 purchase__right ">
                                <div className="row purchase__right__content">
                                    <div className="col-sm-2">
                                        Date
                                    </div>
                                    <div className="col-sm-2">
                                        Total price
                                    </div>
                                    <div className="col-sm-4">
                                        Payment Type
                                    </div>
                                    <div className="col-sm-2">
                                        Receipt
                                    </div>
                                    <div className="col-sm-2">
                                        Invoice
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* end thead  */}
                        <li className="pucharse__list__item row">
                            <div className=" pucharse__list__item--name col-sm-5">
                                <img className="pucharse__img_course" src="https://img-a.udemycdn.com/course/200_H/1514256_27f7_2.jpg" alt="" />
                                <p className="nameCourse" >Complete Whiteboard Animation in VideoScribe - 5 Animations</p>
                            </div>
                            <div className="col-sm-7 pucharse__list__item--content ">
                                <div className="row purchase__right__content">
                                    <div className="col-sm-2">
                                        April 7, 2020
                                    </div>
                                    <div className=" price-bold col-sm-2">

                                        $0.00
                                    </div>
                                    <div className="col-sm-4">

                                        Free Coupon
                                    </div>
                                    <div className="col-sm-2">
                                        <a className=" Receipt" href="">
                                            Receipt
                                        </a>
                                    </div>
                                    <div className="col-sm-2">
                                        Unavailable
                                    </div>
                                </div>
                            </div>
                        </li>


                        <li className="pucharse__list__item row">
                            <div className=" pucharse__list__item--name col-sm-5">
                                <img className="pucharse__img_course" src="https://img-a.udemycdn.com/course/200_H/1514256_27f7_2.jpg" alt="" />
                                <p className="nameCourse" >Complete Whiteboard Animation in VideoScribe - 5 Animations</p>
                            </div>
                            <div className="col-sm-7 pucharse__list__item--content ">
                                <div className="row purchase__right__content">
                                    <div className="col-sm-2">
                                        April 7, 2020
                                    </div>
                                    <div className=" price-bold col-sm-2">

                                        $0.00
                                    </div>
                                    <div className="col-sm-4">

                                        Free Coupon
                                    </div>
                                    <div className="col-sm-2">
                                        <a className=" Receipt" href="">
                                            Receipt
                                        </a>
                                    </div>
                                    <div className="col-sm-2">
                                        Unavailable
                                    </div>
                                </div>
                            </div>
                        </li>

                        {/* refund  */}
                        <li className="pucharse__list__header row ">
                            <div className="col-sm-5 purchase__left ">
                                <span className="purchase__left__title" >
                                    Refunds
                                </span>
                            </div>
                            <div className="col-sm-7 purchase__right ">
                                <div className="row purchase__right__content">
                                    <div className="col-sm-2">
                                        Date
                                    </div>
                                    <div className="col-sm-2">
                                        Amount
                                    </div>
                                    <div className="col-sm-4">
                                        Refunded to
                                    </div>
                                    <div className="col-sm-2">
                                        Refund Type
                                    </div>
                                    <div className="col-sm-2">
                                        Credit Note
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* end refund  */}


                    </ul>
                </div>
               
            </div>
        );
    }
}
