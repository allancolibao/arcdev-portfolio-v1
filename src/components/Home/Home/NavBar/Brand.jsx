import React, { Component } from "react";

class Brand extends Component {
  render() {
    return (
      <a className="navbar-brand" href="/">
        <img
          style={{ width: "23%", padding: "auto", margin: "auto" }}
          src="./logo.png"
          alt=""
        />
      </a>
    );
  }
}

export default Brand;
