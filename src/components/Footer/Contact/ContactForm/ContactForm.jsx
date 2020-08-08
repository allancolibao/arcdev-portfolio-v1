import React, { Component } from "react";
import emailjs from 'emailjs-com';
import { withAlert } from "react-alert";
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

  handleSubmit = event => {
    const templateId = process.env.REACT_APP_TEMPLATE_ID;

    this.sendFeedback(templateId, {
      message_html: this.state.message,
      from_name: this.state.name,
      reply_to: this.state.email
    });
    event.preventDefault();
    event.target.reset();
    this.setState({
      name: "",
      email: "",
      message: ""
    });
  };

  sendFeedback(templateId, variables) {
    const alert = this.props.alert;
    const serviceId =  process.env.REACT_APP_SERVICE_ID;
    const userId = process.env.REACT_APP_USER_ID;

    emailjs.send(serviceId, templateId, variables, userId)
      .then(res => {
        alert.success("Message successfully sent, Thank you");
        console.log("Message successfully sent, Thank you");
      })
      // Handle errors
      .catch(err => {
        console.error(
          "Failed. Here some thoughts on the error that occured:",
          err
        );
        alert.error("Sending message failed, Please try again");
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-inline">
        <div className="col pl-0">
          <Name value={this.state.name} onChange={this.handleChange} />
          <Email value={this.state.email} onChange={this.handleChange} />
          <Message value={this.state.message} onChange={this.handleChange} />
          <Btn />
        </div>
      </form>
    );
  }
}

export default withAlert()(ContactForm);
