import React from "react";
import BlogCard from "./BlogCard";

const BlogsList = () => {

  return (
    <div>
      <div className="grid grid-cols-2 gap-10 mt-10">
        <BlogCard
          title="The feature of CX"
          createdAt="November 2021"
          description="Tecnology should work for you, not the other way round. we can help
          you a powerful software ecosystem that gives your customers
          amazing experiences and put world-class capabilities in the
          hands of your team."
          imagePath="https://thumbs.dreamstime.com/b/men-hair-beauty-handsome-man-model-black-hair-beard-men-hair-beauty-handsome-man-model-black-hair-beard-blue-125031222.jpg"
        />
        <BlogCard
          title="So, What is the metaverse"
          createdAt="November 2021"
          description="Tecnology should work for you, not the other way round. we can help
          you a powerful software ecosystem that gives your customers
          amazing experiences and put world-class capabilities in the
          hands of your team."
          imagePath="https://ichef.bbci.co.uk/news/976/cpsprodpb/179AB/production/_121538669_woman2.jpg"
        />
        <BlogCard
          title="Move it, or lose it."
          createdAt="November 2021"
          description="Tecnology should work for you, not the other way round. we can help
          you a powerful software ecosystem that gives your customers
          amazing experiences and put world-class capabilities in the
          hands of your team."
          imagePath="https://thumbs.dreamstime.com/b/men-hair-beauty-handsome-man-model-black-hair-beard-men-hair-beauty-handsome-man-model-black-hair-beard-blue-125031222.jpg"
        />
        <BlogCard
          title="The feature of CX"
          createdAt="November 2021"
          description="Tecnology should work for you, not the other way round. we can help
          you a powerful software ecosystem that gives your customers
          amazing experiences and put world-class capabilities in the
          hands of your team."
          imagePath="https://thumbs.dreamstime.com/b/men-hair-beauty-handsome-man-model-black-hair-beard-men-hair-beauty-handsome-man-model-black-hair-beard-blue-125031222.jpg"
        />
        <BlogCard
          title="So, What is the metaverse"
          createdAt="November 2021"
          description="Tecnology should work for you, not the other way round. we can help
          you a powerful software ecosystem that gives your customers
          amazing experiences and put world-class capabilities in the
          hands of your team."
          imagePath="https://thumbs.dreamstime.com/b/men-hair-beauty-handsome-man-model-black-hair-beard-men-hair-beauty-handsome-man-model-black-hair-beard-blue-125031222.jpg"
        />
        <BlogCard
          title="Move it, or lose it."
          createdAt="November 2021"
          description="Tecnology should work for you, not the other way round. we can help
          you a powerful software ecosystem that gives your customers
          amazing experiences and put world-class capabilities in the
          hands of your team."
          imagePath="https://thumbs.dreamstime.com/b/men-hair-beauty-handsome-man-model-black-hair-beard-men-hair-beauty-handsome-man-model-black-hair-beard-blue-125031222.jpg"
        />

      </div>
      <div className="flex justify-center mt-32">
        <p className="mx-5 text-2xl">1</p>
        <p className="mx-5 text-2xl">2</p>
        <p className="mx-5 text-2xl">3</p>
        <button className="mx-5 px-5 bg-transparent border-2 rounded-full">
          next
        </button>
      </div>
    </div>
  );
};

export default BlogsList;
