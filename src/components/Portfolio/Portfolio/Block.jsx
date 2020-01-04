import React, { Component } from "react";
import List from "./List";

class Block extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          imgUrl: "./asset/Mailer_150ppi.jpg",
          description: "Mailer Tech Web Design",
          href: "#"
        },
        {
          id: 2,
          imgUrl: "./asset/Boosting Content Infographics.jpg",
          description: "Content Quality",
          href: "#"
        },
        {
          id: 3,
          imgUrl: "./asset/How To Receive a Fair Salary.jpg",
          description: "Fair Salary",
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
