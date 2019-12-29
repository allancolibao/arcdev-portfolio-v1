import React, { Component } from "react";
import LanguagesToolsHeading from "./LanguagesToolsHeading";
import LanguagesToolsList from "./LanguagesToolsList";

class LanguagesTools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progtools: [
        {
          id: 1,
          langTools: "HTML 5",
          valueNow: "75",
          percent: { width: "75%" }
        },
        {
          id: 2,
          langTools: "CSS 3",
          valueNow: "70",
          percent: { width: "70%" }
        },
        {
          id: 3,
          langTools: "Bootstrap 4",
          valueNow: "75",
          percent: { width: "75%" }
        },
        {
          id: 4,
          langTools: "Laravel",
          valueNow: "80",
          percent: { width: "80%" }
        },
        {
          id: 5,
          langTools: "React Js",
          valueNow: "65",
          percent: { width: "65%" }
        },
        {
          id: 6,
          langTools: "MySQL",
          valueNow: "75",
          percent: { width: "75%" }
        },
        {
          id: 7,
          langTools: "Sqlite",
          valueNow: "70",
          percent: { width: "70%" }
        }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <LanguagesToolsHeading />
        <ul className="fa-ul mb-0">
          {this.state.progtools.map(progtools => (
            <LanguagesToolsList key={progtools.id} progtools={progtools} />
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default LanguagesTools;
