import React, { ReactElement, useEffect, useState } from "react";
import Link from "next/link";
import { useScrollPosition } from "../hooks";

interface Props {
  transparent?: boolean;
}

function Navbar(props: Props): ReactElement {
  const showLogo = useScrollPosition(500);

  return (
    <div>
      <div className="flex justify-between md:px-4 text-2xl text-white pt-3 fixed top-0 z-40 left-5">
        <div>
          <ul className="list-none">
            <li>
              <Link href="/services/e-commerce">Service</Link>
            </li>
            <li className="mt-1">
              <Link href="/blogs">The Write up</Link>
            </li>
            <li className="mt-1">
              <Link href="/">Contect</Link>
            </li>
          </ul>
        </div>
        <div> </div>
      </div>
      <div className="text-white top-3 right-5 md:text-3xl fixed z-40 cursor-pointer">
        <Link href="/">
          <h1>{showLogo ? "Home" : "COMMET"}</h1>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
