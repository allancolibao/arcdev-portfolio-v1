import React, { Component } from "react";

class Service extends Component {
    render() {
        const { href, imgUrl, description } = this.props.service;
        return (
            <a href={href}>
                <div className="card card-service">
                    <img className="card-img-top" src={imgUrl} alt=""></img>
                    <div className="card-body">
                        <h5 className="card-text">{description}</h5>
                    </div>
                </div>
            </a>
        );
    }
}

export default Service;
