import React from "react";
import pic from "./img/about.jpg";
import ieee from "./img/ieee.png";
import { Container, Row, Col } from "react-bootstrap";
import "./aboutStyle.css";

const About = () => {
  return (
    <div>
      <div className="banner" style={{ backgroundImage: `url(${pic})` }}>
        <h1 className="banner-text">About</h1>
      </div>
      <Container>
        <Row className="row-about">
          <Col className="col-about" sm={12} md={4}>
            <img src={ieee} alt="ieee" />
          </Col>
          <Col sm={12} md={8}>
            <h1>WHO ARE IEEE ?</h1>
            <p>
              IEEE is the world’s largest technical professional organization
              dedicated to advancing technology for the benefit of humanity.
              <br />
              IEEE and its members inspire a global community to innovate for a
              better tomorrow through its more than 423,000 members in over 160
              countries, and its highly cited publications, conferences,
              technology standards,and professional and educational activities.
              <br />
              IEEE is the trusted “voice” for engineering, computing, and
              technology information around the globe.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
