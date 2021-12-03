import React, { ReactElement, useState } from "react";
import Link from "next/link";

interface Props {
  transparent?: boolean;
}

function Navbar(props: Props): ReactElement {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="relative">
      <div className="flex justify-between  px-4 text-2xl text-white pt-3 absolute top-0 z-40 bg-black">
        <div>
          <ul className="list-none ">
            <li>
              <Link href="/services">Service</Link>
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
      <div className="text-white top-3 right-5 text-3xl fixed z-40">
        <Link href="/">
          <i className="fas fa-home "></i>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
