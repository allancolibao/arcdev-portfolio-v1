import React, { Component } from "react";
import Name from "./Name";
import Email from "./Email";
import Message from "./Message";
import Btn from "./Btn";

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === "text" ? target.value : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert(this.state.name + this.state.email + this.state.message);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-inline">
                <div className="col pl-0">
                    <Name
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <Email
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <Message
                        value={this.state.message}
                        onChange={this.handleChange}
                    />
                    <Btn />
                </div>
            </form>
        );
    }
}

export default ContactForm;
