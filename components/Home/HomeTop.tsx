import React from "react";
import s from './HomeTop.module.css'

const HomeTop = () => {
  return (
    <div className="px-6 pt-36 lg:px-52 xl:pl-80 lg:pt-20 md:pt-20 md:px-40">
      <div className="text-white flex items-center justify-center xl:pb-20 xl:pt-10">
        <div>
          <h1 className={s.mainText}>
            Your fearless  companion on the  digital frontier.
          </h1>
          <div className=" flex mt-14">
            <button className="text-black w-40 py-3 xl:py-5 mr-2 rounded-full bg-primary xl:w-60 xl:mr-5">
              LET'S TAKE OFF
            </button>
            <button className="bg-top-btn px-10 lg:px-20 md:px-20 xl:py-1 rounded-full">
              <img
                src="images/home/downArrow.png"
                className="top-b-t-n w-7/12 lg:w-10/12 ml-1 md:w-10/12"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
