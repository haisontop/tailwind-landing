import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import BlogDetailsBottom from "../../components/BlogDetails/BlogDetailsBottom";
import BlogDetailsCollage from "../../components/BlogDetails/BlogDetailsCollage";
import BlogDetailsHeader from "../../components/BlogDetails/BlogDetailsHeader";
import BlogDetailsMid from "../../components/BlogDetails/BlogDetailsMid";
import BlogDetailsTop from "../../components/BlogDetails/BlogDetailsTop";
import client from "../../client";
import { useRouter } from "next/router";

interface BlogProps {
  mainImage?: string;
  body?: any;
  title?: string;
  _createdAt?: string;
}

const Blog = ({
  body = "",
  title = "",
  _createdAt = "",
  mainImage = "",
}: BlogProps) => {
  const router = useRouter();
  const [nextPost, setNextPost] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `
      *[_type == "blog" && _createdAt > "${_createdAt}"] | order(_createdAt asc) [0]{
        slug,
        title
      }
      `
      )
      .then((data) => {
        console.log(data);
        setNextPost(data);
      });
  }, []);

  return (
    <Layout>
      <div className="bg-black xl:px-16 text-white">
        <BlogDetailsHeader
          body={body}
          mainImage={mainImage}
          title={title}
          createdAt={_createdAt}
        ></BlogDetailsHeader>
        <BlogDetailsTop></BlogDetailsTop>
        <BlogDetailsMid></BlogDetailsMid>
        <BlogDetailsCollage></BlogDetailsCollage>
        <BlogDetailsBottom nextPost={nextPost}></BlogDetailsBottom>
      </div>
    </Layout>
  );
};

export async function getStaticProps(context) {
  const blog = await client.fetch(
    `*[_type == "blog" && slug.current == "${context.params.slug}" ]{
      _id,
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
      ...blog[0],
      mainImage: blog[0].mainImage.asset.url,
      key: blog[0]._id,
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
