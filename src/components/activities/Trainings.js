import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import community_management_training from "./img/trainings/community_management_training.jpg";
import iso_training from "./img/trainings/iso_training.jpg";
import public_speaking_training from "./img/trainings/public_speaking_training.png";
import python_training from "./img/trainings/python_training.jpg";

const Trainings = () => {
  return (
    <div style={{ backgroundColor: "#f2f2f2f2" }}>
      <Container className="section">
        {/* check https://github.com/michalsnik/aos#animations for the animation */}
        <Row>
          <h1 className="title training-header">
            <span>Trainings</span> We Provide
          </h1>
        </Row>

        <Row className="main-row">
          <Col className="box" md={{ span: 5 }} sm={{ span: 12 }}>
            <p className="training-icon">
              <i className="fas fa-cogs"></i>
            </p>
            <p className="training-title">Technical Skills Trainings</p>
            <p className="training-date">
              <i className="far fa-calendar-check"></i> February 2018
            </p>
            <p className="training-desc">
              In collaboration with the IMDTEC Tunisie, IEEE EMBS INSAT SB has
              put at the disposal of some of its members a certified ISO 17025
              training.
            </p>
            <img className="training-img" src={iso_training} alt="pic" />
            <p className="training-date">
              <i className="far fa-calendar-check"></i> November, 2018
            </p>
            <p className="training-desc">
              IEEE EMBS chapter INSAT gave an introduction to Bio-informatics
              through a workshop combining biology, computer science and
              mathematics conducted by Mr Ali Chamkhi
            </p>
            <img className="training-img" src={python_training} alt="pic" />
          </Col>

          <Col className="box" md={{ span: 5 }} sm={{ span: 12 }}>
            <p className="training-icon">
              <i className="fas fa-briefcase"></i>
            </p>
            <p className="training-title">Technical Skills Trainings</p>
            <p className="training-date">
              <i className="far fa-calendar-check"></i> February 2018
            </p>
            <p className="training-desc">
              In collaboration with the IMDTEC Tunisie, IEEE EMBS INSAT SB has
              put at the disposal of some of its members a certified ISO 17025
              training.
            </p>
            <img
              className="training-img"
              src={community_management_training}
              alt="pic"
            />
            <p className="training-date">
              <i className="far fa-calendar-check"></i> November, 2018
            </p>
            <p className="training-desc">
              IEEE EMBS chapter INSAT gave an introduction to Bio-informatics
              through a workshop combining biology, computer science and
              mathematics conducted by Mr Ali Chamkhi
            </p>
            <img
              className="training-img"
              src={public_speaking_training}
              alt="pic"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trainings;
