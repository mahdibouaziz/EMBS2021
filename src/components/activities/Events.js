import React from "react";
import { Container, Row } from "react-bootstrap";
import biiot from "./img/events/biiot.webp";
import biiot_challenge from "./img/events/biiot_challenge.webp";
import health_tech from "./img/events/health_tech.webp";
import nanobang from "./img/events/nanobang.webp";

const events = [
  {
    link:
      "https://www.facebook.com/pg/EMBS.INSAT/photos/?tab=album&album_id=313884439292827",
    image: biiot,
    date: 2019,
    desc: "BIIOT Challenge",
    views: "2k Views",
    comments: "02",
    share: "06",
  },
  {
    link:
      "https://www.facebook.com/pg/EMBS.INSAT/photos/?tab=album&album_id=297151707632767&ref=page_internal",
    image: health_tech,
    date: "2018",
    desc: "Health Tech",
    views: "1k Views",
    comments: "02",
    share: "04",
  },
  {
    link:
      "https://www.facebook.com/pg/EMBS.INSAT/photos/?tab=album&album_id=378824322798838&ref=page_internal",
    image: biiot_challenge,
    date: "2019",
    desc: "BIIOT",
    views: "2k Views",
    comments: "05",
    share: "07",
  },
  {
    link: "#",
    image: nanobang,
    date: "2017",
    desc: "NanoBang",
    views: "1.6k Views",
    comments: "04",
    share: "05",
  },
];

const Events = () => {
  return (
    <section className="event-section">
      <Container>
        {/* check https://github.com/michalsnik/aos#animations for the animation */}
        <Row>
          <h1 className="title">Events We Organize</h1>
          <p className="body paragraph">
            IEEE INSAT EMBS Chapter organizes annually multiple events, here is
            a glimpse of our annual events.
          </p>
        </Row>

        <Row className="main-row">
          {events.map((e) => (
            <div key={e.link} className="act-boxes">
              <a href={e.link} target="_blank" rel="noopener noreferrer">
                <img src={e.image} alt="pic" />
              </a>
              <div className="main-row-text">
                <p className="date">
                  <i className="far fa-calendar-check"></i> {e.date}
                </p>
                <p className="desc">{e.desc}</p>
                <p className="views">
                  <i className="far fa-eye"></i> {e.views}
                  <br />
                  <i className="far fa-comments"></i> {e.comments}
                  {"  "}
                  <i className="fas fa-share"></i> {e.share}
                </p>
              </div>
            </div>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Events;
