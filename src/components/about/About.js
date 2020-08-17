import React, { useEffect } from "react";
import pic from "./img/about.jpg";
import ieee from "./img/ieee.png";
import embs from "./img/embs.png";
import ieee_tunisia from "./img/ieee_tunisia.png";
import ieee_insat from "./img/ieee_insat.png";
import embs_logo from "./img/embs_logo.png";
import { Container, Row, Col } from "react-bootstrap";
import "./aboutStyle.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Sponsors from "./Sponsors";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1100 });
  }, []);
  return (
    <div>
      <div className="banner" style={{ backgroundImage: `url(${pic})` }}>
        <h1 className="banner-text">About</h1>
      </div>
      <Container>
        <Row className="row-about">
          <Col className="col-about" sm={12} md={4}>
            <img className="ieee-logo" src={ieee} alt="ieee" />
          </Col>
          <Col sm={12} md={8}>
            <h1>WHO ARE IEEE ?</h1>
            <p data-aos="fade-right">
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

        <Row data-aos="fade-right" className="row-about">
          <Col sm={12} md={8}>
            <h1>AND WHAT IS EMBS CHAPTER ?</h1>
            <p>
              IEEE Engineering in Medicine and Biology Society (EMBS) is the
              world’s largest international society of biomedical engineers.
              <br />
              The organization’s 12,000 members reside in some 97 countries
              around the world.
              <br />
              EMBS provides its members with access to the people, practices,
              information, ideas and opinions that are shaping one of the
              fastest growing fields in science.
            </p>
          </Col>
          <Col data-aos="fade-right" className="col-about" sm={12} md={4}>
            <img className="embs-logo" src={embs} alt="ieee" />
          </Col>
        </Row>

        <Row className="row-about">
          <Col data-aos="fade-right" sm={12} md={{ span: 8, order: 2 }}>
            <h1>EMBS TUNISIA SECTION</h1>
            <p>
              The IEEE Tunisia EMB Chapter is established in January 2009.
              <br />
              The objectives are:
              <br />
              To encourage researchers to cooperate.
              <br />
              - To increase contributions in the area of IEEE Engineering in
              Medicine and Biology Society.
              <br />
              - To help researchers in order to solve complex and real life
              problems.
              <br />
              - To help students and graduate students on competition
              activities.
              <br />- To transfer latest advanced researchs to Tunisia. These
              objectives can be achieved through various activities including
              seminars, lectures, schools, conferences, and other events.
            </p>
          </Col>
          <Col
            data-aos="fade-right"
            className="col-about"
            sm={12}
            md={{ span: 4, order: 1 }}
          >
            <img className="ieee-tunisia-logo" src={ieee_tunisia} alt="ieee" />
          </Col>
        </Row>

        <Row className="row-about">
          <Col data-aos="fade-right" sm={12} md={8}>
            <h1>EMBS IN INSAT !</h1>
            <p>
              INSAT Student Branch EMBS Chapter is the latest chapter within our
              Student Branch , it was created on 2017, By students from
              different Specialties : Biological Engineering and Chemical
              Engineering mainly, but also Instrumentation, Industrial Computer
              Science … Aiming to link our studies to the latest technologies
              and opinions worldwide.
              <br />
              We count more than 50 members giving their best to progress and to
              share what they learned with their environement.
            </p>
          </Col>
          <Col data-aos="fade-right" className="col-about" sm={12} md={4}>
            <img className="ieee-insat-logo" src={ieee_insat} alt="ieee" />
          </Col>
        </Row>

        <Row className="row-about">
          <Col data-aos="fade-right" sm={12} md={{ span: 8, order: 2 }}>
            <h1>WELCOME TO OUR COMMUNITY !</h1>
            <p>
              Do you want to know how to design the electrical circuits that
              make a pacemaker run ? or create the software that reads an MRI ?
              <br />
              Or maybe you're interested in developing the wireless technologies
              that allow patients and doctors to communicate over long
              distances?
              <br />
              Or just help a person with physical disabilities do crossfit?
              <br />
              Here in EMBS INSAT SB we're doing our best to provide you with
              various training sessions given by highly-qualified staff.
              <br />
              Our goal is to guide our biomedical engineers,they are the link
              between science and life science, creating innovations in
              healthcare technology for the benefit of all humanity.
            </p>
          </Col>
          <Col
            data-aos="fade-right"
            className="col-about"
            sm={12}
            md={{ span: 4, order: 1 }}
          >
            <img className="embs-logo" src={embs_logo} alt="ieee" />
          </Col>
        </Row>
      </Container>
      <Sponsors />
    </div>
  );
};

export default About;
