import React, { Component } from "react";
import Menu from "./Menu";

class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          description: "Home",
          href: "#",
          className: "nav-item"
        },
        {
          id: 2,
          description: "About",
          href: "#about",
          className: "nav-item"
        },
        {
          id: 3,
          description: "Portfolio",
          href: "#portfolio",
          className: "nav-item"
        },
        {
          id: 4,
          description: "Contact",
          href: "#contact",
          className: "nav-item"
        }
      ]
    };
  }
  render() {
    return (
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="mr-auto"></div>
        <ul className="navbar-nav">
          {this.state.list.map(list => (
            <Menu key={list.id} list={list}></Menu>
          ))}
        </ul>
      </div>
    );
  }
}

export default MenuList;
