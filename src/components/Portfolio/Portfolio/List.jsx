import React, { Component } from "react";

class List extends Component {
  render() {
    const { href, imgUrl, description } = this.props.list;
    return (
      <a href={href}>
        <div className="card card-portfolio">
          <img className="card-img-top" src={imgUrl} alt=""></img>
          <div className="card-body">
            <h5 className="card-text">{description}</h5>
          </div>
        </div>
      </a>
    );
  }
}

export default List;
