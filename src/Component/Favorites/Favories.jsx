import React, { Component } from "react";
import FavoriesItem from "./FavoriesItem";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Favories extends Component {
  showCourseFavories = () => {
    let courseFavo = JSON.parse(localStorage.getItem("courseFavorites"));
    console.log(courseFavo);
    
    let { courseFavories } = this.props;
    if (courseFavories.length > 0 ) {
      return courseFavories.map((course, index) => {
        return (
          <div className="col-md-3" key={index}>
            <FavoriesItem course={course} />
          </div>
        );
      });
    } else {
      return <p>Ko co khoa hoc yeu thich nao duoc chon</p>;
    }
  };
  render() {
    let { courseFavories } = this.props;
    return (
      <div className="favories">
        <div className="favories-content container">
          <div className="row">
            <div className="col-md-3">
              <div className="favories-left">
                <div className="favories-member">
                  <div className="favories-img">
                    <img
                      src="http://graph.facebook.com/v2.10/172902427148211/picture"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="favories-info">
                    <span>Nguyen Toan</span>
                    <span>Member</span>
                  </div>
                </div>
                <div className="favories-content">
                  <ul>
                    <Link to="./user" style={{ textDecoration: "none" }}>
                      <li>Account information</li>
                    </Link>
                    <li className="active">Favorites list</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="favories-right">
                <h3>Danh sách yêu thích</h3>
                <div className="row favories-right-cards">
                  {// courseFavories.map((course, index) => {
                    //   return (
                    //     <div className="col-md-3" key={index}>
                    //       <FavoriesItem course={course} />
                    //     </div>
                    //   )
                    // })
                    this.showCourseFavories()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    courseFavories: state.courseFavories
  };
};

export default connect(mapStateToProps)(Favories);
