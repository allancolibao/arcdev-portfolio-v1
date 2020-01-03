import React, { Component } from "react";

class Email extends Component {
  render() {
    return (
      <div className="input-group pr-5">
        <input
          className="form-control  text-grey"
          name="email"
          type="email"
          value={this.props.email}
          onChange={this.props.onChange}
          placeholder="Email"
          required
        />
      </div>
    );
  }
}

export default Email;
