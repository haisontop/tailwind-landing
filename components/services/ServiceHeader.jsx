import React from 'react';
const ServiceHeader = () => {
    return (
        <div className="grid grid-cols-4 text-center gap-4">
            <div className="my-3 py-3 bg-yellow-700 rounded-full">
              <h1 className="text-1xl text-black">E-commerce</h1>
            </div>
            <div className="my-3 py-3 bg-transparent border-2 rounded-full">
              <h1>Healthcare</h1>
            </div>
            <div className="my-3 py-3 bg-transparent border-2 rounded-full">
              <h1>Blockchain</h1>
            </div>
            <div className="my-3 py-3 bg-transparent border-2 rounded-full">
              <h1>Blockchain</h1>
            </div>
        </div>
    );
};

export default ServiceHeader;