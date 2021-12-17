import React, { ReactElement } from "react";

function Footer(): ReactElement {
  return (
    <footer className="relative pt-14 xl:pt-8 pb-6 px-5 lg:px-15 xl:px-0 md:px-10 bg-black">
      <div className="text-white flex justify-center xl:mt-36 xl:pb-10 xl:mx-80">
        <div className="w-full">
          <h1 className="text-4xl lg:text-7xl xl:text-7xl md:text-5xl">
            Is your business <br />
            ready to take off?
            <br /> Let's Chat.
          </h1>
          <form className="mt-7 xl:mt-20">
            <input
              type="text"
              placeholder="NAME"
              className="border-2 bg-transparent border-white px-4 block w-full py-3 rounded-full placeholder:text-white lg:py-8 lg:text-3xl lg:px-6 xl:py-3 xl:text-base xl:px-4 md:py-5 md:text-xl md:px-5"
            />
            <input
              type="email"
              placeholder="EMAIL"
              className="my-6 border-2 bg-transparent border-white px-4 block w-full py-3 rounded-full placeholder:text-white lg:py-8 lg:text-3xl lg:px-6 xl:py-3 xl:text-base xl:px-4 md:py-5 md:text-xl md:px-5"
            />
            <textarea
              rows={4}
              placeholder="HOW CAN WE HELP?"
              className="my-6 border-2 bg-transparent border-white px-4 block w-full py-3 rounded-3xl placeholder:text-white lg:py-8 lg:text-3xl lg:px-6 xl:py-3 xl:text-base xl:px-4 md:py-5 md:text-xl md:px-5"
            />
            <div className="flex">
              <button className="bg-primary text-black py-3 lg:py-10 xl:py-5 rounded-full lg:text-3xl xl:text-2xl px-10 lg:px-32 xl:px-10 xl:mt-10 md:px-28 md:text-2xl md:py-5 mr-5">
                SUBMIT
              </button>
              <button className="bg-green-100 text-black py-3 lg:py-10 xl:py-5 rounded-full lg:text-3xl xl:text-2xl px-10 lg:px-32 xl:px-10 xl:mt-10  md:text-2xl">
                02 9745 9864
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
