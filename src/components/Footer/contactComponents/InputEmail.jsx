import React, { Component } from "react";

class InputEmail extends Component {
    render() {
        return (
            <div className="input-group pr-5">
                <input
                    className="form-control bg-dark text-white"
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

export default InputEmail;
