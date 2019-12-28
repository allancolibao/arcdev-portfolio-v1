import React, { Component } from "react";
import Navigation from "./Nav";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollingLock: false
        };
        // Bind object
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        if (window.scrollY > 750) {
            this.setState({
                scrollingLock: true
            });
        } else if (window.scrollY < 750) {
            this.setState({
                scrollingLock: false
            });
        }
    }
    render() {
        return (
            <div
                className={
                    this.state.scrollingLock
                        ? "container-fluid sticky"
                        : "container-fluid fadeInDown"
                }
            >
                <Navigation component={Navigation} />
            </div>
        );
    }
}

export default NavBar;
