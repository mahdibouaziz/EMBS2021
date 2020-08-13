import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import community_management_training from "./img/trainings/community_management_training.jpg";
import iso_training from "./img/trainings/iso_training.jpg";
import public_speaking_training from "./img/trainings/public_speaking_training.png";
import python_training from "./img/trainings/python_training.jpg";

const Trainings = () => {
  return (
    <Container className="section">
      {/* check https://github.com/michalsnik/aos#animations for the animation */}
      <Row>
        <h1 className="title">
          <span>Trainings</span> We Provide
        </h1>
      </Row>

      <Row className="main-row">
        <Col className="box" md={{ span: 5 }} sm={{ span: 5 }}>
          <p>
            <i class="fas fa-cogs"></i>
          </p>
          <p className="title-box">Technical Skills Trainings</p>
          <p className="date">
            <i class="far fa-calendar-check"></i> February 2018
          </p>
          <p className="desc">
            In collaboration with the IMDTEC Tunisie, IEEE EMBS INSAT SB has put
            at the disposal of some of its members a certified ISO 17025
            training.
          </p>
          <img src={iso_training} alt="pic" />
          <p className="date">
            <i class="far fa-calendar-check"></i> November, 2018
          </p>
          <p className="desc">
            IEEE EMBS chapter INSAT gave an introduction to Bio-informatics
            through a workshop combining biology, computer science and
            mathematics conducted by Mr Ali Chamkhi
          </p>
          <img src={python_training} alt="pic" />
        </Col>

        <Col className="box" md={{ span: 5 }} sm={{ span: 5 }}>
          <p>
            <i class="fas fa-cogs"></i>
          </p>
          <p className="title-box">Soft Skills Trainings</p>
          <p className="date">
            <i class="far fa-calendar-check"></i> November 2017
          </p>
          <p className="desc">
            IEEE EMBS chapter INSAT was honored to provide a Community
            Management training session with Mrs Amal Monsri
          </p>
          <img src={community_management_training} alt="pic" />
          <p className="date">
            <i class="far fa-calendar-check"></i>November, 2017
          </p>
          <p className="desc">
            IEEE EMBS chapter INSAT, in collaboration with Mrs Aziza Inoubli and
            Mr Ali Bouslimi, offered to students a professional Public Speaking
            training Session.
          </p>
          <img src={public_speaking_training} alt="pic" />
        </Col>
      </Row>
    </Container>
  );
};

export default Trainings;
