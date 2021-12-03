import React from "react";
import BlogBody from "../components/Blog/BlogBody.jsx";
import BlogHeader from "../components/Blog/BlogHeader.jsx";
import Layout from "../components/Layout";

const Blogs = () => {
  return (
    <Layout>
      <div className="bg-black text-white md:px-60">
        <BlogHeader></BlogHeader>
        <BlogBody></BlogBody>
      </div>
    </Layout>
  );
};

export default Blogs;
