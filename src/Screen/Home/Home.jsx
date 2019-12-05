import React, { Component } from 'react'
import '../../OwlCarousel2-2.3.4/dist/assets/owl.carousel.css'
import '../../OwlCarousel2-2.3.4/dist/assets/owl.theme.default.css'
import Slider from "react-slick";
import Header from './Header';
import Banner from './Banner';
import Promotion from './Promotion';
import TopSelling from './TopSelling';
import Featured from './Featured';
import Intro from './Intro';
import Footer from './Footer';
import ScrollUpButton from "react-scroll-up-button";
import Slide from 'react-reveal/Slide';
export default class Home extends Component {
    render() {



        return (
            <div className="wrapper">
              <Slide bottom>
                    {/* header  */}
                    <Header />
    
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
                    {/* footer */}
                    <Footer />
                    {/*ScrollUpButton  */}
              </Slide>
                <ScrollUpButton style={{ width: 75 }} ToggledStyle={{ right: 100 }} />


            </div>

        )
    }
}
