import React, { Component } from 'react'
import Header from '../Component/Header/Header'
import Message from '../Component/Message/Message'
import Footer from '../Component/Footer/Footer'
import Loader from "../Component/Loader/Loader";
export default class messagePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false,
            });
        }, 2000);
    }
    render() {
        return (
            <div className="warpper" >
                <Header history={this.props.history} />
              
                {this.state.loading ? (
                    <Loader />
                ) : (
                    <Message />
                    )}
                <Footer />
            </div>
        )
    }
}
