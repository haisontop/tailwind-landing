import React from 'react';

const ServiceSpaciality = () => {
    return (
        <div className="text-center mt-16 md:mt-40 px-5 pb-14 md:pb-0">
            <div>
                <h1 className="text-white text-5xl">Our spacialties</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14 md:mt-20">
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