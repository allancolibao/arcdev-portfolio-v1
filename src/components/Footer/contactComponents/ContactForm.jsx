import React, { Component } from "react";
import InputName from "./InputName";
import InputEmail from "./InputEmail";
import InputMessage from "./InputMessage";
import SubmitBtn from "./SubmitBtn";

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
                    <InputName
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <InputEmail
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <InputMessage
                        value={this.state.message}
                        onChange={this.handleChange}
                    />
                    <SubmitBtn />
                </div>
            </form>
        );
    }
}

export default ContactForm;
