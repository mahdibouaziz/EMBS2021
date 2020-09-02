import React from "react";
import CarouselPage from "./CarouselPage";
import Team from "./Team";
import Sponsors from "./Sponsors";
import FeedBack from "./FeedBack";

const Home = () => {
  return (
    <div>
      <CarouselPage />
      <Team />
      <Sponsors />
      <FeedBack />
    </div>
  );
};

export default Home;
