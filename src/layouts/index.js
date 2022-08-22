import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
            Fasanara Capital
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
            <h2 className="footer-cta-title">
              Ready to start your Quant FinTech Investments?
            </h2>
            <p className="footer-cta-sub-title">
              Get in touch today and we will provide further information about
              Fasanara’s Quant FinTech Investments
            </p>
            <div className="footer-cta-btn-container">
              <Button className="cta-btn">GET IN TOUCH</Button>{" "}
            </div>
          </div>
        </Container>
      </Container>
      {/* Email subscription */}
      <Container fluid className="outer-email-sub-container">
        <Container className="email-sub-container" fluid="md py-5">
          <div className="email-sub-div-1">
            <h2 className="email-sub-title">Stay up to date</h2>
            <p className="email-sub-sub-title">
              Subscribe for the latest Fasanara Capital news and updates from
              our blog. <br></br>By subscribing, you accept our{" "}
              <span className="email-privacy-policy">privacy policy</span>.{" "}
            </p>
          </div>

          <div className="email-sub-div-2">
            <div className="email-sub-div-2-div-1">
              <Form>
                <Form.Group className="me-1" controlId="formBasicEmail">
                  <Form.Label className="email-sub-label">
                    Your Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className="email-sub-input"
                  />
                </Form.Group>
              </Form>
            </div>
            <div className="email-sub-div-2-div-2">
              <Button className="subscribe-btn">SUBSCRIBE</Button>
            </div>
          </div>
        </Container>
      </Container>
      {/* Footer */}
      <Container fluid className="outer-footer-container">
        <Container fluid="md pt-5">
          <div>
            <div className="footer-sitemap-and-logo-social">
              <div className="footer-sitemap">
                <div className="footer-sitemap-item">
                  <h5>Funds</h5>
                  <p>ESG</p>
                  <p>Seed</p>
                </div>

                <div className="footer-sitemap-item">
                  <h5>Insights</h5>
                  <p>Intelligence </p>
                  <p>VC Blog</p>
                </div>

                <div className="footer-sitemap-item">
                  <h5>Media</h5>
                  <p>Podcasts</p>
                  <p>Coverage</p>
                </div>

                <div className="footer-sitemap-item">
                  <h5>Company</h5>
                  <p>About us</p>
                  <p>Team</p>
                  <p>Careers</p>
                  <p>Contact</p>
                </div>

                <div className="footer-sitemap-item">
                  <h5>Terms</h5>
                  <p>Disclaimer</p>
                  <p>Privacy Policy</p>
                  <p>Cookies Policy</p>
                  <p>Pillar 3 Disclosure</p>
                </div>
              </div>

              <div className="logo-social-section">
                <img
                  className="footer-icon"
                  src="/icon_transparent.png"
                  alt="Farsanara Capital"
                ></img>
                <p>Fasanara Capital</p>
                <div className="social-icons">
                  <i class="bi bi-linkedin"></i>
                  <i class="bi bi-twitter"></i>{" "}
                </div>
              </div>
            </div>

            <hr className="footer-line"></hr>

            <p className="footer-copyright">
              All right reserved ©Fasanara Capital Ltd 2022. Fasanara Capital
              Limited, registered in England and Wales No. 07561210. Registered
              offices: 4th Floor 40 New Bond Street, London, W1S 2RX, United
              Kingdom.
            </p>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Layout;
