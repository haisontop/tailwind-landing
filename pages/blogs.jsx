import React from "react";
import { BlogsList, BlogHeader } from "../components/Blog";
import Layout from "../components/Layout";

const Blogs = () => {
  return (
    <Layout>
      <div className="bg-black text-white md:px-60">
        <BlogHeader></BlogHeader>
        <BlogsList></BlogsList>
      </div>
    </Layout>
  );
};

export default Blogs;
