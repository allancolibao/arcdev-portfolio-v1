import React, { Component } from "react";

class Icon extends Component {
  render() {
    const { href, className } = this.props.socials;
    return (
      <a href={href} target="blank">
        <i className={className}></i>
      </a>
    );
  }
}

export default Icon;
