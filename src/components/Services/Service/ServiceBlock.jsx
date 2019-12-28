import React, { Component } from "react";
import Service from "./Service";

class ServicesBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            service: [
                {
                    id: 1,
                    imgUrl: "./asset/cover.jpg",
                    description: "Photography",
                    href: "#"
                },
                {
                    id: 2,
                    imgUrl: "./asset/cover_1.jpg",
                    description: "Video Editing",
                    href: "#"
                },
                {
                    id: 3,
                    imgUrl: "./asset/cover_2.jpg",
                    description: "Web Design",
                    href: "#"
                }
            ]
        };
    }

    render() {
        return (
            <div className="cards">
                <div className="d-flex flex-row justify-content-center flex-wrap">
                    {this.state.service.map(service => (
                        <Service key={service.id} service={service}></Service>
                    ))}
                </div>
            </div>
        );
    }
}

export default ServicesBlock;
