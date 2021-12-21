import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

const BlogDetailsBottom = ({ nextPost }) => {
  const router = useRouter();
  const handleBack = () => {
    router.push(`/blogs`);
  };

  return (
    <>
      <div className=" pt-5 pb-20  xl:px-36 md:px-10">
        <div className="mt-5 px-5 xl:px-0 xl:mt-36">
          <p className="lg:text-2xl xl:text-base md:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae modi
            odio maxime tenetur rem mollitia quis vero quaerat, necessitatibus
            temporibus fuga tempore placeat quos ut ullam eum. Illum rem
            blanditiis esse quos iure quaerat. Voluptatem adipisci, doloremque
            porro aut impedit quas nam voluptas temporibus amet dicta,
            aspernatur totam eius tempora ab illum optio assumenda maiores unde
            consequatur? Esse sint blanditiis, soluta fugiat tempore ut eveniet
            corrupti! Quas debitis modi quaerat earum distinctio aperiam,
            praesentium dolorum eum repudiandae omnis eos animi quod vero, a
            dolores corporis obcaecati rerum esse, officiis aliquid accusamus?
            Laborum ratione distinctio quas est non possimus quasi consequuntur.
          </p>
        </div>
        <div className="mt-10 hidden xl:block">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae modi
            odio maxime tenetur rem mollitia quis vero quaerat, necessitatibus
            temporibus fuga tempore placeat quos ut ullam eum. Illum rem
            blanditiis esse quos iure quaerat. Voluptatem adipisci, doloremque
            porro aut impedit quas nam voluptas temporibus amet dicta,
            aspernatur totam eius tempora ab illum optio assumenda maiores unde
            consequatur? Esse sint blanditiis, soluta fugiat tempore ut eveniet
            corrupti! Quas debitis modi quaerat earum distinctio aperiam,
            praesentium dolorum eum repudiandae omnis eos animi quod vero, a
            dolores corporis obcaecati rerum esse, officiis aliquid accusamus?
            Laborum ratione distinctio quas est non possimus quasi consequuntur.
          </p>
        </div>
        <div className="text-center px-5 xl:px-0 xl:text-left">
          <button
            className="bg-primary w-full text-black py-4 lg:py-7 xl:py-4 xl:w-96 rounded-full text-2xl lg:text-4xl xl:text-2xl xl:px-10 mt-10 xl:mr-5"
            onClick={handleBack}
          >
            Back to all article
          </button>

          {nextPost && (
            <Link href={`/blog/${nextPost.slug.current}`}>
              <a className="inline-block text-center bg-black text-white py-5 lg:py-7 xl:py-5 rounded-full border-2 w-full mt-5 border-white border-opacity-100 xl:w-96 lg:text-4xl xl:text-base md:text-2xl">
                Next up: {nextPost && nextPost.title}
              </a>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogDetailsBottom;
