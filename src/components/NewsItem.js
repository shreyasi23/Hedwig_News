import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, newsUrl } = this.props;
        return (
            <div className="card" style={{ width: "24rem" }}>
                <img src= {imgUrl} className="card-img-top" alt='' />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href= {newsUrl} target = "_blank" rel="noreferrer" className="btn btn-sm My_btn_style">Read more</a>
                </div>
            </div>
        )
    }
}

