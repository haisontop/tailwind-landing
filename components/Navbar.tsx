import React, { ReactElement, useEffect, useState } from "react";
import Link from "next/link";
import { useScrollPosition } from "../hooks";
import MenuDrawer from "./MenuDrawer/MenuDrawer";
import PlusIcon from "./icons/PlusIcon";
import LogoIcon from "./icons/LogoIcon";
import { useRouter } from "next/router";

interface Props {
  transparent?: boolean;
}

function Navbar(props: Props): ReactElement {
  const showLogo = useScrollPosition(500);
  const [isOpen, setIsOpen] = React.useState(false);
  const Router = useRouter()
  return (
    <div>
      <div className="flex justify-between xl:px-4 text-2xl text-white pt-3 fixed top-0 z-40 left-5">
        <div className="hidden xl:block">
          <ul className="list-none">
            <li>
              <Link href="/services/e-commerce">Service</Link>
            </li>
            <li className="mt-1">
              <Link href="/blogs">The Write up</Link>
            </li>
            <li className="mt-1">
              <Link href="/">Connect</Link>
            </li>
          </ul>
        </div>
        <div className="block xl:hidden">
          <button
            className={`bg-black text-white rounded px-4 py-1`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <PlusIcon />
          </button>
        </div>
        <div> </div>
      </div>
      <div className="text-white top-3 right-5 xl:text-3xl fixed z-40 cursor-pointer">
        <Link href="/">{!showLogo && (Router.asPath === "/") ? <h1 className="text-3xl md:text-3xl font-semibold">COMET</h1> : <LogoIcon />}</Link>
      </div>
      <MenuDrawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <ul className="list-none text-white text-4xl lg:text-6xl xl:text-2xl md:text-5xl text-center my-36">
          <li>
            <Link href="/services/e-commerce">Service</Link>
          </li>
          <li className="mt-5 lg:mt-7 xl:mt-1 md:mt-7">
            <Link href="/blogs">The Write up</Link>
          </li>
          <li className="mt-5  lg:mt-7 xl:mt-1 md:mt-7">
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </MenuDrawer>
    </div>
  );
}

export default Navbar;
