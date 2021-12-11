import React, { useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function HomeHero() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="home-hero-slide mt-14 md:mt-0">
      <Carousel
        centerMode
        responsive={responsive}
        ssr
        containerClass="h-full home-hero-slide-container"
        autoPlay
        infinite
      >
        <div className="flex items-center h-full w-full">
          <img src="images/1912022.jpeg" height="100%" />
        </div>
        <div className="flex items-center h-full w-full">
          <img src="images/pexels-fauxels-3183180.jpg" height="100%" />
        </div>
        <div className="flex items-center h-full w-full">
          <img
            src="images/pexels-oladimeji-ajegbile-2698465.jpg"
            height="100%"
          />
        </div>
        <div className="flex items-center h-full w-full">
          <img src="images/pexels-fauxels-3184465.jpg" height="100%" />
        </div>
        <div className="flex items-center h-full w-full">
          <img src="images/pexels-edmond-dantès-4342098.jpg" height="100%" />
        </div>
      </Carousel>
    </div>
  );
}
