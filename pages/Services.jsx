import React from 'react';
import ServiceBody from '../components/services/ServiceBody';
import ServiceHeader from '../components/services/ServiceHeader';
import ServiceOfering from '../components/services/ServiceOfering';
import ServiceSpaciality from '../components/services/ServiceSpaciality';
import Footer from "./../components/Footer.tsx"

const Services = () => {
    return (
        <>
        <div className="bg-black text-white md:px-60">
            <ServiceHeader></ServiceHeader>
            <ServiceBody></ServiceBody>
            <ServiceOfering></ServiceOfering>
            <ServiceSpaciality></ServiceSpaciality>
        </div>
        <Footer />
        </>
    );
};

export default Services;