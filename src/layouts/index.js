import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {" "}
      <Navbar collapseOnSelect expand="lg" bg="white" sticky="top">
        <Container>
          <Navbar.Brand className="d-flex align-items-center" href="#home">
            {" "}
            <img
              className="navbar-icon pe-3"
              src="/icon_transparent.png"
              alt="Farsanara Capital"
            ></img>
            Farsanara Capital
          </Navbar.Brand>
          <Navbar.Toggle
            className="custom-toggler"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="#Funds">Funds</Nav.Link>
              <Nav.Link href="#Insights">Insights</Nav.Link>
              <Nav.Link href="#Media">Media</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      {/* Footer CTA */}
      <Container fluid className="outer-footer-cta-container">
        <Container fluid="md py-5">
          <div>
            <h1>Footer CTA</h1>
          </div>
        </Container>
      </Container>
      {/* Email subscription */}
      <Container fluid className="outer-email-sub-container">
        <Container fluid="md py-5">
          <div>
            <h1>Email sub</h1>
          </div>
        </Container>
      </Container>
      {/* Footer */}
      <Container fluid className="outer-footer-container">
        <Container fluid="md py-5">
          <div>
            <h1>Footer</h1>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Layout;
