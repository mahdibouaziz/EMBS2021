import React from "react";
import { Container, Row } from "react-bootstrap";
import img1 from "./img/collabs/img1.jpg";
import img2 from "./img/collabs/img2.jpg";
import img3 from "./img/collabs/img3.jpg";
import img4 from "./img/collabs/img4.jpg";

const Collaboration = () => {
  return (
    <section>
      <Container className="section">
        <Row>
          <h1 className="title">
            <span>Events</span> We Participed In
          </h1>
        </Row>
        <Row>
          <div className="collab-box">
            <img src={img1} alt="" />
            <h2>IEEE Day</h2>
          </div>
          <div className="collab-box">
            <img src={img2} alt="" />
            <h2>TSYP</h2>
          </div>
          <div className="collab-box">
            <img src={img3} alt="" />
            <h2>EMBS Germany</h2>
          </div>
          <div className="collab-box">
            <img src={img4} alt="" />
            <h2>Summer School</h2>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Collaboration;
