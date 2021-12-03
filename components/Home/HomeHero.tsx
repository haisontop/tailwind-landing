import React, { useRef, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function HomeHero() {
  return (
    <div className="home-hero-slide">
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
          <img src="https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
        </div>
        <div>
          <img src="https://i.pinimg.com/564x/e2/29/5f/e2295f7b9b470f873d0cc4b088ac0726.jpg" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div>
        <div>
          <img src="https://media.istockphoto.com/photos/studio-portrait-of-a-man-in-a-suit-picture-id1301253805?b=1&k=20&m=1301253805&s=170667a&w=0&h=HaXLECZux7kHOvkC-ZGzNU5hUauzNFdJSkRKazGjUpI=" />
        </div>
      </Carousel>
    </div>
  );
}
