import React, { Component } from "react";

class Menu extends Component {
  render() {
    const { href, description, className } = this.props.list;

    return (
      <React.Fragment>
        <li className={className}>
          <a href={href} className="nav-link">
            {description}
          </a>
        </li>
      </React.Fragment>
    );
  }
}

export default Menu;
