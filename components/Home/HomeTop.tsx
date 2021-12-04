import React from "react";

const HomeTop = () => {
  return (
    <div className="pt-32">
      <div className="text-white flex items-center justify-center md:pb-20 md:pt-10">
        <div>
          <h1 className="md:text-8xl sm:text-2xl">
            You are fearless <br /> companion on the <br /> digital frontier
          </h1>
          <div className=" flex mt-10">
            <button className="text-black md:w-60 py-5 rounded-full bg-yellow-700 mx-4">
              LET'S TAKE OFF
            </button>{" "}
            <button className="bg-blue-300 text-3xl md:w-36 py-1 rounded-full">
              <i className="fas fa-arrow-down text-black "></i>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
