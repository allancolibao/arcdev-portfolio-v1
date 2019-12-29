import React, { Component } from "react";
import Icon from "./Icon";

class Media extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socials: [
        {
          id: 1,
          href: "https://www.facebook.com/allancolibao",
          className: "fa fa-facebook-f"
        },
        {
          id: 2,
          href: "https://www.instagram.com/allancolibao",
          className: "fa fa-instagram"
        },
        {
          id: 3,
          href: "https://twitter.com/allancolibao",
          className: "fa fa-twitter"
        },
        {
          id: 4,
          href:
            "https://www.youtube.com/channel/UC5_OnYjDnudoRCSPVCvnalw?view_as=subscriber",
          className: "fa fa-youtube-play"
        }
      ]
    };
  }
  render() {
    return (
      <div className="column text-light">
        {this.state.socials.map(socials => (
          <Icon key={socials.id} socials={socials}></Icon>
        ))}
      </div>
    );
  }
}

export default Media;
