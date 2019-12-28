import React, { Component } from "react";

class Social extends Component {
    render() {
        const { href, className } = this.props.socials;
        return (
            <a href={href}>
                <i className={className}></i>
            </a>
        );
    }
}

export default Social;
