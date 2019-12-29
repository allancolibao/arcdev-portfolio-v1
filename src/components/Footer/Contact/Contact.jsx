import React, { Component } from "react";
import Title from "./Title";
import Desc from "./Desc";
import ContactForm from "./ContactForm/ContactForm";

class Contact extends Component {
    render() {
        return (
            <div className="col-md-5 col-sm-12 contactform">
                <Title component="Title" />
                <Desc component="Desc" />
                <ContactForm component="ContactForm" />
            </div>
        );
    }
}

export default Contact;
