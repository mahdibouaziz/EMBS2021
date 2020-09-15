import React from "react";
import "./styleAct.css";
import Events from "./Events";
import Trainings from "./Trainings";
import Visits from "./Visits";
import act from "./img/act.jpg";
import { Wrapper, BgImage, Content, pageTransition } from "../bannerElements";
import { motion } from "framer-motion";

const Activities = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
      <Wrapper>
        <BgImage src={act}></BgImage>
        <Content>
          <h1 className="banner-text">Activities</h1>
        </Content>
      </Wrapper>
      <Events />
      <Trainings />
      <Visits />
    </motion.div>
  );
};

export default Activities;
