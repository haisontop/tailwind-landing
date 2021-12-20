import React from "react";
import BlockContent from "@sanity/block-content-to-react";

interface BlogHeaderProps {
  title: string;
  createdAt: string;
  mainImage: string;
  body: any;
}

const SlugHeader = ({ title, createdAt, mainImage, body }: BlogHeaderProps) => {
  return (
    <div className=" text-white pt-10 px-5 lg:px-10 xl:px-0 md:px-10">
      <div className="xl:px-32">
        <h1 className="text-3xl lg:text-5xl md:text-5xl">{title}</h1>
        <p className="mt-10 text-2xl">{new Date(createdAt).toUTCString()}</p>
        <p className="mt-5">
          <BlockContent blocks={body} />
        </p>
      </div>
      <div className="mt-10 w-full xl:w-1/2 mx-auto">
        <img src={mainImage} width="100%" alt="" />
      </div>
    </div>
  );
};

export default SlugHeader;
