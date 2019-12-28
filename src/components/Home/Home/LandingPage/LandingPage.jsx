import React, { Component } from "react";
import Head from "./Head";
import Name from "./Name";
import Desc from "./Desc";

class LandingPage extends Component {
    render() {
        return (
            <div className="container text-center">
                <div className="row">
                    <div className="landing-page col-md-12 text-white fade-in">
                        <Head component={Head} />
                        <Name component={Name} />
                        <Desc component={Desc} />
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;
