import React from "react";
import NavBar from "./Home/NavBar/NavBar";
import LandingPage from "./Home/LandingPage/LandingPage";

class Home extends React.Component {
  render() {
    return (
      <section id="home">
        <header>
          <NavBar component={NavBar} />
          <LandingPage component={LandingPage} />
        </header>
      </section>
    );
  }
}

export default Home;
