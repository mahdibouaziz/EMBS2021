import React from "react";
import { Row, Container } from "react-bootstrap";
import "./homeStyle.css";
import pic from "./img/team/pic.png";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";

const ourTeam = [
  {
    image: pic,
    name: "Farouk Saaidia",
    post: "Chairmain",
    fb: "https://www.facebook.com/saaidia.farouk",
    insta: "https://www.instagram.com/farouk.saaidia/",
    linkedin: "",
  },
  {
    image: pic,
    name: "Emna Guesmi",
    post: "Vice Chair",
    fb: "https://www.facebook.com/emna.guesmi.0123",
    insta: "https://www.instagram.com/emna.guesmi12/",
    linkedin: "",
  },
  {
    image: pic,
    name: "Emna Hdili",
    post: "HR Manager",
    fb: "https://www.facebook.com/emna.hdili",
    insta: "https://www.instagram.com/emnahdili/",
    linkedin: "",
  },
  {
    image: pic,
    name: "Houssem Zitoun",
    post: "General Secretary",
    fb: "https://www.facebook.com/houssem.zitoun.2k",
    insta: "https://www.instagram.com/houssamzitoun/",
    linkedin: "",
  },
  {
    image: pic,
    name: "Rihab Darghouthi",
    post: "Training Manager",
    fb: "https://www.facebook.com/rihab.darghouthi",
    insta: "https://www.instagram.com/rihab_darghouthi/",
    linkedin: "",
  },
  {
    image: pic,
    name: "Selma Ayechi",
    post: "Media Manager",
    fb: "https://www.facebook.com/selma.ayachi",
    insta: "https://www.instagram.com/selmaayachi/",
    linkedin: "",
  },
  {
    image: pic,
    name: "Aicha Hedda",
    post: "Treasurer",
    fb: "https://www.facebook.com/aicha.hedda.52",
    insta: "https://www.instagram.com/aycha_hedda/",
    linkedin: "",
  },
  {
    image: pic,
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
                  <RiLinkedinFill className="social-icon" />
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
