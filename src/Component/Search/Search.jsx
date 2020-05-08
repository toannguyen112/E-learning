import React, { Component } from "react";
import SearchItem from "./SearchItem";
class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: this.props.searchKeyword,
    };
  }

  showSearchIem = (courses, searchKeyword) => {
    let res = null;
    if (searchKeyword.length > 0 && searchKeyword.length !== "") {
      courses = courses.filter(
        (course) =>
          course.tenKhoaHoc
            .toLowerCase()
            .indexOf(searchKeyword.toLowerCase().trim()) !== -1
      );

      res = courses.map((course, index) => {
        return <SearchItem course={course} key={index} />;
      });
    }
    return res;
  };

  onChange = (e) => {
    this.setState(
      {
        keyword: e.target.value,
      },
      () => {
        this.props.handleSearch(this.state.keyword);
      }
    );
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.keyword);
    this.props.history.push("/courses");
  };

  render() {
    let { courses } = this.props;
    let { searchKeyword } = this.props.display;

    return (
      <div className="header-control search nav-item ">
        <form onSubmit={this.onSubmit} className="form d-flex">
          <input
            name="search"
            onChange={this.onChange}
            value={this.state.keyword}
            className="search__input"
            type="text"
            placeholder="Search for anything"
            autoComplete="off"
          />
          <div
            className={
              this.state.keyword.length > 0
                ? "search__result"
                : "search__result hiddenForm"
            }
          >
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

export default Search;
