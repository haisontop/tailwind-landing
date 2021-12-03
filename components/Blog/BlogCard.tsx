import { create } from "domain";
import React from "react";

interface BlogCardProps {
  createdAt: string;
  title: string;
  description: string;
  imagePath: string;
}

const BlogCard = (props: BlogCardProps) => {
  const { imagePath, title, description, createdAt } = props;

  return (
    <div className="flex flex-col items-start">
      <img src={imagePath} alt="" width="100%" />
      <p className="text-2xl">{createdAt}</p>
      <h1 className="text-3xl mt-5">{title}</h1>
      <p className="my-3">{description}</p>
      <button className="text-2xl">READ MORE</button>
    </div>
  );
};

export default BlogCard;
