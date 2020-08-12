import React from "react";
import CarouselPage from "./CarouselPage";
import { Container } from "react-bootstrap";
import Team from "./Team";

const Home = () => {
  return (
    <div>
      <CarouselPage />
      <Container>
        <Team />
      </Container>
    </div>
  );
};

export default Home;
