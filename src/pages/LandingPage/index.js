import React from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "bootstrap/dist/css/bootstrap.min.css";

const LandingPage = () => {
  return (
    <>
      {/* Hero */}
      <Container fluid className="outer-hero-container">
        <Container fluid="md" className="hero-container">
          <div className="hero-content">
            <h3 className="hero-sup-text">Investing in a</h3>
            <h1 className="hero-text">Digital Future</h1>
            <p className="hero-sub-text">
              Fasanara's unorthodox and unconventional portfolio construction
              and investment strategy is a response to today’s transformational
              markets.{" "}
            </p>
            <p className="hero-sub-text">
              Get in touch for further information about Fasanara’s Quant
              Fintech Investments
            </p>
            <Button className="cta-btn">GET IN TOUCH</Button>{" "}
          </div>
        </Container>
      </Container>

      {/* Key Features */}
      <Container fluid className="outer-key-features-container">
        <Container fluid="md py-5">
          <div>
            <h1 className="key-features-title">Key Features</h1>
            <p className="key-features-sub-title">
              Learn what makes us unique{" "}
            </p>
            <div className="key-feature-card-container">
              <Card className="key-feature-card">
                <Card.Img variant="top" src="" height="150px" width="275px" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="key-feature-card">
                <Card.Img variant="top" src="" height="150px" width="275px" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="key-feature-card">
                <Card.Img variant="top" src="" height="150px" width="275px" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="key-feature-card">
                <Card.Img variant="top" src="" height="150px" width="275px" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </Container>

      {/* Fund Strategies */}
      <Container fluid className="outer-fund-container">
        <Container fluid="md py-5">
          <div>
            <h1 className="fund-title">Fund Strategies</h1>
            <div className="fund-container">
              <div className="fund-div-1">Div1</div>
              <div className="fund-div-2">
                <p className="fund-description">
                  Fasanara Capital is an independent, owner-managed alternative
                  asset management company authorized and regulated by the
                  Financial Conduct Authority. Based in London with alliance
                  offices in Milan, we offer access to a range of inventive
                  multi-asset capacity-constrained niche products. Fasanara's
                  unorthodox portfolio construction and unconventional
                  investment strategy is a response to today’s transformational
                  markets.
                </p>
              </div>
            </div>
            <div className="fund-btn-container">
              <Button className="fund-btn">OUR FUNDS</Button>{" "}
            </div>
          </div>
        </Container>
      </Container>

      {/* Events  */}
      <Container fluid className="outer-events-container">
        <Container fluid="md py-5">
          <div>
            <h1 className="events-title">Recent & Upcoming Events</h1>
            <div className="event-card-container">
              <Card className="event-card">
                <Card.Img variant="top" src="" height="150px" width="275px" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="event-card">
                <Card.Img variant="top" src="" height="150px" width="275px" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="event-card">
                <Card.Img variant="top" src="" height="150px" width="275px" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </Container>

      {/* Insights */}
      <Container fluid className="outer-insights-container">
        <Container fluid="md py-5">
          <div>
            <h1 className="insights-title">Insights from the team </h1>
            <p className="insights-sub-title">
              Discover our latest Outlooks, Cookies and Scenarios on the market
            </p>
            <div className="insights-card-container">
              <Card className="insights-card">
                <Card.Img variant="top" src="" height="150px" width="275px" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="insights-card">
                <Card.Img variant="top" src="" height="150px" width="275px" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="insights-card">
                <Card.Img variant="top" src="" height="150px" width="275px" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="insights-btn-container">
              <Button className="insights-btn">OUR INSIGHTS</Button>{" "}
            </div>
          </div>
        </Container>
      </Container>

      {/* Podcasts */}
      <Container fluid className="outer-podcasts-container">
        <Container fluid="md py-5">
          <div>
            <h1 className="podcasts-title">Podcasts</h1>
            <p className="podcasts-sub-title">Listen to our latest Podcasts</p>
            <div className="podcasts-card-container">
              <Card className="podcasts-card">
                <Card.Img variant="top" src="" height="150px" width="275px" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="podcasts-card">
                <Card.Img variant="top" src="" height="150px" width="275px" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="podcasts-card">
                <Card.Img variant="top" src="" height="150px" width="275px" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="podcasts-btn-container">
              <Button className="podcasts-btn">OUR PODCASTS</Button>{" "}
            </div>
          </div>
        </Container>
      </Container>

      {/* Media  */}
      <Container fluid className="outer-media-container">
        <Container fluid="md py-5">
          <div>
            <h1 className="media-title">Media Coverage</h1>
            <p className="media-sub-title">Learn what makes us unique </p>
            <div className="media-card-container">
              <Card className="media-card">
                <Card.Img variant="top" src="" height="150px" width="275px" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="media-card">
                <Card.Img variant="top" src="" height="150px" width="275px" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="media-card">
                <Card.Img variant="top" src="" height="150px" width="275px" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="media-btn-container">
              <Button className="media-btn">OUR MEDIA</Button>{" "}
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default LandingPage;
