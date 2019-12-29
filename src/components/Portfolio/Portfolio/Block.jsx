import React, { Component } from "react";
import List from "./List";

class Block extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          imgUrl: "./asset/Boosting Content Infographics.jpg",
          description: "Website 1",
          href: "#"
        },
        {
          id: 2,
          imgUrl: "./asset/Boosting Content Infographics.jpg",
          description: "Website 2",
          href: "#"
        },
        {
          id: 3,
          imgUrl: "./asset/Boosting Content Infographics.jpg",
          description: "Website 3",
          href: "#"
        }
      ]
    };
  }

  render() {
    return (
      <div className="cards">
        <div className="d-flex flex-row justify-content-center flex-wrap">
          {this.state.list.map(list => (
            <List key={list.id} list={list}></List>
          ))}
        </div>
      </div>
    );
  }
}

export default Block;
