import React, { Component } from 'react'
import Header from '../Component/Header/Header';
import Pucharse from '../Component/Pucharse/Pucharse';
import Footer from '../Component/Footer/Footer';
import Loader from "../Component/Loader/Loader";
class PucharseHistoryPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false
            });
        }, 2000);
    }
    render() {
        return (
            <div className="wrapper">
                <Header history={this.props.history} />
                {this.state.loading ? <Loader /> :
                    <>
                        <Pucharse />
                        <Footer />
                    </>}


            </div>
        )
    }
}
export default PucharseHistoryPage
