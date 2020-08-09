import React from "react";
import carr5 from "./img/carousel/carr5.jpg";
import carr2 from "./img/carousel/carr2.jpg";
import carr3 from "./img/carousel/carr1.jpg";
import { Carousel } from "react-bootstrap";
import Typical from "react-typical";

const CarouselPage = () => {
  return (
    <Carousel interval={7500} style={{ position: "relative", zIndex: "0" }}>
      <Carousel.Item>
        <img
          style={{ maxHeight: "74vh" }}
          className="d-block w-100"
          src={carr5}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="carousel-caption">
            <h1>IEEE INSAT EMBS Chapter</h1>
            <h3>
              Your Global Connection
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={["  To The World Of Biomedical Engineering ", 3500]}
              />
            </h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ maxHeight: "74vh" }}
          className="d-block w-100"
          src={carr3}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="carousel-caption">
            <h3>We work to enhance</h3>
            <h1>Students Skills</h1>
            <h3>
              Through
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  " Workshops",
                  900,
                  " Events",
                  900,
                  " Conferences",
                  900,
                  " Magasines",
                  900,
                ]}
              />
            </h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ maxHeight: "74vh" }}
          className="d-block w-100"
          src={carr2}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="carousel-caption">
            <h1>
              Ready
              <br /> To Be part of our journey ?
            </h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselPage;
