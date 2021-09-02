import React from "react";
import { Carousel } from "react-bootstrap";
import { carouselData } from "../data/homeData";

function HomeCarousel() {
  return (
    <Carousel
      id="home_carousel"
      fade
      interval={7000}
      wrap={true}
      pause={false}
      nextLabel=""
      prevLabel=""
    >
      {carouselData.map((item) => (
        <Carousel.Item key={item.id}>
          <img
            className="d-block w-100 home_img"
            src={item.url}
            alt="carousel_img"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HomeCarousel;
