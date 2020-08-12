import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "./homeStyle.css";
import AOS from "aos";
import "aos/dist/aos.css";

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
      <Row data-aos="fade-right"></Row>
    </section>
  );
};

export default Team;
