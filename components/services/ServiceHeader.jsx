import React from 'react';
import ActiveLink from "./ActiveLink"
const ServiceHeader = () => {
    return (
        <div className="grid grid-cols-4 text-center gap-7">
           <ActiveLink href="/services">
           E-commerce
          </ActiveLink>
            <ActiveLink  href="/services/health-care/ovpadrei&&d1566">
             Healthcare
            </ActiveLink>
            <ActiveLink  href="/services/blog-chain/BlogChain">
           Blockchain
            </ActiveLink>
            <ActiveLink  href="/services/saas/ovpadrei&&d1566">
            Saas
             </ActiveLink>
        </div>
    );
};

export default ServiceHeader;