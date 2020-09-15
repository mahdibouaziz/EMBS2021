import React from "react";
import { Row, Container } from "react-bootstrap";
import "./homeStyle.css";
import aicha from "./img/team/aicha.webp";
import emnag from "./img/team/emnag.webp";
import emnah from "./img/team/emnah.webp";
import farouk from "./img/team/farouk.webp";
import houssem from "./img/team/houssem.webp";
import mahdi from "./img/team/mahdi.jpg";
import rihab from "./img/team/rihab.webp";
import selma from "./img/team/selma.jpg";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";

const ourTeam = [
  {
    image: farouk,
    name: "Farouk Saaidia",
    post: "Chairman",
    fb: "https://www.facebook.com/saaidia.farouk",
    insta: "https://www.instagram.com/farouk.saaidia/",
    linkedin: "",
  },
  {
    image: emnag,
    name: "Emna Guesmi",
    post: "Vice Chair",
    fb: "https://www.facebook.com/emna.guesmi.0123",
    insta: "https://www.instagram.com/emna.guesmi12/",
    linkedin: "",
  },
  {
    image: emnah,
    name: "Emna Hdili",
    post: "HR Manager",
    fb: "https://www.facebook.com/emna.hdili",
    insta: "https://www.instagram.com/emnahdili/",
    linkedin: "",
  },
  {
    image: houssem,
    name: "Houssem Zitoun",
    post: "General Secretary",
    fb: "https://www.facebook.com/houssem.zitoun.2k",
    insta: "https://www.instagram.com/houssamzitoun/",
    linkedin: "",
  },
  {
    image: rihab,
    name: "Rihab Darghouthi",
    post: "Training Manager",
    fb: "https://www.facebook.com/rihab.darghouthi",
    insta: "https://www.instagram.com/rihab_darghouthi/",
    linkedin: "",
  },
  {
    image: selma,
    name: "Selma Ayechi",
    post: "Media Manager",
    fb: "https://www.facebook.com/selma.ayachi",
    insta: "https://www.instagram.com/selmaayachi/",
    linkedin: "",
  },
  {
    image: aicha,
    name: "Aicha Hedda",
    post: "Treasurer",
    fb: "https://www.facebook.com/aicha.hedda.52",
    insta: "https://www.instagram.com/aycha_hedda/",
    linkedin: "",
  },
  {
    image: mahdi,
    name: "Med Mahdi Bouaziz",
    post: "Webmaster",
    fb: "https://www.facebook.com/mahdi.bouaziz.319",
    insta: "https://www.instagram.com/mahdii.bouaziz/",
    linkedin: "",
  },
];

const Team = () => {
  return (
    <section className="team-section">
      {/*  check https://github.com/michalsnik/aos#animations for the animation */}
      <Container>
        <Row>
          <h1 className="title">Our Team</h1>
        </Row>

        <Row className="main-row">
          {ourTeam.map((e) => (
            <div key={e.post} className="team-boxes">
              <img src={e.image} alt={e.name} />
              <p className="name">{e.name}</p>
              <p className="post">{e.post}</p>
              <p className="social">
                <a href={e.fb} target="_blank" rel="noopener noreferrer">
                  {/* <i className="fab fa-facebook-f"></i> */}
                  <SiFacebook className="social-icon" />
                </a>
                <a href={e.insta} target="_blank" rel="noopener noreferrer">
                  {/* <i className="fab fa-instagram"></i> */}
                  <SiInstagram className="social-icon" />
                </a>
                <a href={e.linkedin} target="_blank" rel="noopener noreferrer">
                  {/* <i className="fab fa-linkedin-in"></i> */}
                  <SiLinkedin className="social-icon" />
                </a>
              </p>
            </div>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Team;
