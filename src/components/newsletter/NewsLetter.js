import React from "react";
import pic from "./img/pic.jpg";
import Charity from "./Charity";
import Collaboration from "./Collaboration";

const NewsLetter = () => {
  return (
    <div>
      <div className="banner" style={{ backgroundImage: `url(${pic})` }}>
        <h1 className="banner-text">NewsLetter</h1>
      </div>
      <Charity />
      <Collaboration />
    </div>
  );
};

export default NewsLetter;
