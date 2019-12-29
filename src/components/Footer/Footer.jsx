import React, { Component } from "react";
import Contact from "./contactComponents/Contact";
import Info from "./Info/Info";
import Socials from "./socialMediaComponents/Socials";
import CopyRight from "./CopyRight/CopyRight";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer id="contact">
          <div className="container-fluid p-0">
            <div className="row text-left">
              <Info component={Info} />
              <Contact component={Contact} />
              <Socials component={Socials} />
            </div>
            <CopyRight component={CopyRight} />
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
