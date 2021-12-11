import React, { ReactElement } from "react";

function Footer(): ReactElement {
  return (
    <footer className="relative pt-14 md:pt-8 pb-6 px-5 md:px-0 bg-black">
      <div className="text-white flex justify-center md:mt-36 pb-10 md:mx-80">
        <div className="w-full">
          <h1 className="text-4xl md:text-7xl">
            Is your business <br />
            ready to take off?
            <br /> Let's Chat.
          </h1>
          <form className="mt-20">
            <input
              type="text"
              placeholder="NAME"
              className="border-2 bg-transparent border-white px-4 block w-full py-3 rounded-full placeholder:text-white"
            />
            <input
              type="email"
              placeholder="EMAIL"
              className="my-6 border-2 bg-transparent border-white px-4 block w-full py-3 rounded-full placeholder:text-white"
            />
            <textarea
              rows={4}
              placeholder="HOW CAN WE HELP?"
              className="my-6 border-2 bg-transparent border-white px-4 block w-full py-3 rounded-3xl placeholder:text-white"
            />
            <div className="flex">
              <button className="bg-primary text-black py-3 md:py-5 rounded-full md:text-2xl px-10 mt-10 mr-5">
                SUBMIT
              </button>
              <button className="bg-green-100 text-black py-3 md:py-5 rounded-full md:text-2xl px-10 mt-10">
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
