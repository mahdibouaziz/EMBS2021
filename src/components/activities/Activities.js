import React from "react";
import pic from "./img/events/biiot_challenge.jpg";
import "./styleAct.css";
import Events from "./Events";
import Trainings from "./Trainings";
import Visits from "./Visits";

const Activities = () => {
  return (
    <div>
      <div className="banner" style={{ backgroundImage: `url(${pic})` }}>
        <h1 className="banner-text">Activities</h1>
      </div>
      <Events />
      <Trainings />
      <Visits />
    </div>
  );
};

export default Activities;
