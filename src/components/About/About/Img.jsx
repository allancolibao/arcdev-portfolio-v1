import React, { Component } from "react";

class Img extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: "./asset/dp.jpg"
    };
  }
  render() {
    const style = {
      width: "20%",
      borderRadius: "50%"
    };
    return <img style={style} src={this.state.imgUrl} alt=""></img>;
  }
}

export default Img;
