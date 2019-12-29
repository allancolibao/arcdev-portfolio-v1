import React, { Component } from "react";

class Btn extends Component {
    render() {
        return (
            <input
                type="submit"
                className="btn btn-contact px-5 py-2 primary-btn"
                value="Send"
            />
        );
    }
}

export default Btn;
