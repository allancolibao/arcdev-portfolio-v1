import React from "react";
import Title from "./About/Title";
import Img from "./About/Img";
import Desc from "./About/Desc";
import Skills from "./About/skills/Skills";

class About extends React.Component {
  render() {
    return (
      <section className="about" id="about">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12">
              <div className="panel text-left">
                <Title component={Title} />
                <div className="col-md-12 center">
                  <Img component={Img} />
                </div>
                <Desc component={Desc} />
                <Skills component={Skills} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
