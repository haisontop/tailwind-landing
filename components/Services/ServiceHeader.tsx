import React from "react";
import ActiveLink from "./ActiveLink";
const ServiceHeader = () => {
  return (
    <>
      <div className="grid xl:grid-cols-4 text-center gap-3 xl:gap-7  mx-24 xl:mx-0">
        <ActiveLink href="/services/e-commerce">E-commerce</ActiveLink>
        <ActiveLink href="/services/healthcare">Healthcare</ActiveLink>
        <ActiveLink href="/services/blockchain">Blockchain</ActiveLink>
        <ActiveLink href="/services/saas">Saas</ActiveLink>
      </div>

    </>
  );
};

export default ServiceHeader;
