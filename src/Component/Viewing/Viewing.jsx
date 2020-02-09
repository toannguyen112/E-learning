import React, { Component } from "react";
import Viewingitem from "./Vewingitem";
import { connect } from "react-redux";

class Viewing extends Component {

  showViewItem = (course) => {
    let res = []
    if (course && course.length > 0) {
      for (let i = 0; i < 4; i++) {
        res.push(<Viewingitem course={course[i]} key={i} />)
      }
    }

    return res;
  }
  render() {
    let { course } = this.props

    return (
      <div className="viewing">
        <div className=" container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0">
             
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0">
              <div className="product__items">
                {this.showViewItem(course)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  course: state.Course.course
})




export default connect(mapStateToProps)(Viewing)


