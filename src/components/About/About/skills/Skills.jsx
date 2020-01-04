import React, { Component } from "react";
import Lang from "./lang/Lang";
import Design from "./design/Design";

class Skills extends Component {
  render() {
    return (
      <section className="p-3 p-lg-5 d-flex align-items-center">
        <div className="w-100">
          <div className="row">
            <div className="col-md-6" style={{ paddingBottom: "1vmin" }}>
              <Lang component={Lang} />
            </div>
            <div className="col-md-6">
              <Design component={Design} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
