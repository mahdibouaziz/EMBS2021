import React, { useState } from "react";
import pic from "./img/pic.webp";
import "./styleContact.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import { Wrapper, Content, BgImage, pageTransition } from "../bannerElements";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import { MdLocationOn, MdMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { motion } from "framer-motion";

const MyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  > * {
    flex-grow: 1;
  }
`;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [warningMsg, setWarningMsg] = useState(false);

  const handleClick = (e) => {
    if (name === "" || email === "" || subject === "" || message === "") {
      setWarningMsg(true);
      console.log(warningMsg);
    } else {
      setWarningMsg(false);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
      <Wrapper>
        <BgImage src={pic}></BgImage>
        <Content>
          <h1 className="banner-text">Contact</h1>
        </Content>
      </Wrapper>

      <div className="contact-section">
        <Container>
          <Row>
            <h1 className="title">
              Get In<span> Touch</span>
            </h1>
          </Row>
          <Row>
            <p className="body paragraph">
              Do you wanna know more about IEEE EMBS INSAT? Don't hesitate to
              contact us!.
            </p>
          </Row>
          <Row className="contact-row">
            <Col md={8}>
              <form>
                <MyWrapper>
                  <input
                    className="input input-name"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    className="input input-email"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </MyWrapper>

                <input
                  className="input"
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                  className="input"
                  type="textarea"
                  name="msg"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />

                {warningMsg ? (
                  <p className="error-contact">
                    Please fill the required fields above.
                  </p>
                ) : (
                  ""
                )}

                <Button
                  className="btn btn-contact"
                  variant="primary"
                  size="lg"
                  block
                  onClick={handleClick}
                >
                  SEND MESSAGE
                </Button>
              </form>
            </Col>
            <Col md={4}>
              <div className="info">
                <h3 className="title">
                  <MdLocationOn /> Location
                </h3>
                <p className="paragraph">
                  INSAT Centre Urbain Nord BP 676 - 1080 Tunis Cedex
                </p>
                <h3 className="title">
                  <MdMailOutline /> E-mail
                </h3>
                <p className="paragraph">embs-insat@outlook.com</p>
                <h3 className="title">
                  <FiPhoneCall /> Phone
                </h3>
                <p className="paragraph">(+216) 53 737 757</p>
                <p className="social">
                  <a
                    href="https://www.facebook.com/EMBS.INSAT"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* <i className="fab fa-facebook-f"></i> */}
                    <SiFacebook className="social-icon" />
                  </a>
                  <a
                    href="https://www.instagram.com/ieee.embs.insat/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* <i className="fab fa-instagram"></i> */}
                    <SiInstagram className="social-icon" />
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    {/* <i className="fab fa-linkedin-in"></i> */}
                    <SiLinkedin className="social-icon" />
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
    </motion.div>
  );
};

export default Contact;
