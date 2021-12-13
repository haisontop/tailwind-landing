import React from "react";
import CloseIcon from "../icons/CloseIcon";
import PlusIcon from "../icons/PlusIcon";

export default function MenuDrawer({ children, isOpen, setIsOpen }) {
  console.log("isOpen", isOpen);

  return (
    <main
      className={
        " fixed overflow-hidden z-1001 bg-black bg-opacity-25 inset-0 transform ease-in-out" +
        (isOpen
          ? " transition-opacity opacity-100 duration-100 translate-x-0  "
          : " transition-all delay-100 opacity-0 -translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen left-0 absolute h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  bg-black" +
          (isOpen ? " translate-x-0 " : "-translate-x-full ")
        }
      >
        <article className="relative w-screen pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <button
            className={`bg-green text-white rounded px-4 py-1 mt-4 ml-6 w-min`}
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon />
          </button>
          <div className="py-2 px-6">{children}</div>
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
