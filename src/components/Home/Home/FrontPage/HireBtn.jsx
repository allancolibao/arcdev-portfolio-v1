import React, { Component } from "react";

class HireBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "#"
        };
    }
    render() {
        return (
            <a href={this.state.url}>
                <button className="btn btn-light px-5 py-2 primary-btn headerbtn">
                    Hire me
                </button>
            </a>
        );
    }
}

export default HireBtn;
