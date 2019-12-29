import React, { Component } from "react";
import ServicesTitle from "./Service/ServicesTitle";
import ServiceBlock from "./Service/ServiceBlock";

class Services extends Component {
  render() {
    return (
      <section className="container-fluid p-0 " id="portfolio">
        <div className="portfolio text-center">
          <ServicesTitle component={ServicesTitle} />
          <ServiceBlock component={ServiceBlock} />
        </div>
      </section>
    );
  }
}

export default Services;
