import React from "react";
import "./styleAct.css";
import Events from "./Events";
import Trainings from "./Trainings";
import Visits from "./Visits";
import act from "./img/act.png";
import { Wrapper, BgImage, Content } from "../bannerElements";

const Activities = () => {
  return (
    <div>
      <Wrapper>
        <BgImage src={act}></BgImage>
        <Content>
          <h1 className="banner-text">Activities</h1>
        </Content>
      </Wrapper>
      <Events />
      <Trainings />
      <Visits />
    </div>
  );
};

export default Activities;
