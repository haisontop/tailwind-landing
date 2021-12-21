import React from "react";
import { BlogsList, BlogHeader } from "../components/Blog";
import Layout from "../components/Layout";
import client from "../client";
import ReactPaginate from "react-paginate";
import PaginatePrev from "../components/icons/PaginatePrev";
import PaginateNext from "../components/icons/PaginateNext";
import { withRouter } from "next/router";
import { ITEMS_PER_PAGE } from "../constants/pagination";

const Blogs = ({ blogs, pageCount, router }) => {
  const handlePageChange = (event) => {
    router.push(`/blogs?page=${event.selected + 1}`);
  };

  return (
    <Layout>
      <div className="bg-black text-white xl:px-60">
        <BlogHeader></BlogHeader>
        <BlogsList blogs={blogs} />
        <ReactPaginate
          breakLabel="..."
          nextClassName="p-3"
          onPageChange={handlePageChange}
          disabledClassName="invisible"
          previousLabel={<PaginatePrev />}
          nextLabel={<PaginateNext />}
          containerClassName="flex gap-3 justify-center items-center mt-10 text-xl py-10 font-bold"
          activeLinkClassName="bg-black text-white"
          pageLinkClassName="bg-black text-white py-2 px-3"
          pageCount={pageCount}
          renderOnZeroPageCount={null}
        />
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query: { page = 1 } }) {
  const startOffset = (page - 1) * ITEMS_PER_PAGE;
  const endOffset = startOffset + ITEMS_PER_PAGE - 1;

  const itemCount = await client.fetch(`
    count(*[_type == 'blog'])
  `);

  const pageCount = Math.ceil(itemCount / ITEMS_PER_PAGE);

  const blogs = await client.fetch(
    `*[_type == "blog"][${startOffset}..${endOffset}] | order(_createdAt asc){
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
      pageCount,
    },
  };
}

export default withRouter(Blogs);
