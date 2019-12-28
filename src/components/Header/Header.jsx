import React from "react";
import NavBar from "./Header/NavBar/NavBar";
import FrontPage from "./Header/FrontPage/FrontPage";

class Head extends React.Component {
    render() {
        return (
            <header>
                <NavBar component={NavBar} />
                <FrontPage component={FrontPage} />
            </header>
        );
    }
}

export default Head;
