import React, { Component } from "react";

class Hotline extends Component {
    render() {
        return (
            <div>
                <div className="phonering-alo-phone phonering-alo-green phonering-alo-show" id="phonering-alo-phoneIcon" style={{ left: '-50px', bottom: 150, position: 'fixed' }}>
                    <div className="phonering-alo-ph-circle" />
                    <div className="phonering-alo-ph-circle-fill" />
                   
                    <div className="phonering-alo-ph-img-circle">
                       
                        <a href="tel:+84123456789" className="pps-btn-img " title="Liên hệ">
                            <img src="https://i.imgur.com/v8TniL3.png" alt="Liên hệ" width={50}  />
                        </a>
                    </div>
                </div>
                <a href="tel:+84123456789">
                    <span style={{ left: 90, bottom: 30, position: 'fixed', backgroundColor: 'rgb(236, 59, 62)', color: 'yellow', padding: '5px 10px', borderRadius: 5, fontSize: 15, zIndex: 10000 }}><strong>0775600351</strong></span></a>
            </div>

        );
    }
}
export default Hotline;
