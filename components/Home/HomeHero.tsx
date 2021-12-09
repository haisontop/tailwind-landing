import React, { useRef, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function HomeHero() {
  return (
    <div className="home-hero-slide mt-14 md:mt-0">
      <Carousel
        showThumbs={false}
        autoPlay={false}
        infiniteLoop
        transitionTime={2000}
        interval={4000}
        stopOnHover
        showStatus={false}
        showIndicators={false}
        dynamicHeight
        centerMode
        centerSlidePercentage={40}
      >
        <div>
          <img src="images/1912022.jpeg" />
        </div>
        <div>
          <img src="images/pexels-fauxels-3183180.jpg" />
        </div>
        <div>
          <img src="images/pexels-oladimeji-ajegbile-2698465.jpg" />
        </div>
        <div>
          <img src="images/pexels-fauxels-3184465.jpg" />
        </div>
        <div>
          <img src="images/pexels-edmond-dantès-4342098.jpg" />
        </div>
      </Carousel>
    </div>
  );
}
