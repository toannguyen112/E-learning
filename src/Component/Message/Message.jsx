import React, { Component } from "react";
import Footer__inst from "../footer__inst/Footer__inst";

export default class Message extends Component {
  render() {
    return (
      <div className="wrapperMessage">
        <div className="message__header">
          <div className="container">
            <h4 className="title">Messages</h4>
            <h5>You have 0 unread messages.</h5>
          </div>
        </div>
        <div className="message__body row ">
          <div className="col-md-4 col-sm-12  message__body-left">
            <div>
              <div className=" thead-tool-bar">
                <div className="thead--tool-bar--top">
                  <button className="button__compose">Compose</button>
                  <select class="form-control" name="" id="">
                    <option> All message</option>
                    <option> Unread</option>
                    <option> No response</option>
                  </select>
                </div>
                <div className="thead--tool-bar--bottom">
                  <input type="text" placeholder="Search" />
                  <button className="button__search">
                    <i className="fa fa-search" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="thead-tool-content">
                <ul className="list__message">
                  <li className="list_message__item">
                    <div className="warpper__user">
                      <div className="user__content">
                        <div className="user__content__img">
                          <img
                            className="img_user"
                            src="https://img-a.udemycdn.com/user/50x50/7327108_da6c.jpg"
                            alt=""
                          />
                          <span className="nameUserMessage">Gary Simon</span>
                        </div>
                        <div className="time">5 months ago</div>
                      </div>
                    </div>
                    <div className="wapper_user__sendMassage">
                      <p>
                        Hey! Thanks for taking this course. I really think
                        it's...
                      </p>
                      <span className="close__massage">
                        <i class="fa fa-ban" aria-hidden="true"></i>
                      </span>
                    </div>
                  </li>

                  <li className="list_message__item">
                    <div className="warpper__user">
                      <div className="user__content">
                        <div className="user__content__img">
                          <img
                            className="img_user"
                            src="https://img-a.udemycdn.com/user/50x50/7327108_da6c.jpg"
                            alt=""
                          />
                          <span className="nameUserMessage">Gary Simon</span>
                        </div>
                        <div className="time">5 months ago</div>
                      </div>
                    </div>
                    <div className="wapper_user__sendMassage">
                      <p>
                        Hey! Thanks for taking this course. I really think
                        it's...
                      </p>
                      <span className="close__massage">
                        <i class="fa fa-ban" aria-hidden="true"></i>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>{" "}
          </div>
          <div className="col-md-8 col-sm-12 message__body-right ">
            <div className="thead__header__user__message">
              <div className="thead__header__user__message-left">
                <i className="fa fa-star"></i>
                <div className="thead__header__info">
                  <img
                    src="https://img-a.udemycdn.com/user/50x50/7327108_da6c.jpg"
                    alt=""
                  />
                  <span className="nameUser">Gary Simon</span>
                </div>
              </div>
              <div className="thead__header__user__message-right">
                <i className="fa fa-ellipsis-v" aria-hidden="true" />
              </div>
            </div>
            <div className="thead__body__user__message">
              <div className="message__item">
                <p className="message_time">5 months ago</p>
                <div className="message-list--message__content">
                  <p>
                    Hey!
                    <br />
                    Thanks for taking this course. I really think it's going to
                    help you gain a solid idea of which javascript tech. you
                    want to learn more.
                    <br />
                    You should definitely check out my instructor page on Udemy
                    for more courses that I'm sure you will love.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer__inst />
      </div>
    );
  }
}
