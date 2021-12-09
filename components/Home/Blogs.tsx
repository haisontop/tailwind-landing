import React from "react";
import { SanityImageAssetDocument } from "@sanity/client";
import { Slug } from "../../constants/types";
// import { HOME_MOCK_BLOGS } from "../../constants/homeMockBlogs";
import Link from "next/link";

interface HomeBlogProps {
  title: string;
  preview: string;
  slug: Slug;
  mainImage: SanityImageAssetDocument;
}

const HomeBlog = ({ title, preview, mainImage, slug }: HomeBlogProps) => {
  return (
    <>
      <img src={mainImage.asset.url} width="100%" className="home-blog-image" />
      <h1 className="text-3xl mt-5">{title}</h1>
      <p className="my-3">{preview}</p>

      <Link href={`/blog/${slug.current}`}>
        <a className="text-2xl">READ MORE</a>
      </Link>
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
            <Link href="/blogs">
              <a className="bg-yellow-600 text-black py-3 md:py-5 my-10 md:my-0 rounded-full text-3xl px-10 relative top-7">
                READ ALL
              </a>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-16 mt-32 md:mt-0">
          {blogs.map((blog) => (
            <div className="">
              <HomeBlog
                slug={blog.slug}
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
