import React, { Component } from 'react'
import Header from '../Component/Header/Header';
import Pucharse from '../Component/Pucharse/Pucharse';
import Footer from '../Component/Footer/Footer';
class PucharseHistoryPage extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header history={this.props.history} />
                <Pucharse />
                {/* <Footer/> */}

            </div>
        )
    }
}
export default PucharseHistoryPage
