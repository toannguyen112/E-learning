import React, { Component } from "react";
import { SEARCH_COURSES } from "../../Store/Action/type";
import SearchItem from "./SearchItem";
import { connect } from "react-redux";
class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: this.props.searchKeyword
    };
  }

  showSearchIem = (courses, searchKeyword) => {
    let res = null;
    if (courses.length > 0) {
      if (searchKeyword > 0 && searchKeyword.length !== "") {
        courses = courses.filter(
          course =>
            course.tenKhoaHoc
              .toLowerCase()
              .indexOf(searchKeyword.toLowerCase().trim()) !== -1
        );

        res = courses.map((course, index) => {
          return <SearchItem course={course} key={index} />;
        });
      }
    }
    return res;
  };

  onChange = e => {
    this.setState(
      {
        keyword: e.target.value
      },
      () => {
        this.props.handleSearch(this.state.keyword);
      }
    );
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.handleSearch(this.state.keyword);
    this.props.history.push("/courses");
  };

  render() {
    let { courses } = this.props;
    let { searchKeyword } = this.props;
    console.log(searchKeyword);

    return (
      <div className="header-control search">
        <form onSubmit={this.onSubmit} className="d-flex">
          <input
            name="search"
            onChange={this.onChange}
            value={this.state.keyword}
            className="search__input"
            type="text"
            placeholder="Type Keyword"
            autoComplete="off"
          />
          <div className="search__result">
            <div className="search__form">
              {this.showSearchIem(courses, searchKeyword)}
            </div>
          </div>
          <button type="submit" className="btn-search">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  courses: state.Course.course
});

const mapDispatchToProps = dispatch => {
  return {
    handleSearch: keyword => {
      dispatch({
        type: SEARCH_COURSES,
        payload: keyword
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
