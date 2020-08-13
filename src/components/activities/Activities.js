import React from "react";
import pic from "./img/events/biiot_challenge.jpg";
import "./styleAct.css";
import Events from "./Events";

const Activities = () => {
  return (
    <div>
      <div className="banner" style={{ backgroundImage: `url(${pic})` }}>
        <h1 className="banner-text">Activities</h1>
      </div>
      <Events />
    </div>
  );
};

export default Activities;
