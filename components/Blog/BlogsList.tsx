import React from "react";
import { MOCK_BLOGS } from "../../constants/mockBlogs";
import BlogCard from "./BlogCard";

const BlogsList = () => {
  return (
    <div className="pb-5 md:pb-0">
      <div className="grid md:grid-cols-2 gap-10 mt-10 px-5 md:px-0">
        {MOCK_BLOGS.map((blog) => (
          <BlogCard
            key={blog.slug}
            title={blog.title}
            createdAt={blog.createdAt}
            description={blog.description}
            imagePath={blog.imagePath}
          />
        ))}

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
