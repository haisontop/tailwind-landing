import { useRouter } from 'next/router';
import React from 'react';

const ServiceSpaciality = () => {
    const Router = useRouter()
    return (
        <div className="text-center mt-20 xl:mt-40 px-5 pb-14 lg:px-15 xl:pb-0 md:px-15">
            {   //e-commerce
                (Router.query.slug === "e-commerce") && <div>
                    <div>
                        <h1 className="text-white text-3xl lg:text-7xl xl:text-5xl md:text-5xl">Our spacialties</h1>
                    </div>
                    <div className="grid grid-cols-2 gap-5 lg:gap-10 lg:grid-cols-2 xl:grid-cols-4 xl:gap-5 mt-14 xl:mt-20 md:grid-cols-2">
                        <div>
                            <div className="bg-white rounded-full flex justify-center px-2 py-2">
                                <img src="/images/kaviyo-partner.png" width="100%" alt="" />
                            </div>
                        </div>

                        <div>
                            <div className="bg-white rounded-full px-2 py-5">
                                <img src="/images/shopify-partner.png" width="100%" />
                            </div>
                        </div>

                        <div>
                            <div className="bg-white rounded-full px-6 py-4">
                                <img src="/images/solutionPartner.png" width="100%" />
                            </div>
                        </div>

                        <div>
                            <div className="bg-white rounded-full px-4 py-5">
                                <img src="/images/magentos.png" width="80%" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            }
            {   //blockchain
                (Router.query.slug === "blockchain") && <div>
                    <div>
                        <h1 className="text-white text-3xl lg:text-7xl xl:text-5xl md:text-5xl">Our spacialties</h1>
                    </div>
                    <div className="grid grid-cols-2 gap-5 lg:gap-10 lg:grid-cols-2 xl:grid-cols-4 xl:gap-5 mt-14 xl:mt-20 md:grid-cols-2">
                        <div className="bg-white rounded-full flex justify-center">
                            <img src="/images/kaviyo-partner.png" width="90%" alt="" />
                        </div>
                        <div className="bg-white rounded-full">
                            <img src="/images/shopify-partner.png" width="93%" className='mx-auto my-6' />
                        </div>
                        <div className="bg-white rounded-full">
                            <img src="/images/solutionPartner.png" width="70%" className='mx-auto my-6' />
                        </div>
                        <div className="bg-white rounded-full">
                            <img src="/images/magentos.png" width="80%" className='mx-auto my-5' alt="" />
                        </div>
                    </div>
                </div>
            }
            {   //saas
                (Router.query.slug === "saas") && <div>
                    <div>
                        <h1 className="text-white text-3xl lg:text-7xl xl:text-5xl md:text-5xl">Our spacialties</h1>
                    </div>
                    <div className="grid grid-cols-2 gap-5 lg:gap-10 lg:grid-cols-2 xl:grid-cols-4 xl:gap-5 mt-14 xl:mt-20 md:grid-cols-2">
                        <div className="bg-white rounded-full flex justify-center">
                            <img src="/images/kaviyo-partner.png" width="90%" alt="" />
                        </div>
                        <div className="bg-white rounded-full">
                            <img src="/images/shopify-partner.png" width="93%" className='mx-auto my-6' />
                        </div>
                        <div className="bg-white rounded-full">
                            <img src="/images/solutionPartner.png" width="70%" className='mx-auto my-6' />
                        </div>
                        <div className="bg-white rounded-full">
                            <img src="/images/magentos.png" width="80%" className='mx-auto my-5' alt="" />
                        </div>
                    </div>
                </div>
            }
            {   //Health care
                Router.query.slug === "healthcare" && <div>
                    <div>
                        <h1 className="text-white text-3xl lg:text-7xl xl:text-5xl md:text-5xl">Our spacialties</h1>
                    </div>
                    <div className="grid grid-cols-2 gap-5 lg:gap-10 lg:grid-cols-2 xl:grid-cols-4 xl:gap-5 mt-14 xl:mt-20 md:grid-cols-2">
                        <div>
                            <div className="bg-white rounded-full">
                                <img src="/images/veeva-logo.png" width="50%" alt="" className='mx-auto py-5 lg:py-10 xl:py-5 md:py-7' />
                            </div>
                        </div>
                        <div>
                            <div className="bg-white rounded-full">
                                <img src="/images/oce-logo@2x.png" width="22%" className='mx-auto py-3' />
                            </div>
                        </div>
                        <div>
                            <div className="bg-white rounded-full">
                                <img src="/images/adobe-experience-cloud-logo.png" width="59%" className='mx-auto py-2' />
                            </div>
                        </div>
                        <div>
                            <div className="bg-white rounded-full">
                                <img src="/images/sfmc-logo.png" width="54%" className='mx-auto py-1' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div >
    );
};

export default ServiceSpaciality;