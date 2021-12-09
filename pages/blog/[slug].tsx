import React from "react";
import Layout from "../../components/Layout";
import BlogDetailsBottom from "../../components/BlogDetails/BlogDetailsBottom";
import BlogDetailsCollage from "../../components/BlogDetails/BlogDetailsCollage";
import BlogDetailsHeader from "../../components/BlogDetails/BlogDetailsHeader";
import BlogDetailsMid from "../../components/BlogDetails/BlogDetailsMid";
import BlogDetailsTop from "../../components/BlogDetails/BlogDetailsTop";
import client from "../../client";

const Blog = ({ blog }) => {
  return (
    <Layout>
      <div className="bg-black md:px-16 text-white">
        <BlogDetailsHeader
          body={blog.body}
          mainImage={blog.mainImage}
          title={blog.title}
          createdAt={blog._createdAt}
        ></BlogDetailsHeader>
        <BlogDetailsTop></BlogDetailsTop>
        <BlogDetailsMid></BlogDetailsMid>
        <BlogDetailsCollage></BlogDetailsCollage>
        <BlogDetailsBottom></BlogDetailsBottom>
      </div>
    </Layout>
  );
};

export async function getStaticProps(context) {
  const blog = await client.fetch(
    `*[_type == "blog" && slug.current == "${context.params.slug}" ]{
        title,
        _createdAt,
        slug,
        body,
        mainImage {
          asset ->{
            url
          }
        }
      }`
  );

  return {
    props: {
      blog: {
        ...blog[0],
        mainImage: blog[0].mainImage.asset.url,
      },
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const blogSlugs = await client.fetch(
    `*[_type == "blog"]{
        slug
      }`
  );

  return {
    paths: blogSlugs.map((blogSlug) => {
      return {
        params: {
          slug: blogSlug.slug.current,
        },
      };
    }),
    fallback: true,
  };
}

export default Blog;
