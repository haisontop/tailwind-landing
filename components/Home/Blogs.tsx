import React from "react";
import { SanityImageAssetDocument } from "@sanity/client";
// import { HOME_MOCK_BLOGS } from "../../constants/homeMockBlogs";

interface HomeBlogProps {
  title: string;
  preview: string;
  mainImage: SanityImageAssetDocument;
}

const HomeBlog = ({ title, preview, mainImage }: HomeBlogProps) => {
  return (
    <>
      <img src={mainImage.asset.url} width="100%" className="home-blog-image" />
      <h1 className="text-3xl mt-5">{title}</h1>
      <p className="my-3">{preview}</p>
      <button className="text-2xl">READ MORE</button>
    </>
  );
};

const Blogs = ({ blogs }) => {
  return (
    <div className="text-white md:mx-64 mx-6">
      <div className="grid md:grid-cols-2">
        <div>
          <div className="sticky top-0">
            <h1 className="md:text-6xl text-4xl">The Write Up</h1>
            <p className="md:my-10 md-5"></p>
            <button className="bg-yellow-600 text-black py-3 md:py-5 my-10 md:my-0 rounded-full text-3xl px-10">
              READ ALL
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-16">
          {blogs.map((blog) => (
            <div className="">
              <HomeBlog
                title={blog.title}
                preview={blog.preview}
                mainImage={blog.mainImage}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
