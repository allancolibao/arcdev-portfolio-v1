import React, { Component } from "react";

class List extends Component {
  render() {
    const { desTools, valueNow, percent } = this.props.destools;
    return (
      <React.Fragment>
        <li>
          {desTools}
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
