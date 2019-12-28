import React, { Component } from "react";
import Brand from "./Brand";
import Toggler from "./Toggler";
import NavList from "./NavList";

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <Brand component={Brand} />
                <Toggler component={Toggler} />
                <NavList component={NavList} />
            </nav>
        );
    }
}

export default Navigation;
