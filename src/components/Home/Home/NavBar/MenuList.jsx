import React, { Component } from "react";
import Scrollspy from "react-scrollspy";

class MenuList extends Component {
  render() {
    return (
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="mr-auto"></div>
        <Scrollspy
          className="navbar-nav"
          items={["home", "about", "portfolio", "contact"]}
          currentClassName="active"
        >
          <li className="nav-item">
            <a className="nav-link" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </Scrollspy>
      </div>
    );
  }
}

export default MenuList;
