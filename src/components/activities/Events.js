import React from "react";
import { Container, Row } from "react-bootstrap";
import biiot from "./img/events/biiot.jpg";
import biiot_challenge from "./img/events/biiot_challenge.jpg";
import health_tech from "./img/events/health_tech.jpg";
import nanobang from "./img/events/nanobang.jpg";

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
          <div className="act-boxes">
            <a
              href="https://www.facebook.com/pg/EMBS.INSAT/photos/?tab=album&album_id=313884439292827"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={biiot} alt="pic" />
            </a>
            <div className="main-row-text">
              <p className="date">
                <i className="far fa-calendar-check"></i> 2019
              </p>
              <p className="desc">BIIOT Challenge</p>
              <p className="views">
                <i className="far fa-eye"></i> 2k Views
                <br />
                <i className="far fa-comments"></i> 02{"  "}
                <i className="fas fa-share"></i> 06
              </p>
            </div>
          </div>
          <div className="act-boxes">
            <a
              href="https://www.facebook.com/pg/EMBS.INSAT/photos/?tab=album&album_id=297151707632767&ref=page_internal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={health_tech} alt="pic" />
            </a>

            <div className="main-row-text">
              <p className="date">
                <i className="far fa-calendar-check"></i> 2018
              </p>
              <p className="desc">Health Tech</p>
              <p className="views">
                <i className="far fa-eye"></i> 1k Views
                <br />
                <i className="far fa-comments"></i> 02{" "}
                <i className="fas fa-share"></i> 06
              </p>
            </div>
          </div>
          <div className="act-boxes">
            <a
              href="https://www.facebook.com/pg/EMBS.INSAT/photos/?tab=album&album_id=378824322798838&ref=page_internal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={biiot_challenge} alt="pic" />
            </a>
            <div className="main-row-text">
              <p className="date">
                <i className="far fa-calendar-check"></i> 2019
              </p>
              <p className="desc">BIIOT</p>
              <p className="views">
                <i className="far fa-eye"></i> 1k Views
                <br />
                <i className="far fa-comments"></i> 02{" "}
                <i className="fas fa-share"></i> 06
              </p>
            </div>
          </div>
          <div className="act-boxes">
            <img src={nanobang} alt="pic" />
            <div className="main-row-text">
              <p className="date">
                <i className="far fa-calendar-check"></i> 2017
              </p>
              <p className="desc">NanoBang</p>
              <p className="views">
                <i className="far fa-eye"></i> 209 Views
                <br />
                <i className="far fa-comments"></i> 02{" "}
                <i className="fas fa-share"></i> 06
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Events;
