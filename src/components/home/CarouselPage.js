import React from "react";
import carr5 from "../../img/carousel/carr5.jpg";
import carr4 from "../../img/carousel/carr4.jpg";
import carr3 from "../../img/carousel/carr3.jpg";
import { Carousel } from "react-bootstrap";

const CarouselPage = () => {
  return (
    <Carousel style={{ position: "relative", zIndex: "0" }}>
      <Carousel.Item>
        <img
          style={{ maxHeight: "80vh" }}
          className="d-block w-100"
          src={carr5}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ maxHeight: "80vh" }}
          className="d-block w-100"
          src={carr3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ maxHeight: "80vh" }}
          className="d-block w-100"
          src={carr4}
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselPage;
