import React, { Component } from "react";
import LanguagesTools from "./LanguagesTools";
import DesignTools from "./DesignTools";

class Skills extends Component {
  render() {
    return (
      <section className="p-3 p-lg-5 d-flex align-items-center">
        <div className="w-100">
          <div className="row">
            <div className="col-md-6">
              <LanguagesTools component={LanguagesTools} />
            </div>
            <div className="col-md-6">
              <DesignTools component={DesignTools} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
