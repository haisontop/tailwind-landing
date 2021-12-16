import React from "react";
import Link from "next/link";

interface BlogCardProps {
  _createdAt: string;
  slug: string;
  title: string;
  body: any;
  preview: string;
  imagePath: string;
}

const BlogCard = (props: BlogCardProps) => {
  const { imagePath, title, preview, _createdAt, slug } = props;

  return (
    <div className="flex flex-col items-start">
      <img src={imagePath} alt="" width="100%" />
      <p className="text-1xl mt-2">{new Date(_createdAt).toUTCString()}</p>
      <h1 className="text-3xl mt-5">{title}</h1>
      <p className="my-3">{preview}</p>
      <Link href={`/blog/${slug}`}>
        <a className="text-1xl md:text-2xl underline md:no-underline">READ MORE</a>
      </Link>
    </div>
  );
};

export default BlogCard;
