import React from "react";
import NavBar from "./Home/NavBar/NavBar";
import LandingPage from "./Home/LandingPage/LandingPage";

class Home extends React.Component {
    render() {
        return (
            <header>
                <NavBar component={NavBar} />
                <LandingPage component={LandingPage} />
            </header>
        );
    }
}

export default Home;
