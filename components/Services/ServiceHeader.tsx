import { useRouter } from "next/router";
import React from "react";
import { useOnClickOutside } from "../../hooks";
import ChevronDown from "../icons/ChevronDown";
import ChevronUp from "../icons/ChevronUp";
import ActiveLink from "./ActiveLink";

interface ServiceHeaderProps {
  title: string;
}

const ServiceHeader = ({ title }: ServiceHeaderProps) => {
  const [mobileHeaderClicked, setMobileHeaderClicked] = React.useState(false);

  const router = useRouter();

  const isCurrentpath = true;

  const ref = React.useRef(null);

  React.useEffect(() => {
    setMobileHeaderClicked(false);
  }, [router.asPath]);

  useOnClickOutside(ref, () => {
    setMobileHeaderClicked(false);
  });

  return (
    <>
      <div className="grid md:grid-cols-4 text-center gap-3 md:gap-7  mx-24 xl:mx-0 hidden md:grid">
        <ActiveLink href="/services/e-commerce">E-commerce</ActiveLink>
        <ActiveLink href="/services/healthcare">Healthcare</ActiveLink>
        <ActiveLink href="/services/blockchain">Blockchain</ActiveLink>
        <ActiveLink href="/services/saas">Saas</ActiveLink>
      </div>
      <div
        className={`grid grid-cols-1 text-center gap-3 md:gap-7  mx-24 xl:mx-0 md:hidden ${!mobileHeaderClicked ? "pb-16" : ""
          }`}
      >
        <div
          style={{
            textDecoration: "none",
            backgroundColor: "#B45309",
            border: isCurrentpath ? "none" : "2px solid #fff",
            color: isCurrentpath && "#000",
            padding: "16px 0px",
            borderRadius: "50px",
            cursor: "pointer",
          }}
          className="flex text-center items-center justify-center relative"
          onClick={() => {
            setMobileHeaderClicked(!mobileHeaderClicked);
          }}
          ref={ref}
        >
          {title}
          <span className="absolute top-6 right-6">
            {mobileHeaderClicked ? <ChevronUp /> : <ChevronDown />}
          </span>
        </div>
        {mobileHeaderClicked && (
          <>
            {router.asPath !== "/services/e-commerce" && (
              <ActiveLink href="/services/e-commerce">E-Commerce</ActiveLink>
            )}
            {router.asPath !== "/services/healthcare" && (
              <ActiveLink href="/services/healthcare">Healthcare</ActiveLink>
            )}
            {router.asPath !== "/services/blockchain" && (
              <ActiveLink href="/services/blockchain">Blockchain</ActiveLink>
            )}
            {router.asPath !== "/services/saas" && (
              <ActiveLink href="/services/saas">Saas</ActiveLink>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ServiceHeader;
