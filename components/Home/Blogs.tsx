import React from "react";

const Blogs = () => {
  return (
    <div className="text-white mx-64">
      <div className="grid grid-cols-2">
        <div>
          <div className="sticky top-0">
            <h1 className="md:text-6xl">The Write Up</h1>
            <p className="my-10">
              Industry news, latest projects and <br />
              Markating insights
            </p>
            <button className="bg-yellow-600 text-black py-5 rounded-full text-3xl px-10">
              READ ALL
            </button>
          </div>
        </div>
        <div>
          <div className="mt-5">
            <img
              src="https://thumbs.dreamstime.com/b/men-hair-beauty-handsome-man-model-black-hair-beard-men-hair-beauty-handsome-man-model-black-hair-beard-blue-125031222.jpg"
              alt=""
              width="100%"
            />
            <h1 className="text-3xl mt-5">The feature of CX</h1>
            <p className="my-3">what does the future look like for CX?</p>
            <button className="text-2xl">READ MORE</button>
          </div>
          <div className="mt-16">
            <img
              src="https://media.istockphoto.com/photos/happy-smiling-man-looking-away-picture-id1158245623?k=20&m=1158245623&s=612x612&w=0&h=rGmn02kNdoQySPEoQmbbDBxOayL4sdW3QWqP9rjgxCg="
              alt=""
              width="100%"
            />
            <h1 className="text-3xl mt-5">So, What is the metaverse</h1>
            <p className="my-3">what industry are going to thrive?</p>
            <button className="text-2xl">READ MORE</button>
          </div>
          <div className="mt-16">
            <img
              src="https://thumbs.dreamstime.com/b/men-hair-beauty-handsome-man-model-black-hair-beard-men-hair-beauty-handsome-man-model-black-hair-beard-blue-125031222.jpg"
              alt=""
              width="100%"
            />
            <h1 className="text-3xl mt-5">The feature of CX</h1>
            <p className="my-3">what does the future look like for CX?</p>
            <button className="text-2xl">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
