import React from "react";
import Link from "next/link";

const Subscription = () => {
  return (
    <div className="text-white my-24 xl:my-20 xl:mt-52 xl:mb-36">
      <div className="mx-7 xl:ml-36 xl:mr-42 md:mx-15">
        <h1 className="text-2xl md:text-6xl text-center leading-6 md:leading">
          We work in variety of industries and have strong experience serving
          <div className="flex justify-center flex-wrap xl:w-4/5 text-center xl:ml-36">
            <Link href="/services/e-commerce">
              <a
                href="#pablo"
                className={
                  "font-normal underline ml-2 whitespace-nowrap bg-transparent hover:text-primary"
                }
              >
                E-commerce
              </a>
            </Link>
            ,
            <Link href="/services/healthcare">
              <a
                href="#pablo"
                className={
                  "font-normal underline ml-2 whitespace-nowrap bg-transparent hover:text-aqua"
                }
              >
                Healthcare
              </a>
            </Link>
            ,
            <Link href="/services/blockchain">
              <a
                href="#pablo"
                className={
                  "font-normal underline ml-2 whitespace-nowrap bg-transparent mr-2 hover:text-aqua"
                }
              >
                BlockChain
              </a>
            </Link>
            and
            <Link href="/services/sass">
              <a
                href="#pablo"
                className={
                  "font-normal underline ml-2 whitespace-nowrap bg-transparent hover:text-primary"
                }
              >
                Sass
              </a>
            </Link>
          </div>
        </h1>
      </div>
      <div className="flex justify-center mt-36 lg:mx-14 xl:mx-60 md:mx-10">
        <div className="border-2 border-light-blue-500 border-opacity-100 px-7 xl:px-20 py-6 xl:py-10 rounded-full w-full mx-3 text-center xl:text-left">
          <h1 className="lg:text-3xl xl:text-2xl md:text-2xl text-center mt-3 lg:mt-0 md:mt-0">
            Stay in touch subscribebing to our newsletter
          </h1>
          <div className="lg:mt-12 xl:mt-12 md:mt-10 mt-7 flex justify-between border-b-2 pb-2 xl:pb-3">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent outline-none lg:text-4xl xl:text-base md:text-2xl  md:text-left"
            />
            <button className="hidden xl:block">BLAST OFF</button>
          </div>
          <button className="block xl:hidden mx-auto mt-2 lg:mt-5 xl:mt-2 md:mt-5 lg:text-3xl xl:text-base md:text-2xl underline lg:no-underline md:no-underline">BLAST OFF</button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
