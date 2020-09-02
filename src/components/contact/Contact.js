import React from "react";
import pic from "./img/pic.jpg";
import "./styleContact.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <div className="banner" style={{ backgroundImage: `url(${pic})` }}>
        <h1 className="banner-text">Contact Us</h1>
      </div>
      <div className="contact-section">
        <Container>
          <Row>
            <h1 className="title">
              Get In<span> Touch</span>
            </h1>
          </Row>
          <Row>
            <p className="body">
              Do you wanna know more about IEEE EMBS INSAT? Don't hesitate to
              contact us!.
            </p>
          </Row>
          <Row className="contact-row">
            <Col md={8}>
              <form>
                <input
                  className="input input-name"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                />
                <input
                  className="input input-email"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <input
                  className="input"
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                />
                <textarea
                  className="input"
                  type="textarea"
                  name="msg"
                  placeholder="Your Message"
                />
                <Button className="btn" variant="primary" size="lg" block>
                  SEND MESSAGE
                </Button>
              </form>
            </Col>
            <Col md={4}>
              <div className="info">
                <h3>
                  <i className="fas fa-location-arrow"></i> Location
                </h3>
                <p>INSAT Centre Urbain Nord BP 676 - 1080 Tunis Cedex</p>
                <h3>
                  <i className="far fa-envelope"></i> E-mail
                </h3>
                <p>embs-insat@outlook.com</p>
                <h3>
                  <i className="fas fa-phone-square-alt"></i> Phone
                </h3>
                <p>(+216) 58 869 350</p>
                <p className="social">
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Lel map hal blasa */}
      <Container fluid>
        <Row></Row>
      </Container>
    </div>
  );
};

export default Contact;
