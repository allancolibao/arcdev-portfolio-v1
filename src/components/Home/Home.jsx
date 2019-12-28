import React from "react";
import NavBar from "./Home/NavBar/NavBar";
import FrontPage from "./Home/FrontPage/FrontPage";

class Home extends React.Component {
    render() {
        return (
            <header>
                <NavBar component={NavBar} />
                <FrontPage component={FrontPage} />
            </header>
        );
    }
}

export default Home;
