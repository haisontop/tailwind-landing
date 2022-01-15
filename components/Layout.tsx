import { PropsWithChildren } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props {
  title?: string;
  transparent?: boolean;
}

const Layout = (props: PropsWithChildren<Props>) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap" rel="stylesheet"></link>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <header>
        <Navbar transparent={true} />
      </header>
      <main>
        <div className="bg-black pt-10">{props.children}</div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
