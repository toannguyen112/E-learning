import React, { Component } from "react";

import Topsellingitem from "./Topsellingitem";


export default class TopSelling extends Component {
  
  render() {
    let {courseList} = this.props
    return (
      <section className="TopSelling">
        <div className="TopSelling__content  ">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <h3 className="title">Top Selling</h3>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 viewing__content">
              <div className="product__items">
                  {this.showViewingItem(courseList)}

              </div>
            </div>
            
          </div>
        </div>
      </section>
    );
  }

  showViewingItem =(courseList)=>{
    let result = [];
    if(courseList && courseList.length > 0){
      for(let i = 0 ;i < 5 ; i++){
        result.push(<Topsellingitem key={i} course={courseList[i]} />)
      }
    }

    return result;

  }
}
