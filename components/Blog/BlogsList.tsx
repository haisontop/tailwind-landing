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
    <div className="pb-5 md:pb-0">
      <div className="grid md:grid-cols-2 gap-10 mt-10 px-5 md:px-0">
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
