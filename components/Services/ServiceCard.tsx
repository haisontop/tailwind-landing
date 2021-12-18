import React from "react";
import { OfferingModel } from "./ServiceOffering";

interface ServiceOfferingCardProps {
  service: OfferingModel;
}

const ServiceOfferingCard = ({ service }: ServiceOfferingCardProps) => {
  const { title, img, body } = service;
  return (
    <div className="xl:mb-10 mr-4 xl:mx-0">
      <img src={img} alt="" width="30%" className="xl:hidden" />
      <h3 className="lg:text-3xl xl:text-3xl text-2xl  mb-5 mt-5">{title}</h3>
      <p className="xl:w-96 lg:text-3xl xl:text-base md:text-2xl">{body}</p>
    </div>
  );
};

export default ServiceOfferingCard;
