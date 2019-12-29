import React, { Component } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Home component={Home} />

                <About component={About} />

                <Portfolio component={Portfolio} />

                <Footer component={Footer} />
            </React.Fragment>
        );
    }
}

export default App;