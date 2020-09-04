import React from "react";
import { Container, Row } from "react-bootstrap";
import spr1 from "./img/sponsors/1.png";
import spr2 from "./img/sponsors/2.png";
import spr3 from "./img/sponsors/3.png";
import spr4 from "./img/sponsors/4.png";
import spr5 from "./img/sponsors/5.png";
import spr6 from "./img/sponsors/6.png";
import spr7 from "./img/sponsors/7.png";
import spr8 from "./img/sponsors/8.png";
import spr9 from "./img/sponsors/9.png";
import spr10 from "./img/sponsors/10.png";

const Sponsors = () => {
  return (
    <section className="sponsors-section section">
      <Container>
        <Row>
          <h1 className="title">Our Sponsors</h1>
        </Row>
        <Row>
          <p className="body paragraph">
            You can find below the list of our sponsors who helped us reach our
            current success.
          </p>
        </Row>
        <Row className="sponsor">
          <img src={spr6} alt="" />
          <img src={spr2} alt="" />
          <img src={spr3} alt="" />
          <img src={spr4} alt="" />
          <img src={spr5} alt="" />
          <img src={spr1} alt="" />
          <img src={spr7} alt="" />
          <img src={spr8} alt="" />
          <img src={spr9} alt="" />
          <img src={spr10} alt="" />
        </Row>
      </Container>
    </section>
  );
};

export default Sponsors;
