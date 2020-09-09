import React from "react";
import { Container, Row } from "react-bootstrap";
import "./styleNews.css";
import pic2016 from "./img/charity/charity_2016.webp";
import pic2018 from "./img/charity/charity_2018.webp";

const Charity = () => {
  return (
    <section className="charity-section">
      <Container>
        <Row>
          <h1 className="title">Charity Work</h1>
          <p className="body paragraph">
            Every year EMBS_INSAT organizes a charity day.
            <br />A day where we go visit a children’s hospital. We spend the
            day with them doing a bunch of activities, having fun and putting a
            smile on their faces.
          </p>
        </Row>
        <Row className="main-row">
          <div className="char-box box1">
            <img src={pic2016} alt="" />
            <div>
              <h2>Charity Day 2016</h2>
              <p>
                The event took place on February 14th which in fact coincides
                with Valentine’s Day,
              </p>
              <p>
                the international day of sharing and making people feel
                important and special.
              </p>
              <p>
                That day was dedicated to the unfortunate children at Charles
                Nicolle’s hospital
              </p>
              <p>
                a variety of workshops such as; the DIY (do-it-yourself)
                workshop.
              </p>
              <p>
                Plenty of handmade crafts were created such as Snow white and
                Superman’s cardboards
              </p>
              <p>There was also a photography workshop!</p>
            </div>
          </div>
          <div className="char-box box2">
            <div>
              <h2>And More is yet</h2>
              <h3>TO COME SOON</h3>
              <p>The new executive board of</p>
              <p>
                IEEE INSAT Engineering in Medicine and Biology Society Chapter
                team
              </p>
              <p>
                is preparing a very varied and interesting program for this
                year.
              </p>
              <p>It includes multiple charity activities and more.</p>
              <p>So stay tuned ! EMBS is preparing something big!</p>
            </div>
          </div>
          <div className="char-box box3">
            <div>
              <img src={pic2018} alt="" />
              <h2>Charity Day 2019</h2>
              <p>We went to “Bechir Hamza Children’s Hospital“</p>
              <p>offered them gifts and spent the day having fun</p>
              <p>
                and putting a smile on their faces by doing a bunch of
                activities such as plays
              </p>
              <p>in collaboration with our friends from “Theatro INSAT“.</p>
              <p>Donation we collected where from an “Eat to Donate“ stand</p>
              <p>we held during our event ‘Health Tech’.</p>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Charity;
