import React from "react";
import Link from "next/link";

const Subscription = () => {
  return (
    <div className="text-white mt-52 mb-36">
      <div className="mx-5 md:mx-80">
        <h1 className="text-4xl md:text-6xl text-center">
          We work in variety of industries and have strong experience
          <div className="flex justify-center flex-wrap w-full">
            serving
            <Link href="/services/e-commerce">
              <a
                href="#pablo"
                className={"font-normal underline ml-2 whitespace-nowrap bg-transparent"}
              >
                E-commerce
              </a>
            </Link>
            ,
            <Link href="/services/healthcare">
              <a
                href="#pablo"
                className={"font-normal underline ml-2 whitespace-nowrap bg-transparent"}
              >
                Healthcare
              </a>
            </Link>
            ,
            <Link href="/services/blockchain">
              <a
                href="#pablo"
                className={
                  "font-normal underline ml-2 whitespace-nowrap bg-transparent mr-2"
                }
              >
                BlockChain
              </a>
            </Link>
            and
            <Link href="/services/sass">
              <a
                href="#pablo"
                className={"font-normal underline ml-2 whitespace-nowrap bg-transparent"}
              >
                Sass
              </a>
            </Link>
          </div>
        </h1>
      </div>
      <div className="flex justify-center mt-36 md:mx-60">
        <div className="border-4 border-light-blue-500 border-opacity-100 px-10 md:px-20 py-6 md:py-10 rounded-full w-full">
          <h1 className="md:text-2xl text-center">
            Stay in touch subscribebing to our newsletter
          </h1>
          <div className="md:mt-12 mt-7 flex justify-between border-b-2 pb-2 md:pb-3">
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
