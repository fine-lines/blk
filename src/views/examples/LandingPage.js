/*!

=========================================================
* BLK Design System PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Line } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";

import { chartExample1 } from "variables/charts";

export default function LandingPage() {
  const wrapper = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  }, []);
  return (
    <>
      <ColorNavbar />

      <div className="wrapper" ref={wrapper}>
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("assets/img/blob.png").default}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png").default}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/triunghiuri.png").default}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("assets/img/waves.png").default}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("assets/img/patrat.png").default}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/cercuri.png").default}
          />
          <Container>
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="text-white">
                  “And what is the use of a book,” thought Alice, 
                  <span className="text-white">
                    {" "}
                    “without pictures or conversations?”
                  </span>
                </h1>
                <p className="text-white mb-3">
                  “And how many hours a day did you do lessons?” said Alice, in a hurry to change the subject.
                  <br/>
                  “Ten hours the first day,” said the Mock Turtle: “nine the next, and so on.”
                  <br/>
                  “What a curious plan!” exclaimed Alice.
                  <br/>
                  “That’s the reason they’re called lessons,” the Gryphon remarked: “because they lessen from day to day.”
                </p>
                <div className="btn-wrapper mb-3">
                  <p className="category text-success d-inline">Descend</p>
                  <Button
                    className="btn-link"
                    color="success"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="m"
                  >
                    <i className="tim-icons icon-minimal-right" />
                  </Button>
                </div>
                <div className="btn-wrapper">
                  <div className="button-container">
                    <Button
                      className="btn-icon btn-simple btn-round mr-1"
                      color="neutral"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-github" />
                    </Button>
                    <Button
                      className="btn-icon btn-simple btn-round mr-1"
                      color="neutral"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-icon btn-simple btn-round"
                      color="neutral"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-youtube" />
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="5">
                <img
                  alt="..."
                  className="img-fluid"
                  src={require("assets/img/bitcoin.png").default}
                />
              </Col>
            </Row>
          </Container>
        </div>

        <div className="content-center">
          <section className="section section-lg">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png").default}
            />
            <img
              alt="..."
              className="path2"
              src={require("assets/img/path2.png").default}
            />
            <Col md="12">
              <Card className="card-chart card-plain">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <hr className="line-info" />
                      <h5 className="card-category">Total Investments</h5>
                      <CardTitle tag="h2">Performance</CardTitle>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample1.data}
                      options={chartExample1.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </section>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <h1 className="title">
                Latest Insights and Stories
              </h1>

              <Button
                className="btn-round btn-icon"
                color="primary"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-twitter" />
              </Button>
              <Button
                className="btn-round btn-icon ml-1"
                color="primary"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-instagram" />
              </Button>
            </Col>
          </Row>
        </div>
        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png").default}
          />
          <Container>
            <Row>
              <Col lg="4" md="6">
                <Card className="card-blog card-plain">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img rounded"
                        src={require("assets/img/steven-roe.jpg").default}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <h6 className="category text-primary">Features</h6>
                    <CardTitle tag="h4">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        That’s One Way To Ditch Your Passenger
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      As near as we can tell, this guy must have thought he was
                      going over backwards and tapped the rear...
                    </p>
                    <CardFooter>
                      <div className="author">
                        <img
                          alt="..."
                          className="avatar img-raised"
                          src={require("assets/img/p10.jpg").default}
                        />
                        <span className="ml-1">Mike John</span>
                      </div>
                      <div className="stats stats-right">
                        <i className="tim-icons icon-watch-time" /> 5 min read
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4" md="6">
                <Card className="card-blog card-plain">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img rounded"
                        src={require("assets/img/noah-wetering.jpg").default}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <h6 className="category text-info">Animals</h6>
                    <CardTitle tag="h4">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Shark Week: How to Watch It Like a Scientist
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      Just when you thought it was safe to turn on your
                      television, the Discovery Channel's "Shark Week"...
                    </p>
                    <CardFooter>
                      <div className="author">
                        <img
                          alt="..."
                          className="avatar img-raised"
                          src={require("assets/img/johana.jpg").default}
                        />
                        <span className="ml-1">Johanna Zmud</span>
                      </div>
                      <div className="stats stats-right">
                        <i className="tim-icons icon-watch-time" /> 5 min read
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4" md="6">
                <Card className="card-blog card-plain">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img rounded"
                        src={require("assets/img/mark-harrison.jpg").default}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <h6 className="category text-warning">Cars</h6>
                    <CardTitle tag="h4">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Who's Afraid of the Self-Driving Car?
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      It's been 60 years since the cover of Popular Mechanics
                      magazine gave us the promise of flying cars...
                    </p>
                    <CardFooter>
                      <div className="author">
                        <img
                          alt="..."
                          className="avatar img-raised"
                          src={require("assets/img/christian.jpg").default}
                        />
                        <span className="ml-1">Marc Oliver</span>
                      </div>
                      <div className="stats stats-right">
                        <i className="tim-icons icon-heart-2" /> 2.4K
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4" md="6">
                <Card className="card-plain card-blog">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img rounded img-raised"
                        src={require("assets/img/pawel-nolbert.jpg").default}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <h6 className="category text-info">Enterprise</h6>
                    <CardTitle tag="h4">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Autodesk looks to future of 3D printing with Project
                        Escher
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      Like so many organizations these days, Autodesk is a
                      company in transition. It was until recently a traditional
                      boxed software company selling licenses.{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Read More
                      </a>
                    </p>
                    <div className="author">
                      <img
                        alt="..."
                        className="avatar img-raised"
                        src={require("assets/img/olivia.jpg").default}
                      />
                      <span className="ml-1">Anna Spark</span>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4" md="6">
                <Card className="card-plain card-blog">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img rounded img-raised"
                        src={require("assets/img/serge-kutuzov.jpg").default}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <h6 className="category text-success">Startups</h6>
                    <CardTitle tag="h4">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Lyft launching cross-platform service this week
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      Like so many organizations these days, Autodesk is a
                      company in transition. It was until recently a traditional
                      boxed software company selling licenses.{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Read More
                      </a>
                    </p>
                    <div className="author">
                      <img
                        alt="..."
                        className="avatar img-raised"
                        src={require("assets/img/michael.jpg").default}
                      />
                      <span className="ml-1">John Black</span>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4" md="6">
                <Card className="card-plain card-blog">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img rounded img-raised"
                        src={require("assets/img/1234.png").default}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <h6 className="category text-danger">
                      <i className="now-ui-icons media-2_sound-wave" />
                      Enterprise
                    </h6>
                    <CardTitle tag="h4">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        6 insights into the French Fashion landscape
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      Like so many organizations these days, Autodesk is a
                      company in transition. It was until recently a traditional
                      boxed software company selling licenses.{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Read More
                      </a>
                    </p>
                    <div className="author">
                      <img
                        alt="..."
                        className="avatar img-raised"
                        src={require("assets/img/james.jpg").default}
                      />
                      <span className="ml-1">James Newman</span>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <DemoFooter />
      </div>
    </>
  );
}
