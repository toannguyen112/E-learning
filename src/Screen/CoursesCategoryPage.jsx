import React, { Component } from "react";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Footer__inst from "../Component/footer__inst/Footer__inst";

import { connect } from "react-redux";
import Category from "../Component/Category/Category";
import CourseService from "../Services/courseService";
const courseService = new CourseService();

class CoursesCategoryPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: [],
            tenDanhMuc: ''
        };
    }

    setId = (id) => {
        this.setState({
            tenDanhMuc: id
        })
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.setId(id)
        courseService
            .fetchCourseOnCatalog(id)
            .then((res) => {
                this.setState({
                    courses: res.data,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    render() {
        return (
            <div>
                <Header history={this.props.history} />
                <Category courses={this.state.courses} tenDanhMuc={this.state.tenDanhMuc} />
                <Footer__inst />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(CoursesCategoryPage);
