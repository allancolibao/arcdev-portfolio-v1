import React, { Component } from "react";
import InfoTitle from "./InfoTitle";
import InfoParagraph from "./InfoParagraph";

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
        <InfoTitle component={InfoTitle} />

        {this.state.info.map(info => (
          <InfoParagraph key={info.id} info={info}></InfoParagraph>
        ))}
      </div>
    );
  }
}

export default Info;
