import React, { Component } from 'react'

export default class Edit extends Component {
    render() {
        return (
            <div className="edit__profile">
            <h1>Edit Profile</h1>
            <form>
              <div className="fullname">
                <div className="row">
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <label>First Name :</label>
                    <input type="text" placeholder="Enter First Name" />
                  </div>

                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <label>Last Name :</label>
                    <input type="text" placeholder="Enter Last Name" />
                  </div>
                </div>
              </div>
              <div className="position">
                <label>Position:</label>
                <input type="text" placeholder="Enter Position" />
              </div>
              <div className="bio">
                <label>Bio:</label>
                <input
                  type="text"
                  placeholder="Demo Biography of Demo Instructor"
                />
              </div>
              <div className="social__html_form">
                <h2>Socials</h2>
                <p>
                  Add your social profiles links, they will be shown on your
                  public profile.
                </p>
                <div className="social__wrapper">
                  <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                      <div className="socila-item">
                        <div>FACEBOOK</div>
                        <input
                          type="text"
                          placeholder="Enter Your FaceBook URl"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                      <div className="socila-item">
                        <div>TWITTER</div>
                        <input
                          type="text"
                          placeholder="Enter Your FaceBook URl"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                      <div className="socila-item">
                        <div>INSTAGRAM</div>
                        <input
                          type="text"
                          placeholder="Enter Your FaceBook URl"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                      <div className="socila-item">
                        <div>LINKEDIN</div>
                        <input
                          type="text"
                          placeholder="Enter Your FaceBook URl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="change__profile">Change Profile</button>
            </form>
          </div>
        )
    }
}
