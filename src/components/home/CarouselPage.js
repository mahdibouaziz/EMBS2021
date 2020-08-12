import React from "react";
import lab from "./img/carousel/lab.png";
import medic from "./img/carousel/medic.png";
import virus from "./img/carousel/virus.png";
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
          style={{ backgroundImage: `url(${lab})` }}
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
          style={{ backgroundImage: `url(${medic})` }}
        ></div>
        <Carousel.Caption>
          <div className="carousel-caption">
            <h2
              className="animate__animated animate__fadeInDown"
              style={{ animationDelay: "1s" }}
            >
              We work to enhance <br />
              <span>Students Skills</span>
            </h2>
            <h3
              className="animate__animated animate__fadeInDown"
              style={{ animationDelay: "1s" }}
            >
              Through Workshops, Events, Conferences, Magasines and More...
            </h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item">
        <div
          className="banner"
          style={{ backgroundImage: `url(${virus})` }}
        ></div>
        <Carousel.Caption>
          <div className="carousel-caption">
            <h2
              className="animate__animated animate__fadeInDown"
              style={{ animationDelay: "1s" }}
            >
              <span>Ready To</span> <br />
              Be part of our journey?
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
              <Link to="#">GET STARTED</Link>
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselPage;
