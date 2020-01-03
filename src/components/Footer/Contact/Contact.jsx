import React, { Component } from "react";
import Title from "./Title";
import Desc from "./Desc";
import ContactForm from "./ContactForm/ContactForm";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";

class Contact extends Component {
  render() {
    const options = {
      position: positions.BOTTOM_RIGHT,
      timeout: 5000,
      offset: "30px",
      transition: transitions.SCALE
    };

    var BaseIcon = function BaseIcon(_ref) {
      var color = _ref.color,
        _ref$pushRight = _ref.pushRight,
        pushRight = _ref$pushRight === undefined ? true : _ref$pushRight,
        children = _ref.children;
      return React.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: color,
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          style: {
            marginRight: pushRight ? "20px" : "0",
            minWidth: 24
          }
        },
        children
      );
    };

    var InfoIcon = function InfoIcon() {
      return React.createElement(
        BaseIcon,
        {
          color: "#2E9AFE"
        },
        React.createElement("circle", {
          cx: "12",
          cy: "12",
          r: "10"
        }),
        React.createElement("line", {
          x1: "12",
          y1: "16",
          x2: "12",
          y2: "12"
        }),
        React.createElement("line", {
          x1: "12",
          y1: "8",
          x2: "12",
          y2: "8"
        })
      );
    };

    var SuccessIcon = function SuccessIcon() {
      return React.createElement(
        BaseIcon,
        {
          color: "#43e00d"
        },
        React.createElement("path", {
          d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
        }),
        React.createElement("polyline", {
          points: "22 4 12 14.01 9 11.01"
        })
      );
    };

    var ErrorIcon = function ErrorIcon() {
      return React.createElement(
        BaseIcon,
        {
          color: "#ff0d31"
        },
        React.createElement("circle", {
          cx: "12",
          cy: "12",
          r: "10"
        }),
        React.createElement("line", {
          x1: "12",
          y1: "8",
          x2: "12",
          y2: "12"
        }),
        React.createElement("line", {
          x1: "12",
          y1: "16",
          x2: "12",
          y2: "16"
        })
      );
    };

    var style = {
      backgroundColor: "#fff",
      border: "1px solid #b0b0b0",
      color: "#101625",
      padding: "1vmin",
      borderRadius: "3px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0px 2px 2px 2px rgba(0, 0, 0, 0.03)",
      fontFamily: "Nunito",
      boxSizing: "border-box",
      margin: "3vmin 3vmin"
    };

    var styleBtn = {
      marginLeft: "20px",
      border: "none",
      backgroundColor: "transparent",
      cursor: "pointer",
      color: "red"
    };

    const AlertTemplate = ({ options, message, close }) => (
      <div style={style}>
        {options.type === "info" && React.createElement(InfoIcon, null)}
        {options.type === "success" && React.createElement(SuccessIcon, null)}
        {options.type === "error" && React.createElement(ErrorIcon, null)}
        {message}
        <button style={styleBtn} onClick={close}>
          <i className="fa fa-times"></i>
        </button>
      </div>
    );
    return (
      <div className="col-md-5 col-sm-12 contactform">
        <Title component="Title" />
        <Desc component="Desc" />
        <AlertProvider template={AlertTemplate} {...options}>
          <ContactForm component="ContactForm" />
        </AlertProvider>
      </div>
    );
  }
}

export default Contact;
