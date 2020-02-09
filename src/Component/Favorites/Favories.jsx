import React, { Component } from "react";
import FavoriesItem from "./FavoriesItem";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { DELETE_COURSE_FAVORIES, ADD_TO_CART } from "../../Store/Action/type";

class Favories extends Component {
  showCourseFavories = () => {
    let { courseFavories } = this.props;
    if (courseFavories.length > 0) {
      return courseFavories.map((course, index) => {
        return (
          <div className="col-md-3" key={index}>
            <FavoriesItem
              course={course}
              deleteCoureseFavorites={this.props.deleteCoureseFavorites}
              addToCart={this.props.addToCart}
              history={this.props.history}
            />
          </div>
        );
      });
    } else {
      return (
        <div className="favories-alert">
          <div>
            <h3>You do not have any courses in your favorite list!</h3>
            <p>
              <span>Discover thousands of courses on Edumall</span>
            </p>
          </div>
        </div>
      );
    }
  };
  render() {
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

                    <li className="active">Favorites list</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="favories-right">
                <h3>Favorites list</h3>
                <div className="row favories-right-cards">
                  {this.showCourseFavories()}
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

const mapDispatchToProps = dispatch => {
  return {
    deleteCoureseFavorites: course => {
      dispatch({
        type: DELETE_COURSE_FAVORIES,
        payload: course
      });
    },

    addToCart: course => {
      dispatch({
        type: ADD_TO_CART,
        payload: course
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favories);
