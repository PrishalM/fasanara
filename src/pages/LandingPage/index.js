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
            <h1 className="hero-text">Fasanara Future</h1>
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
                <Card.Header className="key-feature-header">
                  <img
                    src="/feature-1.png"
                    className="key-feature-icon"
                    alt=""
                  />
                </Card.Header>
                <Card.Body className="key-feature-body">
                  <Card.Title>Investment Expertise </Card.Title>
                  <Card.Text>
                    Our expertise spans a wide array of asset classes.
                    Fasanara’s unique investment approach allows for greater
                    independence and flexibility, promptly responding to
                    opportunities as they arise.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="key-feature-card">
                <Card.Header className="key-feature-header">
                  <img
                    src="/feature-2.png"
                    className="key-feature-icon"
                    alt=""
                  />
                </Card.Header>
                <Card.Body className="key-feature-body">
                  <Card.Title>Prudent Risk Management </Card.Title>
                  <Card.Text>
                    Tailored-made risk management framework adapted to its
                    unique investment strategy. A dedicated team of people
                    overseas this part of the investment process.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="key-feature-card">
                <Card.Header className="key-feature-header">
                  <img
                    src="/feature-3.png"
                    className="key-feature-icon"
                    alt=""
                  />
                </Card.Header>
                <Card.Body className="key-feature-body">
                  <Card.Title>Client Focus</Card.Title>
                  <Card.Text>
                    We deliver a highly customized service to a diversified
                    investor base, thus striving to fulfil clients’ needs with
                    opportunistic vehicles and quantitative investment
                    solutions, using state-of-the-art technologies.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="key-feature-card">
                <Card.Header className="key-feature-header">
                  <img
                    src="/feature-4.png"
                    className="key-feature-icon"
                    alt=""
                  />
                </Card.Header>
                <Card.Body className="key-feature-body">
                  <Card.Title>Scaling up through technology </Card.Title>
                  <Card.Text>
                    Through technology, we renew our methodology to best access
                    to the most liquid asset classes. New Algos: quick to
                    implement & useful in diversifying the portfolio strategies,
                    managing the strategies portfolios through our ML
                    infrastructure.
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
              <div className="fund-div-1"></div>
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
                <Card.Body>
                  <Card.Title className="event-card-title">
                    Private Credit EU Leadership Summit{" "}
                  </Card.Title>
                  <Card.Text className="event-card-text">
                    We are pleased to be speaking on a panel dealing with “A
                    world turned upside down: Adjusting to the consequences of
                    covid, inflation, interest rates, supply chain issues and
                    the conflict in Ukraine.”
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="event-card-footer d-flex justify-content-between">
                  <p className="event-card-date">28 September 2022</p>
                  <p className="event-card-read-more stretched-link">
                    Read more
                  </p>
                </Card.Footer>
              </Card>

              <Card className="event-card">
                <Card.Body>
                  <Card.Title className="event-card-title">
                    FTT DeFi 2022{" "}
                  </Card.Title>
                  <Card.Text className="event-card-text">
                    We were at the Fintech Talents DeFi event, where we
                    discussed "What the cryptoverse means for lending".
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="event-card-footer d-flex justify-content-between">
                  <p className="event-card-date">12 July 2022</p>
                  <p className="event-card-read-more stretched-link">
                    Read more
                  </p>
                </Card.Footer>
              </Card>

              <Card className="event-card">
                <Card.Body>
                  <Card.Title className="event-card-title">
                    LendIt Fintech 2022{" "}
                  </Card.Title>
                  <Card.Text className="event-card-text">
                    Attended the biggest USA’s leading event for innovation in
                    financial services in New York, US.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="event-card-footer d-flex justify-content-between">
                  <p className="event-card-date">25 - 26 July 2022</p>
                  <p className="event-card-read-more stretched-link">
                    Read more
                  </p>
                </Card.Footer>
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
                <Card.Img
                  variant="top"
                  src="/random-image-1.png"
                  className="insights-card-img"
                />
                <Card.Body>
                  <Card.Title className="insight-card-title">
                    Fasanara Future. Use of Fasanara Technology To Build
                    Resilient Portfolios.{" "}
                  </Card.Title>
                  <Card.Text className="insight-card-text">
                    60/40 Portfolios have been the safe harbour of institutional
                    investors for decades, their steady state. For decades, they
                    have exhibited much better risk-adjusted returns than both
                    Equity
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="insights-card-footer stretched-link">
                  read more
                </Card.Footer>
              </Card>

              <Card className="insights-card">
                <Card.Img
                  variant="top"
                  src="/random-image-2.png"
                  className="insights-card-img"
                />
                <Card.Body>
                  <Card.Title className="insight-card-title">
                    The Market Economy In 2025: A Visualization Exercise{" "}
                  </Card.Title>
                  <Card.Text className="insight-card-text">
                    To any market participant who has been more than 10 years in
                    activity, financial markets are unrecognisable, lampooning
                    the laws of physics: rates are negative as the asset class
                    of
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="insights-card-footer stretched-link">
                  read more
                </Card.Footer>
              </Card>

              <Card className="insights-card">
                <Card.Img
                  variant="top"
                  src="/random-image-4.png"
                  className="insights-card-img"
                />
                <Card.Body>
                  <Card.Title className="insight-card-title">
                    How To Navigate The Cliff Edge In Markets{" "}
                  </Card.Title>
                  <Card.Text className="insight-card-text">
                    At a time in which bonds are no longer bonds but rather tax
                    bills, and equities are as expensive as washing machines
                    going on auction at 50 thousand dollars, what role is left
                    to play for us rationale investors?
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="insights-card-footer stretched-link">
                  read more
                </Card.Footer>
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
                <Card.Img
                  variant="top"
                  src="/random-image-3.png"
                  className="podcasts-card-img"
                />
                <Card.Body>
                  <Card.Title className="podcasts-card-title">
                    Resonance FM: The Naked Short Club{" "}
                  </Card.Title>
                  <Card.Text className="podcasts-card-text">
                    Long overdue equity market correction. The correction
                    moderate though; even he S&P at 3000 may not be surprising.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="podcasts-card-footer stretched-link">
                  listen
                </Card.Footer>
              </Card>

              <Card className="podcasts-card">
                <Card.Img
                  variant="top"
                  src="/random-image-2.png"
                  className="podcasts-card-img"
                />
                <Card.Body>
                  <Card.Title className="podcasts-card-title">
                    THE CURIOUS LEARNERS{" "}
                  </Card.Title>
                  <Card.Text className="podcasts-card-text">
                    RECAP: We’re at the cusp of innovation.Financial markets are
                    supposed to efficiently allocate to the real economy –
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="podcasts-card-footer stretched-link">
                  listen
                </Card.Footer>
              </Card>

              <Card className="podcasts-card">
                <Card.Img
                  variant="top"
                  src="/random-image-1.png"
                  className="podcasts-card-img"
                />
                <Card.Body>
                  <Card.Title className="podcasts-card-title">
                    MACROVOICES{" "}
                  </Card.Title>
                  <Card.Text className="podcasts-card-text">
                    RECAP: Bonds are defunct – they are no longer sensitive to
                    inflation.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="podcasts-card-footer stretched-link">
                  listen
                </Card.Footer>
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
            <p className="media-sub-title">
              Find out what others are saying about us
            </p>
            <div className="media-card-container">
              <Card className="media-card">
                <Card.Img
                  variant="top"
                  src="/random-image-4.png"
                  className="media-card-img"
                />
                <Card.Body>
                  <Card.Title className="media-card-title">
                    Funding News{" "}
                  </Card.Title>
                  <Card.Text className="media-card-text">
                    Press release of our Fasanara VCIII announcement covered by
                    The Block, the leading global information service about
                    Crypto and Blockchain.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="media-card-footer stretched-link">
                  read more
                </Card.Footer>
              </Card>

              <Card className="media-card">
                <Card.Img
                  variant="top"
                  src="/random-image-1.png"
                  className="media-card-img"
                />
                <Card.Body>
                  <Card.Title className="media-card-title">
                    Interview{" "}
                  </Card.Title>
                  <Card.Text className="media-card-text">
                    With Sifted EU we shared our thoughts and opinion on Crypto
                    and why it's the best time to launch our new Fasanara VCIII
                    fund.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="media-card-footer stretched-link">
                  read more
                </Card.Footer>
              </Card>

              <Card className="media-card">
                <Card.Img
                  variant="top"
                  src="/random-image-2.png"
                  className="media-card-img"
                />
                <Card.Body>
                  <Card.Title className="media-card-title">
                    Sky News{" "}
                  </Card.Title>
                  <Card.Text className="media-card-text">
                    Sky News coverage of our new Fasanara VC III fund launch.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="media-card-footer stretched-link">
                  read more
                </Card.Footer>
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
