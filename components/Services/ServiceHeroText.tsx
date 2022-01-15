import React from "react";

interface ServiceHeroTextProps {
  content?: string;
}

const ServiceHeroText = ({ content }: ServiceHeroTextProps) => {
  return (
    <div className="text-center px-5 xl:px-0 lg:px-15 xl:pb-20 xl:pt-10 md:pb-15 md:pt-6">
      <h1 className="text-3xl lg:text-6xl xl:text-5xl  mt-16 mb-36 w-full xl:w-full xl:leading-tight md:text-5xl">
        {content}
      </h1>
    </div>
  );
};

export default ServiceHeroText;
