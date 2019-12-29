import React, { Component } from "react";
import Title from "./Title";
import Desc from "./Desc";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [
        {
          id: 1,
          content: "Manila, Philippines",
          className: "fa fa-map-pin"
        },
        {
          id: 2,
          content: "colibaoallanreyes@gmail.com",
          className: "fa fa-envelope"
        },
        {
          id: 3,
          content: "09667981133",
          className: "fa fa-phone-square"
        }
      ]
    };
  }
  render() {
    return (
      <div className="info col-md-4 col-sm-5">
        <Title component={Title} />

        {this.state.info.map(info => (
          <Desc key={info.id} info={info}></Desc>
        ))}
      </div>
    );
  }
}

export default Info;
