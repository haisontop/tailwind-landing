import React from "react";
import Layout from "../../components/Layout";
import BlogDetailsBottom from "../../components/BlogDetails/BlogDetailsBottom";
import BlogDetailsCollage from "../../components/BlogDetails/BlogDetailsCollage";
import BlogDetailsHeader from "../../components/BlogDetails/BlogDetailsHeader";
import BlogDetailsMid from "../../components/BlogDetails/BlogDetailsMid";
import BlogDetailsTop from "../../components/BlogDetails/BlogDetailsTop";

const Blog = () => {
  return (
    <Layout>
      <div className="bg-black md:px-16 text-white">
        <BlogDetailsHeader></BlogDetailsHeader>
        <BlogDetailsTop></BlogDetailsTop>
        <BlogDetailsMid></BlogDetailsMid>
        <BlogDetailsCollage></BlogDetailsCollage>
        <BlogDetailsBottom></BlogDetailsBottom>
      </div>
    </Layout>
  );
};

export default Blog;
