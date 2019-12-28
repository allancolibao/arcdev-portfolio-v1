import React, { Component } from "react";
import Social from "./Social";

class SocialMedia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            socials: [
                {
                    id: 1,
                    href: "#",
                    className: "fa fa-facebook-f"
                },
                {
                    id: 2,
                    href: "#",
                    className: "fa fa-instagram"
                },
                {
                    id: 3,
                    href: "#",
                    className: "fa fa-youtube-play"
                },
                {
                    id: 4,
                    href: "#",
                    className: "fa fa-github"
                }
            ]
        };
    }
    render() {
        return (
            <div className="column text-light">
                {this.state.socials.map(socials => (
                    <Social key={socials.id} socials={socials}></Social>
                ))}
            </div>
        );
    }
}

export default SocialMedia;
