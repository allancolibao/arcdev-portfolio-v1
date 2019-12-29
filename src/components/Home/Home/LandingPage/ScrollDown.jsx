import React, { Component } from "react";

class ScrollDown extends Component {
  render() {
    return (
      <button className="btn scroll-down">
        <a href="#about">
          <i className="fa fa-angle-down fa-3x"></i>
        </a>
      </button>
    );
  }
}

export default ScrollDown;
