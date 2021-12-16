import React from "react";
import { BlogsList, BlogHeader } from "../components/Blog";
import Layout from "../components/Layout";
import client from "../client";

const Blogs = ({ blogs }) => {
  return (
    <Layout>
      <div className="bg-black text-white xl:px-60">
        <BlogHeader></BlogHeader>
        <BlogsList blogs={blogs} />
      </div>
    </Layout>
  );
};

export async function getStaticProps(context) {
  const blogs = await client.fetch(
    `*[_type == "blog"][0..2]{
      title,
      _createdAt,
      publishedAt,
      preview,
      slug ,
      mainImage {
        asset -> {
          _id,
          url
        }
      }
    }`
  );

  return {
    props: {
      blogs,
    },
  };
}

export default Blogs;
