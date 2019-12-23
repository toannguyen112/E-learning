import React, { Component } from 'react'

export default class BannerItem extends Component {
    render() {
        let { item } = this.props
        return (
            <li>
                <a href="https://www.facebook.com/">
                    {" "}
                    <i
                        className="fa fa-commenting-o"
                        aria-hidden="true"
                    />
                    {item.tenDanhMuc}
                </a>
            </li>
        )
    }
}
