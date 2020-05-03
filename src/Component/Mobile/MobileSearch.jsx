import React, { Component } from "react";

export default class MobileSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: this.props.searchKeyword,
        };
    }

    onChange = (e) => {
        console.log(e.target.value);

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
        let { closeSearchMobile } = this.props;


        return (
            <div className="search__mobolle__show__onClick">
                <form onSubmit={this.onSubmit} className="search__left">
                    <i className="fa fa-search  searchMoblie "></i>
                    <input
                        name="searchMobile"
                        onChange={this.onChange}
                        value={this.state.keyword}
                        className="inputSearchMoblie"
                        type="text"
                        placeholder="Search for anything"
                    />
                </form>
                <div className="search__close">
                    <i className="fa fa-close" onClick={() => closeSearchMobile()}></i>
                </div>
            </div>
        );
    }
}
