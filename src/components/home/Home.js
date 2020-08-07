import React from "react";
import CarouselPage from "./CarouselPage";
import { Container, Row, Col } from "react-bootstrap";
import About from "./About";
import LastActivities from "./LastActivities";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#f3f3f3", height: "1000px" }}>
      <CarouselPage />
      <Container>
        <Row>
          <About />
        </Row>
        <Row>
          <LastActivities />
        </Row>
      </Container>
    </div>
  );
};

export default Home;
