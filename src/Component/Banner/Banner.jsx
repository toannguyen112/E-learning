import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div className="wrapper__banner" >
        <div className="wrapper__banner__content container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="banner__img">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="banner__info">
                      <div className="banner__title">
                        Udemy for Business
                  </div>
                      <p className="banner__text" >
                        Did you know your company can get you unlimited access to Udemy's top 4,000+ business & technical courses?
                  </p>
                      <p className="banner__text" >
                        Employees at Apple, eBay, Princeton University, Eventbrite, Booking.com, Lyft, and Volkswagen use Udemy at work.
                  </p>
                      <button className="learnMore">Learn More</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
