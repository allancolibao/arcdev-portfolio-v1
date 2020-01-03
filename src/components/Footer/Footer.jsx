import React, { Component } from "react";
import Contact from "./Contact/Contact";
import Info from "./Info/Info";
import Socials from "./SocialMedia/Socials";
import End from "./End/End";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="contact">
          <footer>
            <div className="container-fluid p-0">
              <div className="row text-left">
                <Info component={Info} />
                <Contact component={Contact} />
                <Socials component={Socials} />
              </div>
              <End component={End} />
            </div>
          </footer>
        </section>
      </React.Fragment>
    );
  }
}

export default Footer;
