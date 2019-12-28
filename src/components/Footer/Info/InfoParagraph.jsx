import React, { Component } from "react";

class InfoParagraph extends Component {
    render() {
        const { content, className } = this.props.info;
        return (
            <p className="text-muted">
                <i className={className}>&nbsp;&nbsp;</i>
                {content}
            </p>
        );
    }
}

export default InfoParagraph;
