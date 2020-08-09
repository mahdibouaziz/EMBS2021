import React from "react";
import { Row, Col } from "react-bootstrap";
import embsLogo from "./img/about/embs.png";
import "./homeStyle.css";

const About = () => {
  return (
    <section className="about-section">
      <Row>
        <h1 className="title">
          About <span>Us</span>
        </h1>
      </Row>
      <Row>
        <Col md={12} lg={7}>
          <p className="text">
            IEEE Engineering in Medicine and Biology Society (EMBS) is the
            world’s largest international society of biomedical engineers. The
            organization’s 12,000 members reside in some 97 countries around the
            world. EMBS provides its members with access to the people,
            practices, information, ideas and opinions that are shaping one of
            the fastest growing fields in science.
          </p>
        </Col>
        {/* <Col md={{ span: 4, offset: 2 }} lg={{ span: 5, offset: 0 }}> */}
        <Col md={12} lg={5}>
          <img className="embs-logo" src={embsLogo} alt="embs" />
        </Col>
      </Row>
    </section>
  );
};

export default About;
