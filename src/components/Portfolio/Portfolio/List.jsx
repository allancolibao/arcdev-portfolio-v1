import React, { Component } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "70%"
  }
};

Modal.setAppElement("#root");

class List extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { imgUrl, description } = this.props.list;
    return (
      <div className="card card-portfolio">
        <button onClick={this.openModal}>
          <img className="card-img-top" src={imgUrl} alt=""></img>
          <div className="card-text">
            <h4>{description}</h4>
          </div>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Modal"
        >
          <div className="container-fluid">
            <h2 ref={subtitle => (this.subtitle = subtitle)}>{description}</h2>
            <button onClick={this.closeModal}>close</button>
            <div className="col-md-12">
              <img style={{ width: "20%" }} src={imgUrl} alt=""></img>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default List;
