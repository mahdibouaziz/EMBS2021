import React from "react";
import { Container, Row } from "react-bootstrap";
import img1 from "./img/collabs/img1.webp";
import img2 from "./img/collabs/img2.webp";
import img3 from "./img/collabs/img3.webp";
import img4 from "./img/collabs/img4.webp";

const collab = [
  {
    link:
      "https://www.facebook.com/pg/IeeeInsatStudentBranch/photos/?tab=album&album_id=1980250082013551&ref=page_internal",
    image: img1,
    title: "IEEE Day",
    views: " 1k Views",
    comments: "07 ",
    share: "14",
  },
  {
    link:
      "https://www.facebook.com/pg/IeeeInsatStudentBranch/photos/?tab=album&album_id=2085121378193087&ref=page_internal",
    image: img2,
    title: "TSYP",
    views: " 2k Views",
    comments: "14 ",
    share: "22",
  },
  {
    link:
      "https://www.facebook.com/pg/IeeeInsatStudentBranch/photos/?tab=album&album_id=1980250082013551&ref=page_internal",
    image: img3,
    title: "EMBS Germany",
    views: " 209 Views",
    comments: "02 ",
    share: "06",
  },
  {
    link: "https://www.facebook.com/media/set/?set=a.384326102248660&type=3",
    image: img4,
    title: "Summer School",
    views: "1.8k Views",
    comments: "14 ",
    share: "22",
  },
];

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
          {collab.map((e) => (
            <div key={e.link} className="collab-box">
              <a href={e.link} target="_blank" rel="noopener noreferrer">
                {" "}
                <img src={e.image} alt="" />
              </a>

              <div className="main-row-text">
                <h2>{e.title}</h2>
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

export default Collaboration;
