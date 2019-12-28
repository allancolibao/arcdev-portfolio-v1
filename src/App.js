import React, { Component } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Home component={Home} />

                <About component={About} />

                <Services component={Services} />

                <Footer component={Footer} />
            </React.Fragment>
        );
    }
}

export default App;