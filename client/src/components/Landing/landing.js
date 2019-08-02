import React, { Component } from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer
} from "mdbreact";

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
            backgroundColor: "teal",
            opacity: ".8",
            padding: "2em 0",
            textAlign: "center"
          }}
        >
          <h2>Welcome to Trips-Ahoy!</h2>
          <p>
            Want to book your next cruise, but not sure where to go? Take our
            personality quiz and see where your next adventure takes you! You'll
            recieve four location suggestions based on your quiz results, and
            suggestions on things to do!! The fun is up to you! Click below to
            start!
          </p>
          <button
            onClick={this.startQuiz}
            style={{
              padding: "1em 2em",
              border: "1px solid aliceblue",
              borderRadius: "5px",
              fontWeight: "500",
              textTransform: "uppercase",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
            }}
          >
            Start Quiz
          </button>
        </div>
        <img
          src={require("src/components/Pages/logo_transparent_background.png")}
        />
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">
                    Welcome to Trips-Ahoy!{" "}
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Want to book your next cruise, but not sure where to go?
                    Take our personality quiz and see where your next adventure
                    takes you! You'll recieve four location suggestions based on
                    your quiz results, and suggestions on things to do!! The fun
                    is up to you! Click below to start!
                  </h6>
                  <MDBBtn color="yellow">Start My Adventure!</MDBBtn>
                </div>
                <MDBCol md="5" xl="5" className="mt-xl-5">
                  <img
                    src="http://photobucket.com/confirmation?token=%2BMC7CD8Y6NBCi9iKVguM4ltFWRxOviadBdPJECZ5PJ1zASX0fF7GqOb9%2FaFnfb4RrcRCtSH4C84dxX2jaOtd1auSN4bqhLjL"
                    alt="logo"
                    className="img-fluid"
                  />
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

        <MDBContainer>
          <MDBRow className="py-5">
            <MDBCol md="12" className="text-center">
              <p>
                Thank you for visiting Trips Ahoy!™ We are a team of female Full
                Stack developers with a passion for travel. We hope that our app
                will provide you with memories of a lifetime for you and your
                loved ones!
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default AppPage;
