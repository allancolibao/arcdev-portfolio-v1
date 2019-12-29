import React, { Component } from "react";
import List from "./List";

class Block extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
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
                    {this.state.list.map(list => (
                        <List key={list.id} list={list}></List>
                    ))}
                </div>
            </div>
        );
    }
}

export default Block;
