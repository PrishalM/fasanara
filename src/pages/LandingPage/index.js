import React from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "bootstrap/dist/css/bootstrap.min.css";

const LandingPage = () => {
  return (
    <>
      <Container fluid="md">
        <div>
          <h3>Investing in a</h3>
          <h1>Digital Future</h1>
          <p>
            Fasanara's unorthodox and unconventional portfolio construction and
            investment strategy is a response to today’s transformational
            markets.{" "}
          </p>
          <p>
            Get in touch for futher infomation about Fasanara’s Quant Fintech
            Investments
          </p>
          <Button variant="primary" size="lg">
            GET IN TOUCH
          </Button>{" "}
        </div>
      </Container>
      <Container fluid="md">
        <div>
          <h1>Key Features</h1>
          <p>Learn what makes us unique </p>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="" height="150px" width="275px" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
      ;
    </>
  );
};

export default LandingPage;
