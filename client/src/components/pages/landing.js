<<<<<<< HEAD
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBBtn,   MDBView, MDBContainer, MDBFormInline } from "mdbreact";
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
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id="apppage">
        <Router>
          <div>
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
          </div>
        </Router>
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
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
                  <MDBBtn color="yellow">Start My Adventure!</MDBBtn>
                </div>
                <MDBCol md="5" xl="5" className="mt-xl-5">
                  <img
                    src="https://i.ibb.co/w0SLpNw/logo-white-background.jpg"
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
=======
>>>>>>> 4242ba8a256d617ac8bcbddf24034718c0d8d0fc
