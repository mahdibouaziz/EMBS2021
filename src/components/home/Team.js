import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "./homeStyle.css";
import AOS from "aos";
import "aos/dist/aos.css";
import pic from "./img/team/pic.png";

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 1100 });
  }, []);
  return (
    <section className="team-section">
      {/* check https://github.com/michalsnik/aos#animations for the animation */}
      <Row>
        <h1 className="title">
          Our<span> Team</span>
        </h1>
      </Row>

      <Row className="main-row">
        <Col className="box" lg={{ span: 3 }} md={{ span: 5 }} sm={{ span: 5 }}>
          <img src={pic} alt="pic" />
          <p className="name">Med Aziz Hadj Nasr</p>
          <p className="post">Chairmain</p>
          <p className="social">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
          </p>
        </Col>
        <Col className="box" lg={{ span: 3 }} md={{ span: 5 }} sm={{ span: 5 }}>
          <img src={pic} alt="pic" />
          <p className="name">Med Aziz Hadj Nasr</p>
          <p className="post">Chairmain</p>
          <p className="social">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
          </p>
        </Col>
        <Col className="box" lg={{ span: 3 }} md={{ span: 5 }} sm={{ span: 5 }}>
          <img src={pic} alt="pic" />
          <p className="name">Med Aziz Hadj Nasr</p>
          <p className="post">Chairmain</p>
          <p className="social">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
          </p>
        </Col>
        <Col className="box" lg={{ span: 3 }} md={{ span: 5 }} sm={{ span: 5 }}>
          <img src={pic} alt="pic" />
          <p className="name">Med Aziz Hadj Nasr</p>
          <p className="post">Chairmain</p>
          <p className="social">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
          </p>
        </Col>
        <Col className="box" lg={{ span: 3 }} md={{ span: 5 }} sm={{ span: 5 }}>
          <img src={pic} alt="pic" />
          <p className="name">Med Aziz Hadj Nasr</p>
          <p className="post">Chairmain</p>
          <p className="social">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
          </p>
        </Col>
        <Col className="box" lg={{ span: 3 }} md={{ span: 5 }} sm={{ span: 5 }}>
          <img src={pic} alt="pic" />
          <p className="name">Med Aziz Hadj Nasr</p>
          <p className="post">Chairmain</p>
          <p className="social">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
          </p>
        </Col>
        <Col className="box" lg={{ span: 3 }} md={{ span: 5 }} sm={{ span: 5 }}>
          <img src={pic} alt="pic" />
          <p className="name">Med Aziz Hadj Nasr</p>
          <p className="post">Chairmain</p>
          <p className="social">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
          </p>
        </Col>
        <Col className="box" lg={{ span: 3 }} md={{ span: 5 }} sm={{ span: 5 }}>
          <img src={pic} alt="pic" />
          <p className="name">Med Aziz Hadj Nasr</p>
          <p className="post">Chairmain</p>
          <p className="social">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default Team;
