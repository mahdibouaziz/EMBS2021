import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row className="footer-row">
          <Col className="footer-col" sm={{ span: 4, offset: 1 }}>
            <h1>EMBS LOGO</h1>
            <p>
              If you think you have the passion, attitude and capability to join
              us, don't hesitate.
            </p>
            <p>Tnajam t7ot ktiba houni</p>
          </Col>
          <Col className="footer-col" sm={{ span: 5, offset: 1 }}>
            <p>CONTACT US</p>
            <p>
              <i className="fas fa-location-arrow">
                INSAT Centre Urbain Nord BP 676 - 1080 Tunis Cedex{" "}
              </i>
            </p>
            <p>
              <i class="fas fa-phone-square-alt"> (+216) 58 869 350</i>
            </p>
            <p>
              <i className="fas fa-envelope-square"> embs-insat@outlook.com</i>
            </p>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin-in"></i>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
