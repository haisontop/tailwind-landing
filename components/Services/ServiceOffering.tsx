import React from "react";
import Carousel from "react-multi-carousel";
import { MOCK_SERVICE } from "./../../constants/mockservices"
import ServiceCard from "./ServiceCard";
const ServiceOffering = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 60,
    },
  };

  interface CustomButtonGroupProps {
    next?: () => void;
    previous?: () => void;
  }

  const CustomButtonGroup = ({ next, previous }: CustomButtonGroupProps) => {
    return (
      <div className="custom-button-group">
        <button
          onClick={() => previous()}
          className="border border-white rounded-2xl border-solid py-3 px-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17.124"
            height="10.063"
            viewBox="0 0 17.124 10.063"
          >
            <path
              id="Path_11"
              data-name="Path 11"
              d="M4.716,0V15.076L.753,11.205,0,11.976l5.271,5.149,4.792-5.182-.791-.732L5.793,14.972V0Z"
              transform="translate(17.125) rotate(90)"
              fill="#fff"
            />
          </svg>
        </button>
        <button
          onClick={() => next()}
          className="ml-2 border border-white rounded-2xl border-solid py-3 px-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17.124"
            height="10.063"
            viewBox="0 0 17.124 10.063"
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M4.716,0V15.076L.753,11.205,0,11.976l5.271,5.149,4.792-5.182-.791-.732L5.793,14.972V0Z"
              transform="translate(-0.001 10.063) rotate(-90)"
              fill="#fff"
            />
          </svg>
        </button>
      </div>
    );
  };
  return (
    <div className="text-white md:mx-10 mx-6">
      <div className="grid md:grid-cols-2 pb-12 md:pb-0">
        <div className="flex flex-col">
          <div className="md:sticky md:top-0">
            <h1 className="md:text-4xl text-3xl mb-2 md:mb-15">Our offering</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-32 md:mt-0 hidden md:block">
          {MOCK_SERVICE.map((service) => (
            <div className="">
              <ServiceCard
                key={service.key}
                service={service}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 block md:hidden">
        <Carousel
          responsive={responsive}
          ssr
          containerClass="container-padding-bottom"
          arrows={false}
          customButtonGroup={<CustomButtonGroup />}
          partialVisible={true}
        >
          {MOCK_SERVICE.map((service) => (
            <ServiceCard
              key={service.key}
              service={service}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ServiceOffering;
