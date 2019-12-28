import React, { Component } from "react";
import NavLi from "./NavLi";

class NavList extends Component {
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
                    description: "Sample Work",
                    href: "#samplework",
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
                        <NavLi key={list.id} list={list}></NavLi>
                    ))}
                </ul>
            </div>
        );
    }
}

export default NavList;
