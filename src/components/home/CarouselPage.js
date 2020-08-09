import React from "react";
import carr5 from "./img/carousel/carr5.jpg";
import carr2 from "./img/carousel/carr2.jpg";
import carr3 from "./img/carousel/carr1.jpg";

import { Carousel } from "react-bootstrap";
// import Typical from "react-typical";
import { Link } from "react-router-dom";

const CarouselPage = () => {
  return (
    <Carousel
      indicators={false}
      interval={3000}
      style={{ position: "relative", zIndex: "0" }}
    >
      <Carousel.Item className="item">
        <div
          className="banner"
          style={{ backgroundImage: `url(${carr5})` }}
        ></div>
        <Carousel.Caption>
          <div className="carousel-caption">
            {/* Check this for animation https://animate.style/ */}
            <h2
              className="animate__animated animate__fadeInDown"
              style={{ animationDelay: "1s" }}
            >
              IEEE INSAT <span>EMBS</span> Chapter
            </h2>
            <h3
              className="animate__animated animate__fadeInDown"
              style={{ animationDelay: "1s" }}
            >
              Your Global Connection To The World Of Biomedical Engineering
            </h3>
            <p
              className="animate__animated animate__fadeInDown"
              style={{ animationDelay: "1s" }}
            >
              <Link to="#">Contact us</Link>
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item">
        <div
          className="banner"
          style={{ backgroundImage: `url(${carr2})` }}
        ></div>
        <Carousel.Caption>
          <div className="carousel-caption">
            <h2
              className="animate__animated animate__fadeInDown"
              style={{ animationDelay: "1s" }}
            >
              IEEE INSAT <span>EMBS</span> Chapter
            </h2>
            <h3
              className="animate__animated animate__fadeInDown"
              style={{ animationDelay: "1s" }}
            >
              Your Global Connection To The World Of Biomedical Engineering
            </h3>
            <p
              className="animate__animated animate__fadeInDown"
              style={{ animationDelay: "1s" }}
            >
              <Link to="#">Contact us</Link>
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item">
        <div
          className="banner"
          style={{ backgroundImage: `url(${carr3})` }}
        ></div>
        <Carousel.Caption>
          <div className="carousel-caption">
            <h2
              className="animate__animated animate__fadeInDown"
              style={{ animationDelay: "1s" }}
            >
              IEEE INSAT <span>EMBS</span> Chapter
            </h2>
            <h3
              className="animate__animated animate__fadeInDown"
              style={{ animationDelay: "1s" }}
            >
              Your Global Connection To The World Of Biomedical Engineering
            </h3>
            <p
              className="animate__animated animate__fadeInDown"
              style={{ animationDelay: "1s" }}
            >
              <Link to="#">Contact us</Link>
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselPage;
