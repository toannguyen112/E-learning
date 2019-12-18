import React, { Component } from 'react'

export default class PromotionCard extends Component {
    render() {
        return (
            <div className="card">
            <span className="sale">70%</span>
            <img className="card-img-top" src="https://d1nzpkv5wwh1xf.cloudfront.net/320/k-5cac6776ce4b14365029fdae/20190502-duhq042504/du.jpg" alt="" />
            <div className="card-body">
                <div className="new-tag">Mới</div>
                <h6 className="card-title">BẢN ĐỒ ĐỘT PHÁ KINH DOANH ONLINE 2019</h6>
                <div className="card-descripton-teacher">
                    <img className="img-fluid" src="https://d303ny97lru840.cloudfront.net/kelley-57b67d6e60af25054a055b1d/20160901-/images.jpg" alt="" />
                    <span>Hán Quang Dự</span>
                </div>
                <div className="card-pirce">
                    <span className="price-old">1.999.000 ₫</span>
                    <span className="price-new">599.000 ₫</span>
                </div>
            </div>
        </div>
        )
    }
}
