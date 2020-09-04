import React from "react";
import { Container, Row } from "react-bootstrap";
import img1 from "./img/collabs/img1.jpg";
import img2 from "./img/collabs/img2.jpg";
import img3 from "./img/collabs/img3.jpg";
import img4 from "./img/collabs/img4.jpg";

const Collaboration = () => {
  return (
    <section className="collab-section">
      <Container>
        <Row>
          <h1 className="title">Events We Participed In</h1>
        </Row>
        <Row>
          <p className="body paragraph">
            Our chapter takes part in yearly events, such as IEEE day, TSYP.. by
            organising and attending them along with other INSAT student branch
            chapters.
          </p>
        </Row>
        <Row className="main-row">
          <div className="collab-box">
            <a
              href="https://www.facebook.com/pg/IeeeInsatStudentBranch/photos/?tab=album&album_id=1980250082013551&ref=page_internal"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={img1} alt="" />
            </a>

            <div className="main-row-text">
              <h2>IEEE Day</h2>
              <p className="views">
                <i className="far fa-eye"></i> 1k Views
                <br />
                <i className="far fa-comments"></i> 07{"  "}
                <i className="fas fa-share"></i> 14
              </p>
            </div>
          </div>
          <div className="collab-box">
            <a
              href="https://www.facebook.com/pg/IeeeInsatStudentBranch/photos/?tab=album&album_id=2085121378193087&ref=page_internal"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={img2} alt="" />
            </a>

            <div className="main-row-text">
              <h2>TSYP</h2>
              <p className="views">
                <i className="far fa-eye"></i> 2k Views
                <br />
                <i className="far fa-comments"></i> 14{"  "}
                <i className="fas fa-share"></i> 22
              </p>
            </div>
          </div>
          <div className="collab-box">
            <a
              href="https://www.facebook.com/pg/EMBS.INSAT/photos/?tab=album&album_id=313871312627473&ref=page_internal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={img3} alt="" />
            </a>

            <div className="main-row-text">
              <h2>EMBS Germany</h2>
              <p className="views">
                <i className="far fa-eye"></i> 209 Views
                <br />
                <i className="far fa-comments"></i> 02{"  "}
                <i className="fas fa-share"></i> 06
              </p>
            </div>
          </div>
          <div className="collab-box">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              {" "}
              <img src={img4} alt="" />
            </a>

            <div className="main-row-text">
              <h2>Summer School</h2>
              <p className="views">
                <i className="far fa-eye"></i> 1.8k Views
                <br />
                <i className="far fa-comments"></i> 14{"  "}
                <i className="fas fa-share"></i> 22
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Collaboration;
