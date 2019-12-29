import React, { Component } from "react";

class Toggler extends Component {
  render() {
    return (
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fa fa-bars text-light"></i>
      </button>
    );
  }
}

export default Toggler;
