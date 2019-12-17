import React, { Component } from 'react'
// import '../../OwlCarousel2-2.3.4/dist/assets/owl.carousel.css'
// import '../../OwlCarousel2-2.3.4/dist/assets/owl.theme.default.css'


import Countdown from '../Component/Countdown/Countdown';
import Header from '../Component/Header/Header';
import Banner from '../Component/Banner/Banner';
import Promotion from '../Component/Promotion/Promotion';
import TopSelling from '../Component/Topselling/TopSelling';
import Featured from '../Component/Featured/Featured';
import Intro from '../Component/Intro/Intro';
import Footer from '../Component/Footer/Footer';
// import ScrollUpButton from "react-scroll-up-button";

export default class HomePage extends Component {
    render() {



        return (
            <div className="wrapper">
            
                    {/* header  */}
                    <Header/>
    
                    {/* banner */}
                    <Banner /> 
    
                    {/* promotion */}
    
                    <Promotion />
    
                    {/* top selling */}
                    <TopSelling />
                    {/* featured */}
                    <Featured />
                    {/* intro */}
                    <Intro />
                    <Countdown/>
                    {/* footer */}
                    <Footer />
                    {/*ScrollUpButton  */}
              
                {/* <ScrollUpButton style={{ width: 75 }} ToggledStyle={{ right: 100 }} /> */}


            </div>

        )
    }
}
