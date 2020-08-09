import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import act1 from "./img/activities/act1.png";
import act2 from "./img/activities/act2.png";
import act3 from "./img/activities/act3.png";

const LastActivities = () => {
  return (
    <section className="activities-section">
      <Row>
        <h1 className="title">Last Activities</h1>
      </Row>
      <Row className="row-activities">
        {/* Act1 */}
        <Col className="box-activities" lg={{ span: 3 }} md={7}>
          <Row>
            <Col>
              <img src={act1} alt="act1" />
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Title here</h2>
              <p>short description</p>
              <Button className="mb-3" variant="outline-primary" block>
                More
              </Button>
            </Col>
          </Row>
        </Col>

        <Col className="box-activities" lg={{ span: 3 }} md={7}>
          <Row>
            <Col>
              <img src={act2} alt="act2" />
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Title here</h2>
              <p>short description</p>
              <Button className="mb-3" variant="outline-primary" block>
                More
              </Button>
            </Col>
          </Row>
        </Col>

        <Col className="box-activities" lg={{ span: 3 }} md={7}>
          <Row>
            <Col>
              <img src={act3} alt="act3" />
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Title here</h2>
              <p>short description</p>
              <Button className="mb-3" variant="outline-primary" block>
                More
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default LastActivities;
