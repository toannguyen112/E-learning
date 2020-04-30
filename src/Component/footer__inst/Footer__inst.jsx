import React, { Component } from 'react'

export default class Footer__inst extends Component {
    render() {
        return (
            <div className="footer__inst-banner">
            <div className=" footer__inst-banner__content  container">
                 <div className="footer__img">
                     <img src="https://img-a.udemycdn.com/teaching/teach-footer.png" alt="" />
                 </div>
                 <div className="footer__text">
                     <p className=" text text-bold">

                         Teach the world online
                     </p>
                     <p className=" text text-normal">

                         Create an online video course, reach students across the globe, and earn money
                     </p>
                 </div>
                 <div className="wrapper__btn">
                     <button className="button__teach">
                         Teach on Udemy
                     </button>
                 </div>
            </div>
         </div>
        )
    }
}
