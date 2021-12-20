import React from "react";

interface ServiceHeroTextProps {
  content?: string;
}

const ServiceHeroText = ({ content }: ServiceHeroTextProps) => {
  return (
    <div className="text-center px-10 lg:px-15 xl:pb-20 xl:pt-10 md:pb-15 md:pt-6">
      <h1 className="text-3xl lg:text-6xl xl:text-5xl mt-0 xl:mt-16 lg:mt-16 md:mt-16 mb-24 xl:mb-12 lg:mb-12 md:mb-12 w-full xl:w-full xl:leading-tight md:text-5xl">
        {content}
      </h1>
    </div>
  );
};

export default ServiceHeroText;
