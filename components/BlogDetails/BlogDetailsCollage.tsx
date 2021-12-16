import React from "react";

const SlugCollage = () => {
  return (
    <div className="grid grid-cols-2 xl:gap-24 gap-10 mt-10 xl:mt-32 xl:px-0">
      <div className="flex xl:justify-center">
        <img
          src="https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
          className="w-96"
        />
      </div>
      <div className="xl:text-center">
        <img
          src="https://jooinn.com/images/men-4.jpg"
          className="my-20  w-96"
          alt=""
        />
      </div>
    </div>
  );
};

export default SlugCollage;
