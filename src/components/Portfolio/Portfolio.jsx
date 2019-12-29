import React, { Component } from "react";
import Title from "./Portfolio/Title";
import Block from "./Portfolio/Block";

class Portfolio extends Component {
  render() {
    return (
      <section className="container-fluid p-0 " id="portfolio">
        <div className="portfolio text-center">
          <Title component={Title} />
          <Block component={Block} />
        </div>
      </section>
    );
  }
}

export default Portfolio;
