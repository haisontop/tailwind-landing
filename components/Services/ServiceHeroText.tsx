import React from "react";

interface ServiceHeroTextProps {
  content?: string;
}

const ServiceHeroText = ({ content }: ServiceHeroTextProps) => {
  return (
    <div className="text-center px-5 lg:px-15 xl:px-20 md:px-15">
      <h1 className="text-3xl lg:text-6xl xl:text-5xl  mt-32 mb-36 w-full xl:w-full xl:leading-tight md:text-5xl">
        {content}
      </h1>
    </div>
  );
};

export default ServiceHeroText;
