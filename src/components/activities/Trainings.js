import React from "react";
import { Container, Row } from "react-bootstrap";
import community_management_training from "./img/trainings/community_management_training.webp";
import iso_training from "./img/trainings/iso_training.webp";
import public_speaking_training from "./img/trainings/public_speaking_training.webp";
import python_training from "./img/trainings/python_training.webp";

const Trainings = () => {
  return (
    <div className="training-section">
      <Container>
        {/* check https://github.com/michalsnik/aos#animations for the animation */}
        <Row>
          <h1 className="title">Trainings We Provide</h1>
          <p className="body paragraph">
            IEEE INSAT EMBS Chapter often provides several events in different
            domains, here are our top 4 for the previous years.
          </p>
        </Row>

        <Row className="main-row">
          <div className="act-boxes">
            <p className="training-icon  training-icon-1">
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
          </div>

          <div className="act-boxes">
            <p className="training-icon">
              <i className="fas fa-briefcase"></i>
            </p>
            <p className="training-title">Soft Skills Trainings</p>
            <p className="training-date">
              <i className="far fa-calendar-check"></i> November 2017
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
              <i className="far fa-calendar-check"></i> November 2017
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
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Trainings;
