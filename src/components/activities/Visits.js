import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import visit2018_1 from "./img/visits/2018_1.webp";
import visit2018_2 from "./img/visits/2018_2.webp";
import visit2018_3 from "./img/visits/2018_3.webp";

const Visits = () => {
  return (
    <section className="visits-section">
      <Container>
        <Row>
          <h1 className="title">Our Industrial Visits </h1>
        </Row>
        <Row>
          <p className="body paragraph">
            EMBS Chapter makes several Industrial visits
          </p>
        </Row>
        <Row>
          <p className="visit-date paragraph">2018/2019</p>
        </Row>
        <Row className="main-row">
          <Carousel interval={2500} className="visit-carr" fade={false}>
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
