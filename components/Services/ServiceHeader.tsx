import React from "react";
import ActiveLink from "./ActiveLink";
const ServiceHeader = () => {
  return (
    <div className="grid md:grid-cols-4 text-center gap-3 md:gap-7 mx-24 md:mx-0">
      <ActiveLink href="/services/e-commerce">E-commerce</ActiveLink>
      <ActiveLink href="/services/healthcare">Healthcare</ActiveLink>
      <ActiveLink href="/services/blockchain">Blockchain</ActiveLink>
      <ActiveLink href="/services/saas">Saas</ActiveLink>
    </div>
  );
};

export default ServiceHeader;
