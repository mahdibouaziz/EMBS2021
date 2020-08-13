import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import biiot from "./img/events/biiot.jpg";
import biiot_challenge from "./img/events/biiot_challenge.jpg";
import health_tech from "./img/events/health_tech.jpg";
import nanobang from "./img/events/nanobang.jpg";

const Events = () => {
  return (
    <Container className="section">
      {/* check https://github.com/michalsnik/aos#animations for the animation */}
      <Row>
        <h1 className="title">
          <span>Events</span> We Organize
        </h1>
      </Row>

      <Row className="main-row">
        <Col className="box" lg={{ span: 3 }} md={{ span: 5 }} sm={{ span: 5 }}>
          <img src={biiot} alt="pic" />
          <p className="date">2019</p>
          <p className="desc">BIIOT Challenge</p>
        </Col>
        <Col className="box" lg={{ span: 3 }} md={{ span: 5 }} sm={{ span: 5 }}>
          <img src={health_tech} alt="pic" />
          <p className="date">2018</p>
          <p className="desc">Health Tech</p>
        </Col>
        <Col className="box" lg={{ span: 3 }} md={{ span: 5 }} sm={{ span: 5 }}>
          <img src={biiot_challenge} alt="pic" />
          <p className="date">2019</p>
          <p className="desc">BIIOT</p>
        </Col>
        <Col className="box" lg={{ span: 3 }} md={{ span: 5 }} sm={{ span: 5 }}>
          <img src={nanobang} alt="pic" />
          <p className="date">2017</p>
          <p className="desc">NanoBang</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Events;
