import React, { Component } from "react";
import SocialTitle from "./SocialTitle";
import SocialParagraph from "./SocialParagraph";
import SocialMedia from "./SocialMedia";

class SocialBlock extends Component {
    render() {
        return (
            <div>
                <SocialTitle component={SocialTitle} />
                <SocialParagraph component={SocialParagraph} />
                <SocialMedia component={SocialMedia} />
            </div>
        );
    }
}

export default SocialBlock;
