import React, { Component } from "react";
import Brand from "./Brand";
import Toggler from "./Toggler";
import MenuList from "./MenuList";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <Brand component={Brand} />
        <Toggler component={Toggler} />
        <MenuList component={MenuList} />
      </nav>
    );
  }
}

export default Navigation;
