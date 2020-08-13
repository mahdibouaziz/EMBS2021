import React from "react";
import { Container, Row, Carousel, Col } from "react-bootstrap";
import visit2018_1 from "./img/visits/2018_1.jpg";
import visit2018_2 from "./img/visits/2018_2.jpg";
import visit2018_3 from "./img/visits/2018_3.jpg";

const Visits = () => {
  return (
    <section>
      <Container className="section">
        <Row>
          <h1 className="title">
            Our <span>Industrial</span> Visits
          </h1>
        </Row>
        <Row className="main-row">
          <Col xs={12}>
            <p className="visit-date">2018/2019</p>
          </Col>
          <Carousel className="visit-carr" fade={true}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={visit2018_1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={visit2018_2}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={visit2018_3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </section>
  );
};

export default Visits;
