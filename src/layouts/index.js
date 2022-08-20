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
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Farsanara Capital</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
      <footer>
        <p>© 2022 Footer Search. </p>
        <p>
          &nbsp; Created by <a href="https://github.com/PrishalM">Prishal</a>
        </p>
      </footer>
    </>
  );
};

export default Layout;
