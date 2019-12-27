import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BannerItem extends Component {
    render() {
        let { item } = this.props
        return (
            <li>
                <Link to="/courses">
                   
                   <i className="fa fa-plus" aria-hidden="true" />

                    {item.tenDanhMuc}
                </Link>
            </li>
        )
    }
}
