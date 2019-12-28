import React, { Component } from "react";
import Iam from "./Iam";
import Name from "./Name";
import FrontPageDesc from "./FrontPageDesc";
import HireBtn from "./HireBtn";

class FrontPage extends Component {
    render() {
        return (
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-7 col-sm-12 text-white fade-in">
                        <Iam component={Iam} />
                        <Name component={Name} />
                        <FrontPageDesc component={FrontPageDesc} />
                        <HireBtn component={HireBtn} />
                    </div>
                </div>
            </div>
        );
    }
}

export default FrontPage;
