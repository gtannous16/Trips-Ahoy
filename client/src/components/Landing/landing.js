import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBMask, MDBRow, MDBCol, MDBBtn,   MDBView, MDBContainer} from "mdbreact";
import "./landing.css";

class AppPage extends Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <div id="apppage">
        <Router>
          {/* <div>
            <MDBNavbar
              color="primary-color"
              dark
              expand="md"
              fixed="top"
              scrolling
              transparent
            >
              <MDBContainer>
                <MDBNavbarBrand>
                  <strong className="White-text">Trips Ahoy!</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                <MDBCollapse isOpen={this.state.collapsed} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBNavLink to="#!">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">Quiz</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">Results</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapsed && overlay}
          </div> */}
        </Router>
        <MDBView>
          
            <MDBContainer>
              <MDBRow>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">
                    Welcome to Trips Ahoy! {" "}
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Want to book your next cruise, but not sure where to go? Take our personality quiz and 
                    see where your next adventure takes you! You'll recieve four location suggestions based on 
                    your quiz results, and suggestions on things to do!! The fun is up to you! Click below to start!
                  </h6>
                  <MDBBtn color="yellow">Start Quiz!</MDBBtn>
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
          
        </MDBView>

        <MDBContainer>
          <MDBRow className="py-5">
            <MDBCol md="12" className="text-center">
              <p>
                Thank you for visiting Trips Ahoy!™
                We are a team of female Full Stack developers with a passion for travel.
                We hope that our app will provide you with memories of a lifetime for you and your loved ones!
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default AppPage;
