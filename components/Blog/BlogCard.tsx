import React from "react";

interface BlogCardProps {
  _createdAt: string;
  title: string;
  body: any;
  preview: string;
  imagePath: string;
}

const BlogCard = (props: BlogCardProps) => {
  const { imagePath, title, preview, _createdAt } = props;

  return (
    <div className="flex flex-col items-start">
      <img src={imagePath} alt="" width="100%" />
      <p className="text-2xl mt-2">{new Date(_createdAt).toUTCString()}</p>
      <h1 className="text-3xl mt-5">{title}</h1>
      <p className="my-3">{preview}</p>
      <button className="text-2xl">READ MORE</button>
    </div>
  );
};

export default BlogCard;
