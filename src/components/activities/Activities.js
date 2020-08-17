import React from "react";
import "./styleAct.css";
import Events from "./Events";
import Trainings from "./Trainings";
import Visits from "./Visits";
import act from "./img/events/biiot_challenge.jpg";

const Activities = () => {
  return (
    <div>
      <div className="banner" style={{ backgroundImage: `url(${act})` }}>
        <h1 className="banner-text">Activities</h1>
      </div>
      <Events />
      <Trainings />
      <Visits />
    </div>
  );
};

export default Activities;
