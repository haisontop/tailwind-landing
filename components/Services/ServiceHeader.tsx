import React, { useState } from "react";
import ActiveLink from "./ActiveLink";
import Link from "next/link";
import { useRouter } from "next/router";
const ServiceHeader = () => {
  const Router = useRouter()
  const [active, setActive] = useState(false);
  const [select, setSelect] = useState('E-commerce');
  const color = Router.query.slug === "healthcare" ? "#9EE0D6" : "#B45309"
  const style = {
    backgroundColor: color
  }

  return (
    <>
      <div className="xl:grid xl:grid-cols-4 text-center gap-3 xl:gap-7  mx-24 xl:mx-0 hidden">
        <ActiveLink href="/services/e-commerce">E-commerce</ActiveLink>
        <ActiveLink href="/services/healthcare">Healthcare</ActiveLink>
        <ActiveLink href="/services/blockchain">Blockchain</ActiveLink>
        <ActiveLink href="/services/saas">Saas</ActiveLink>
      </div>
      {/*================= drop down menuba r================*/}
      <div className="text-center mx-24 xl:mx-0 xl:hidden">
        <div className="grid grid-cols-1 text-center text-2xl gap-3 ">
          <button style={style} onClick={e => setActive(!active)} className="px-4 py-3 lg:py-5 md:py-5 flex rounded-full text-1xl text-black justify-center">
            {select}
            <div className="ml-5">
              {
                !active ?
                  <img src="/images/dropdown.png" width="15px" className="mt-4" alt="" /> : <img src="/images/uparrow.png" width="15px" className="mt-4" alt="" />
              }
            </div>
          </button>
          {
            active &&
            <div className="grid grid-cols-1 text-center text-2xl gap-3 ">
              {
                select !== "E-commerce" &&
                <div className="border-2 border-white py-3 rounded-full lg:py-5 md:py-5">
                  <Link href="/services/e-commerce"><div onClick={() => { setSelect("E-commerce"); setActive(!active) }} >E-commerce</div></Link>
                </div>
              }
              {
                select !== "Healthcare" &&
                <div className="border-2 border-white py-3 rounded-full lg:py-5 md:py-5">
                  <Link href="/services/healthcare">
                    <div onClick={() => { setSelect("Healthcare"); setActive(!active) }} ><button>Healthcare</button></div>
                  </Link>
                </div>
              }
              {
                select !== "Blockchain" &&
                <div className="border-2 border-white py-3 rounded-full lg:py-5 md:py-5">
                  <Link href="/services/blockchain"><div onClick={() => { setSelect("Blockchain"); setActive(!active) }} >Blockchain</div></Link>
                </div>
              }
              {
                select !== "Sass" &&
                <div className="border-2 border-white py-3 rounded-full lg:py-5 md:py-5">
                  <Link href="/services/saas"><div onClick={() => { setSelect("Sass"); setActive(!active) }} >Saas</div></Link>
                </div>
              }
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default ServiceHeader;
