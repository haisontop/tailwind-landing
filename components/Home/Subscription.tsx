import React from "react";

const Subscription = () => {
  return (
    <div className="text-white mt-52 mb-36">
      <div>
        <h1 className="md:text-5xl text-center">
          We work in variety of industries <br /> and have strong experience{" "}
          <br /> serving
          <a className="ml-2" href="#">
            E-commerce
          </a>
          , <a href="#">Healthcare</a>, <br /> <a href="#">BlockChain</a> and{" "}
          <a href="#"> Sass</a>
        </h1>
      </div>
      <div className="flex justify-center mt-36 md:mx-60">
        <div className="border-4 border-light-blue-500 border-opacity-100 px-20 py-10 rounded-full w-full">
          <h1 className="text-2xl text-center">
            Stay in touch subscribebing to our newsletter
          </h1>
          <div className="mt-12 flex justify-between border-b-2 pb-3">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent outline-none"
            />
            <button>BLAST OFF</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
