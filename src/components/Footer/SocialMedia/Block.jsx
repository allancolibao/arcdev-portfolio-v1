import React, { Component } from "react";
import Title from "./Title";
import Desc from "./Desc";
import Media from "./Media";

class Block extends Component {
    render() {
        return (
            <div>
                <Title component={Title} />
                <Desc component={Desc} />
                <Media component={Media} />
            </div>
        );
    }
}

export default Block;
