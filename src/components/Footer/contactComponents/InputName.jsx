import React, { Component } from "react";

class InputName extends Component {
  render() {
    return (
      <div className="input-group pr-5">
        <input
          className="form-control  text-white"
          name="name"
          type="text"
          value={this.props.name}
          onChange={this.props.onChange}
          placeholder="Name"
        />
      </div>
    );
  }
}

export default InputName;
