import React, { Component } from "react";

class List extends Component {
  render() {
    const { langTools, valueNow, percent } = this.props.progtools;
    return (
      <React.Fragment>
        <li>
          {langTools}
          <div className="progress m-2">
            <div
              className="progress-bar"
              style={percent}
              role="progressbar"
              aria-valuenow={valueNow}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </li>
      </React.Fragment>
    );
  }
}

export default List;
