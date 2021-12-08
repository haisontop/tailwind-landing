import React from "react";

const HomeTop = () => {
  return (
    <div className=" px-10 pt-32">
      <div className="text-white flex items-center justify-center md:pb-20 md:pt-10">
        <div>
          <h1 className="text-5xl md:text-8xl">
            You are fearless <br /> companion on the <br /> digital frontier
          </h1>
          <div className=" flex mt-14">
            <button className="text-black w-40 py-5 mr-2 rounded-full bg-yellow-700 md:w-60 md:mr-5">
              LET'S TAKE OFF
            </button>{" "}
            <button className="bg-blue-300 px-14 md:px-0 text-3xl  w-40 md:py-1 rounded-full">
              <p className="top-b-t-n">🔰</p>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
