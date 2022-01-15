import React from "react";
import { SanityImageAssetDocument } from "@sanity/client";
import { Slug } from "../../constants/types";
// import { HOME_MOCK_BLOGS } from "../../constants/homeMockBlogs";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface HomeBlogProps {
  title: string;
  preview: string;
  slug: Slug;
  mainImage: SanityImageAssetDocument;
}

const HomeBlog = ({ title, preview, mainImage, slug }: HomeBlogProps) => {
  return (
    <div className="mr-4 xl:mr-0 xl:mb-10">
      <img src={mainImage.asset.url} width="100%" className="home-blog-image" />
      <h1 className="text-xl xl:text-3xl mt-5">{title}</h1>
      <p className="my-3">{preview}</p>
      <Link href={`/blog/${slug.current}`}>
        <a className="text-sm lg:text-3xl xl:text-xl hover:underline md:text-2xl font-sans underline xl:no-underline">READ MORE</a>
      </Link>
    </div>
  );
};

interface CustomButtonGroupProps {
  next?: () => void;
  previous?: () => void;
}

const CustomButtonGroup = ({ next, previous }: CustomButtonGroupProps) => {
  return (
    <div className="custom-button-group">
      <button
        onClick={() => previous()}
        className="border border-white rounded-2xl border-solid py-3 px-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17.124"
          height="10.063"
          viewBox="0 0 17.124 10.063"
        >
          <path
            id="Path_11"
            data-name="Path 11"
            d="M4.716,0V15.076L.753,11.205,0,11.976l5.271,5.149,4.792-5.182-.791-.732L5.793,14.972V0Z"
            transform="translate(17.125) rotate(90)"
            fill="#fff"
          />
        </svg>
      </button>
      <button
        onClick={() => next()}
        className="ml-2 border border-white rounded-2xl border-solid py-3 px-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17.124"
          height="10.063"
          viewBox="0 0 17.124 10.063"
        >
          <path
            id="Path_10"
            data-name="Path 10"
            d="M4.716,0V15.076L.753,11.205,0,11.976l5.271,5.149,4.792-5.182-.791-.732L5.793,14.972V0Z"
            transform="translate(-0.001 10.063) rotate(-90)"
            fill="#fff"
          />
        </svg>
      </button>
    </div>
  );
};

const Blogs = ({ blogs }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 60,
    },
  };

  return (
    <div className="text-white xl:mx-60 mx-6">
      <div className="grid xl:grid-cols-2 pb-12 xl:pb-0">
        <div className="flex flex-col">
          <div className=" grid grid-cols-1 xl:sticky xl:top-10">
            <h1 className="xl:text-5xl text-4xl mb-5 xl:mb-6">The Write Up</h1>
            <p className="font-semibold xl:text-1xl xl:inline-block">Industry news, latest projects, and <br />  marketing insights. </p>
            <Link href="/blogs">
              <a className="bg-primary text-black py-3 xl:top-20 xl:my-0 rounded-full text-xl xl:text-1xl xl:px-14 px-10 top-4 w-max relative">
                READ ALL
              </a>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-16 mt-32 xl:mt-0 hidden xl:block">
          {blogs.map((blog) => (
            <div className="">
              <HomeBlog
                slug={blog.slug}
                title={blog.title}
                preview={blog.preview}
                mainImage={blog.mainImage}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 block xl:hidden">
        <Carousel
          responsive={responsive}
          ssr
          containerClass="container-padding-bottom"
          arrows={false}
          customButtonGroup={<CustomButtonGroup />}
          partialVisible={true}
        >
          {blogs.map((blog) => (
            <HomeBlog
              slug={blog.slug}
              title={blog.title}
              preview={blog.preview}
              mainImage={blog.mainImage}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Blogs;
