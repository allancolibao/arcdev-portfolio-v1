import React, { Component } from "react";

class Message extends Component {
  render() {
    return (
      <div className="input-group pr-5">
        <textarea
          className="form-control text-grey txt-area"
          rows="8"
          name="message"
          value={this.props.message}
          onChange={this.props.onChange}
          placeholder="Message"
          required
        />
      </div>
    );
  }
}

export default Message;
