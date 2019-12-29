import React, { Component } from "react";
import DesignToolsHeading from "./DesignToolsHeading";
import DesignToolsList from "./DesignToolsList";

class DesignTools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destools: [
        {
          id: 1,
          desTools: "Adobe Photoshop",
          valueNow: "90",
          percent: { width: "90%" }
        },
        {
          id: 2,
          desTools: "Adobe Illustrator",
          valueNow: "85",
          percent: { width: "85%" }
        },
        {
          id: 3,
          desTools: "Adobe Lightroom",
          valueNow: "80",
          percent: { width: "80%" }
        },
        {
          id: 4,
          desTools: "Adobe After Effects",
          valueNow: "80",
          percent: { width: "80%" }
        },
        {
          id: 5,
          desTools: "Adobe Premiere Pro",
          valueNow: "85",
          percent: { width: "85%" }
        }
      ]
    };
  }
  render() {
    return (
      <React.Fragment>
        <DesignToolsHeading />
        <ul className="fa-ul mb-0">
          {this.state.destools.map(destools => (
            <DesignToolsList key={destools.id} destools={destools} />
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default DesignTools;
