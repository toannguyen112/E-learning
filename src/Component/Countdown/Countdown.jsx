import React, { Component } from "react";

export default class Countdown extends Component {

  render() {
    return (
      <section className="countdown">
        <div className="container">
          <div className="row countdown__content">
            <div className="col-md-12 col-lg-8 col-xl-8  col-sm-12 countdown__left ">
              <div className="count__img">
                <img src="/img/countdown.png" alt="countdown" />
              </div>
              <div className="count__info">
                <h4>SCRIBBLE STARTUP COURSE:</h4>
                <h4>SAVE UP TO 30% + FREE MATERIALS</h4>
                <p>
                  This course is the first of a two-course sequence:
                  Introduction to Computer Science and Programming Using Python,
                  and Introduction to Computational Thinking and Data Science.
                </p>
                <button>LEARN MORE</button>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 col-xl-4  col-sm-12 countdown__right">
              <h6>HURRY UP! IT'S ONLY LEFT</h6>
              <div className="timer">
                <div className="timer__inner">
                  <div className="board">11</div>
                  <span>Days</span>
                </div>
                <div className="timer__inner">
                  <div className="board">01</div>
                  <span>Hours</span>
                </div>
                <div className="timer__inner">
                  <div className="board">22</div>
                  <span>Min</span>
                </div>
                <div className="timer__inner">
                  <div className="board">11</div>
                  <span>Sec</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
