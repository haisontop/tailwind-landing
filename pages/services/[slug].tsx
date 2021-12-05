import React from "react";
import Layout from "../../components/Layout";
import ServiceBody from "../../components/Services/ServiceBody";
import ServiceHeader from "../../components/Services/ServiceHeader";
import ServiceOfering from "../../components/Services/ServiceOfering";
import ServiceSpaciality from "../../components/Services/ServiceSpaciality";

const Services = () => {
  return (
    <Layout>
      <div className="bg-black text-white md:px-60">
        <ServiceHeader></ServiceHeader>
        <ServiceBody></ServiceBody>
        <ServiceOfering></ServiceOfering>
        <ServiceSpaciality></ServiceSpaciality>
      </div>
    </Layout>
  );
};

export default Services;
