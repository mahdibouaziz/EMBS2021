import React from "react";
import { Row, Container } from "react-bootstrap";
import "./homeStyle.css";
import pic from "./img/team/pic.png";

const Team = () => {
  return (
    <section className="team-section">
      {/*  check https://github.com/michalsnik/aos#animations for the animation */}
      <Container>
        <Row>
          <h1 className="title">Our Team</h1>
        </Row>

        <Row className="main-row">
          <div className="team-boxes">
            <img src={pic} alt="pic" />
            <p className="name">Farouk Saaidia</p>
            <p className="post">Chairmain</p>
            <p className="social">
              <a
                href="https://www.facebook.com/saaidia.farouk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/farouk.saaidia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.instagram.com/farouk.saaidia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </p>
          </div>
          <div className="team-boxes">
            <img src={pic} alt="pic" />
            <p className="name">Emna Guesmi</p>
            <p className="post">Vice Chair</p>
            <p className="social">
              <a
                href="https://www.facebook.com/emna.guesmi.0123"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/emna.guesmi12/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.instagram.com/emna.guesmi12/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </p>
          </div>
          <div className="team-boxes">
            <img src={pic} alt="pic" />
            <p className="name">Emna Hdili</p>
            <p className="post">HR Manager</p>
            <p className="social">
              <a
                href="https://www.facebook.com/emna.hdili"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/emnahdili/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.instagram.com/emnahdili/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </p>
          </div>
          <div className="team-boxes">
            <img src={pic} alt="pic" />
            <p className="name">Houssem Zitoun</p>
            <p className="post">General Secretary</p>
            <p className="social">
              <a
                href="https://www.facebook.com/houssem.zitoun.2k"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/houssamzitoun/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.instagram.com/houssamzitoun/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </p>
          </div>
          <div className="team-boxes">
            <img src={pic} alt="pic" />
            <p className="name">Rihab Darghouthi</p>
            <p className="post">Training Manager</p>
            <p className="social">
              <a
                href="https://www.facebook.com/rihab.darghouthi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/rihab_darghouthi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/rihab.darghouthi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </p>
          </div>
          <div className="team-boxes">
            <img src={pic} alt="pic" />
            <p className="name">Selma Ayechi</p>
            <p className="post">Media Manager</p>
            <p className="social">
              <a
                href="https://www.facebook.com/selma.ayachi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/selmaayachi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.instagram.com/selmaayachi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </p>
          </div>
          <div className="team-boxes">
            <img src={pic} alt="pic" />
            <p className="name">Aicha Hedda</p>
            <p className="post">Treasurer</p>
            <p className="social">
              <a
                href="https://www.facebook.com/aicha.hedda.52"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/aycha_hedda/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.instagram.com/aycha_hedda/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </p>
          </div>
          <div className="team-boxes">
            <img src={pic} alt="pic" />
            <p className="name">Med Mahdi Bouaziz</p>
            <p className="post">Webmaster</p>
            <p className="social">
              <a
                href="https://www.facebook.com/mahdi.bouaziz.319"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/mahdii.bouaziz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.instagram.com/mahdii.bouaziz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </p>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Team;
