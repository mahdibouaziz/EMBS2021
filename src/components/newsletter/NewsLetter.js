import React from "react";
import pic from "./img/pic.jpg";
import Charity from "./Charity";
import Collaboration from "./Collaboration";
import { Wrapper, BgImage, Content } from "../bannerElements";

const NewsLetter = () => {
  return (
    <div>
      <Wrapper>
        <BgImage src={pic}></BgImage>
        <Content>
          <h1 className="banner-text">NewsLetter</h1>
        </Content>
      </Wrapper>
      <Charity />
      <Collaboration />
    </div>
  );
};

export default NewsLetter;
