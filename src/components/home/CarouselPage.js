import React from "react";
import lab from "./img/carousel/lab.png";
import medic from "./img/carousel/medic.png";
import virus from "./img/carousel/virus.png";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import styled from "styled-components";

const Right = styled(GoChevronRight)`
  width: 3.5rem;
  height: 3.5rem;
  color: blue;
`;

const Left = styled(GoChevronLeft)`
  width: 3.5rem;
  height: 3.5rem;
  color: blue;
`;

// backdrop-filter: brightness(60%);

const CarouselPage = () => {
  return (
    <Carousel
      indicators={false}
      interval={3500}
      style={{ position: "relative", zIndex: "0" }}
      prevIcon={<Left></Left>}
      nextIcon={<Right></Right>}
    >
      <Carousel.Item className="item">
        <div
          className="banner banner-carr"
          style={{ backgroundImage: `url(${lab})` }}
        ></div>
        <Carousel.Caption>
          <div className="carousel-caption">
            {/* Check this for animation https://animate.style/ */}
            <h2
              className="animate__animated animate__fadeInDown"
              style={{ animationDelay: ".5s" }}
            >
              IEEE INSAT <span>EMBS</span> Chapter
            </h2>
            <h3
              className="animate__animated animate__fadeInDown"
              style={{ animationDelay: ".7s" }}
            >
              Your Global Connection To The World Of Biomedical Engineering
            </h3>
            <p
              className="animate__animated animate__fadeInDown"
              style={{ animationDelay: ".7s" }}
            >
              <Link to="/about">GET TO KNOW US</Link>
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item">
        <div
          className="banner banner-carr"
          style={{ backgroundImage: `url(${medic})` }}
        ></div>
        <Carousel.Caption>
          <div className="carousel-caption">
            <h2
              className="animate__animated animate__fadeInDown"
              style={{ animationDelay: ".5s" }}
            >
              We work to enhance <br />
              <span>Students Skills</span>
            </h2>
            <h3
              className="animate__animated animate__fadeInDown"
              style={{ animationDelay: ".7s" }}
            >
              Through Workshops, Events, Conferences, Magasines and More...
            </h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item">
        <div
          className="banner banner-carr"
          style={{ backgroundImage: `url(${virus})` }}
        ></div>
        <Carousel.Caption>
          <div className="carousel-caption">
            <h2
              className="animate__animated animate__fadeInDown"
              style={{ animationDelay: ".5s" }}
            >
              <span>Ready To</span> <br />
              Be part of our journey?
            </h2>
            <h3
              className="animate__animated animate__fadeInDown"
              style={{ animationDelay: ".7s" }}
            >
              Your Global Connection To The World Of Biomedical Engineering
            </h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselPage;
