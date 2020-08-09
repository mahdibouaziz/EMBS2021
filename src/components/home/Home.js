import React from "react";
import CarouselPage from "./CarouselPage";
import { Container } from "react-bootstrap";
import About from "./About";
import LastActivities from "./LastActivities";

const Home = () => {
  return (
    <div>
      <CarouselPage />
      <Container>
        <About />
        <LastActivities />
      </Container>
    </div>
  );
};

export default Home;
