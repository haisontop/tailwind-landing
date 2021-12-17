import React from 'react';

const ServiceSpaciality = () => {
    return (
        <div className="text-center mt-20 xl:mt-40 px-5 pb-14 lg:px-15 xl:pb-0 md:px-15">
            <div>
                <h1 className="text-white text-3xl lg:text-7xl xl:text-5xl md:text-5xl">Our spacialties</h1>
            </div>
            <div className="grid grid-cols-2 gap-5 lg:gap-10 lg:grid-cols-2 xl:grid-cols-4 xl:gap-5 mt-14 xl:mt-20 md:grid-cols-2">
                <div className="bg-white rounded-full flex justify-center">
                    <img src="/images/kaviyo-partner.png" width="90%" alt="" />
                </div>
                <div className="bg-white rounded-full">
                    <img src="/images/shopify-partner.png" width="93%" className='mx-auto my-5' />
                </div>
                <div className="bg-white rounded-full flex justify-center">
                    <img src="/images/solutionPartner.png" width="70%" className='mx-auto my-4' />
                </div>
                <div className="bg-white rounded-full">
                    <img src="/images/magentos.png" width="80%" className='mx-auto my-4' alt="" />
                </div>
            </div>
        </div>
    );
};

export default ServiceSpaciality;