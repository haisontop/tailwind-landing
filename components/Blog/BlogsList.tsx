import React from "react";
// import { MOCK_BLOGS } from "../../constants/mockBlogs";
import BlogCard from "./BlogCard";
import { SanityImageAssetDocument } from "@sanity/client";
import { Slug } from "../../constants/types";

type Blog = {
  title: string;
  _createdAt: string;
  slug: Slug;
  preview: string;
  publishedAt: Date;
  mainImage: SanityImageAssetDocument;
  body: any;
};

interface BlogListProps {
  blogs: Blog[];
}

const BlogsList = ({ blogs }: BlogListProps) => {
  return (
    <div className="pb-5 xl:pb-0">
      <div className="grid xl:grid-cols-2 gap-10 mt-10 px-5 xl:px-0">
        {blogs.map((blog) => (
          <BlogCard
            slug={blog.slug.current}
            key={blog.slug.current}
            title={blog.title}
            _createdAt={blog._createdAt}
            preview={blog.preview}
            body={blog.body}
            imagePath={blog.mainImage.asset.url}
          />
        ))}
      </div>
      <div className="flex justify-center mb-10 mt-10 xl:mt-32 xl:mb-0">
        <button
          className="border border-white rounded-2xl border-solid py-3 px-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17.124"
            height="10.063"
            viewBox="0 0 17.124 10.063"
          >
            <path
              id="Path_11"
              data-name="Path 11"
              d="M4.716,0V15.076L.753,11.205,0,11.976l5.271,5.149,4.792-5.182-.791-.732L5.793,14.972V0Z"
              transform="translate(17.125) rotate(90)"
              fill="#fff"
            />
          </svg>
        </button>
        <p className="mx-5 text-2xl">1</p>
        <p className="mx-5 text-2xl">2</p>
        <p className="mx-5 text-2xl">3</p>
        <button
          className="ml-2 border border-white rounded-2xl border-solid py-3 px-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17.124"
            height="10.063"
            viewBox="0 0 17.124 10.063"
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M4.716,0V15.076L.753,11.205,0,11.976l5.271,5.149,4.792-5.182-.791-.732L5.793,14.972V0Z"
              transform="translate(-0.001 10.063) rotate(-90)"
              fill="#fff"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BlogsList;
