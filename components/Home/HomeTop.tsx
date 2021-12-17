import React from "react";

const HomeTop = () => {
  return (
    <div className="px-10 pt-20">
      <div className="text-white flex items-center justify-center xl:pb-20 xl:pt-10">
        <div>
          <h1 className="text-5xl xl:text-8xl md:text-7xl">
            Your fearless <br /> companion on the <br /> digital frontier
          </h1>
          <div className=" flex mt-14">
            <button className="text-black w-40 py-3 xl:py-5 mr-2 rounded-full bg-primary xl:w-60 xl:mr-5">
              LET'S TAKE OFF
            </button>
            <button className="bg-blue-300 px-20 xl:py-1 rounded-full">
              <img
                src="images/home/downArrow.png"
                width="80%"
                className="top-b-t-n"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
