import React from "react";
import AboutTitle from "./About/AboutTitle";
import AboutParagraph from "./About/AboutParagraph";

class About extends React.Component {
    render() {
        return (
            <section className="about" id="about">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-12 col-12">
                            <div className="panel text-left">
                                <AboutTitle component={AboutTitle} />
                                <AboutParagraph component={AboutParagraph} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
