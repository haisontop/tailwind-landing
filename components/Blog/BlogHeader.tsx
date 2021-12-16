import React from "react";

const BlogHeader = () => {
  return (
    <div className="pt-20 px-5 xl:px-0">
      <h1 className="text-4xl">The write up</h1>
      <div className="grid grid-cols-3 gap-2 xl:grid-cols-4 xl:gap-4 mt-10">
        <div className="my-3 py-3 bg-white rounded-full">
          <h1 className="xl:text-2xl text-black text-center">All</h1>
        </div>
        <div className="my-3 py-3 bg-transparent border-2 rounded-full">
          <h1 className="xl:text-2xl text-white text-center">Tecnology</h1>
        </div>
        <div className="my-3 py-3 bg-transparent border-2 rounded-full">
          <h1 className="xl:text-2xl text-white text-center">Future trends</h1>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
