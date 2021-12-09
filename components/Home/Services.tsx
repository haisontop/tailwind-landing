import React from "react";

const Services = () => {
  return (
    <>
      <div className="text-white text-center px-7 my-36 md:my-0 md:px-0 sm:py-10 md:py-20 md:mx-80">
        <div className="mt-10 text-left pr-10 md:pr-80">
          <h1 className="text-4xl md:text-5xl">
            <span className="text-yellow-600">Digital poineers,</span> <br /> at your service
          </h1>
          <p className="mt-10">
            just when change you though you had a handle on your business
            infrastructure, some software geeks went and pushed the boundaries
            of the customer experience again! Giving your customers the
            experience they expect and what their dollars demand, is never
            ending challange. Let the team at Comet help you chart a course
            though the noise and make your next digital project or campaign a
            success.
          </p>
        </div>
        <div className="mt-36 text-right md:pl-80">
          <h1 className="text-4xl md:text-5xl">We get <span className="text-green-200"> customer service.</span></h1>
          <p className="mt-10">
            A digital strategy that the delivers results requers vision,
            expertise. and unfaltering excution. The comet team are dedicated IT
            and markating professionals with obession for the very best in
            customer experience and clint success. We'll help you to craft
            deploy, and steer the kind of world class experiences your customers
            will write home to Earth about.
          </p>
        </div>
      </div>
      <div className="text-center text-white">
        <div className="px-10 md:px-0 my-20">
          <h1 className="text-3xl md:text-5xl">
            We are a full-service agency <br /> with a special focus on <br />{" "}
            customer experience{" "}
          </h1>
        </div>
        <div className="overflow-hidden main-box">
          <div className="flex gap-2 md:gap-4 first-slide">
            <div className="bg-red-900 my-auto text-white py-6 px-5 rounded-full w-full">
              <h1 className="text-2xl md:text-4xl">Development</h1>
            </div>
            <div className="bg-yellow-600 text-black py-5 px-14 rounded-full w-full">
              <h1 className="text-1xl md:text-4xl">Digital strategy</h1>
            </div>
            <div className="bg-green-900 text-white px-6 py-5 rounded-full w-full">
              <h1 className="md:text-2xl">Digital transformation</h1>
            </div>
            <div className="bg-black text-white px-6 py-5 rounded-full border-4 border-white border-opacity-100 w-full">
              <h1 className="md:text-4xl">Elements</h1>
            </div>
          </div>
          <div className="flex gap-4 mt-6 seccond-slide">
            <div className="bg-black text-white px-14 py-6 rounded-full border-4 border-white border-opacity-100 w-full">
              <h1 className="md:text-3xl">Markating + Advertising</h1>
            </div>
            <div className="bg-green-200 text-black px-20 py-3 rounded-full w-full">
              <h1 className="md:text-3xl">Customer journey making</h1>
            </div>
            <div className="bg-red-900  text-white px-6 py-6 rounded-full w-full">
              <h1 className="md:text-3xl">Merkating Automation</h1>
            </div>
          </div>
          <div className="flex gap-4 mt-6 -mr-60 seccond-slide">
            <div className="bg-green-900 text-white py-5 rounded-full w-full">
              <h1 className="md:text-3xl">E-Commerce</h1>
            </div>
            <div className="bg-black text-white py-5 rounded-full border-4 border-white border-opacity-100 w-full">
              <h1 className="md:text-3xl">UX-Desing</h1>
            </div>
            <div className="bg-yellow-600 text-black py-5 rounded-full w-full">
              <h1 className="md:text-4xl">Workshop Facilitation</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
