import React from 'react';

const ServiceSpaciality = () => {
    return (
        <div className="text-center mt-40 px-5 pb-14 md:pb-0">
            <div>
                <h1 className="text-white text-5xl">Our spacialties</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-20">
                <div className="bg-white rounded-full flex justify-center">
                    <img src="https://i0.wp.com/akersdigital.com/wp-content/uploads/2019/06/Klaviyo-Partner.png?resize=600%2C200&ssl=1" width="90%" alt="" />
                </div>
                <div className="bg-white rounded-full flex justify-center">
                    <img src="https://i0.wp.com/akersdigital.com/wp-content/uploads/2019/06/Klaviyo-Partner.png?resize=600%2C200&ssl=1" width="90%" height="100%" alt="" />
                </div>
                <div className="bg-white rounded-full flex justify-center">
                    <img src="https://i0.wp.com/akersdigital.com/wp-content/uploads/2019/06/Klaviyo-Partner.png?resize=600%2C200&ssl=1" width="90%" alt="" />
                </div>
                <div className="bg-white rounded-full flex justify-center">
                    <img src="images/magentos.png" width="90%" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ServiceSpaciality;