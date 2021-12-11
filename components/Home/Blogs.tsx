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
    <div className="mr-4 md:mr-0">
      <img src={mainImage.asset.url} width="100%" className="home-blog-image" />
      <h1 className="text-xl md:text-3xl mt-5">{title}</h1>
      <p className="my-3">{preview}</p>
      <Link href={`/blog/${slug.current}`}>
        <a className="text-sm md:text-2xl">READ MORE</a>
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
    <div className="text-white md:mx-64 mx-6">
      <div className="grid md:grid-cols-2 pb-12 md:pb-0">
        <div className="flex flex-col">
          <div className="md:sticky md:top-0">
            <h1 className="md:text-6xl text-4xl mb-2 md:mb-15">The Write Up</h1>
            <Link href="/blogs">
              <a className="bg-primary text-black py-3 md:py-5 md:my-0 rounded-full text-xl md:text-3xl px-10 top-7 w-max relative">
                READ ALL
              </a>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-16 mt-32 md:mt-0 hidden md:block">
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
      <div className="mt-4 block md:hidden">
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
