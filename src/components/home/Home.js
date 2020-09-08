import React from "react";
import CarouselPage from "./CarouselPage";
import Team from "./Team";
import Sponsors from "./Sponsors";
import FeedBack from "./FeedBack";
import { motion } from "framer-motion";
import { pageTransition } from "../bannerElements";

const Home = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
      <CarouselPage />
      <Team />
      <Sponsors />
      <FeedBack />
    </motion.div>
  );
};

export default Home;
