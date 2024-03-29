import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./landing.css";
const logo = require("./logo.png");

class AppPage extends Component {
  state = {
    collapsed: false,
    routeToQuiz: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  startQuiz = event => {
    this.setState({ routeToQuiz: true });
  };

  render() {
    if (this.state.routeToQuiz) {
      return <Redirect to="/quiz" />;
    }

    return (
      <div id="apppage">
        <div
          style={{
            width: "100vw",
            backgroundColor: "#89FFF8",
            color: "#0a1485",
            fontSize: "28px",
            opacity: ".7",
            padding: "1em 0",
            textAlign: "center",
            paddingRight: "25px",
            paddingLeft: "25px",
            textShadow: "2px 2px #39ff14",
            fontFamily: "Amatic SC, cursive",
            fontWeight: "bold"
          }}
        >
          <h2>Welcome to Trips-Ahoy!</h2>
          <p>
            Want to book your next cruise, but not sure where to go? Take our
            personality quiz and see where your next adventure takes you! You'll
            recieve four location suggestions based on your quiz results, and
            suggestions on things to do. The fun is up to you! Click below to
            start!
          </p>
          <button
            onClick={this.startQuiz}
            style={{
              padding: "1em 2em",
              border: "1px solid aliceblue",
              borderRadius: "5px",
              fontWeight: "bold",
              fontFamily: "Amatic SC, cursive",
              color: "#0a1485",
              fontSize: "18px",
              textTransform: "uppercase",
              boxShadow: "2px 2px #39ff14"
            }}
          >
            Start Quiz
          </button>
        </div>
        {/* <div style={{ marginBottom: "em" }} /> */}

        <div style={{ margin: "0" }}>
          <img alt="brand logo" id="logo" src={logo} />
        </div>
        <div
          id="footer"
          style={{
            width: "100vw",
            backgroundColor: "#ffcf9e",
            opacity: ".6",
            padding: "0em 0",
            textAlign: "center",
            position: "fixed",
            color: "teal",
            bottom: "-10px",
            fontFamily: "Amatic SC, cursive",
            fontWeight: "bold"
          }}
        >
          <p className="footer">
            Thank you for visiting Trips Ahoy!™ We are a team of female Full
            Stack developers with a passion for travel. We hope that our app
            will provide you with memories of a lifetime for you and your loved
            ones! <a className="github" href="https://github.com/gtannous16/Trips-Ahoy" target="_blank"> Click Here for Github Code!</a>
          </p>
        </div>
      </div>
    );
  }
}

export default AppPage;
