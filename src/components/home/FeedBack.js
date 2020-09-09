import React from "react";
import { Carousel, Container } from "react-bootstrap";
import pic from "./img/team/mahdi.webp";

const FeedBack = () => {
  return (
    <div className="Feedback">
      <Container>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={pic} alt="First slide" />
            <Carousel.Caption>
              <p className="name">First slide label</p>
              <p className="description">
                Nulla vitae elit libero, a pharetra augue mollis interdum. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
                earum?
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={pic} alt="Third slide" />

            <Carousel.Caption>
              <p className="name">First slide label</p>
              <p className="description">
                Nulla vitae elit libero, a pharetra augue mollis interdum. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
                earum?
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={pic} alt="Third slide" />

            <Carousel.Caption>
              <p className="name">First slide label</p>
              <p className="description">
                Nulla vitae elit libero, a pharetra augue mollis interdum. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
                earum?
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default FeedBack;
