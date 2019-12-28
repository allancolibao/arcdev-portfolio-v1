import React, { Component } from "react";
import ContactTitle from "./ContactTitle";
import ContactParagraph from "./ContactParagraph";
import ContactForm from "./ContactForm";

class Contact extends Component {
    render() {
        return (
            <div className="col-md-5 col-sm-12 contactform">
                <ContactTitle component="ContactTitle" />
                <ContactParagraph component="ContactParagraph" />
                <ContactForm component="ContactForm" />
            </div>
        );
    }
}

export default Contact;
