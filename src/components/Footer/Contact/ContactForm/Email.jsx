import React, { Component } from "react";

class Email extends Component {
  render() {
    return (
      <div className="input-group pr-5">
        <input
          className="form-control  text-white"
          name="email"
          type="email"
          value={this.props.email}
          onChange={this.props.onChange}
          placeholder="Email"
        />
      </div>
    );
  }
}

export default Email;
