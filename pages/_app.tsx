import React from "react";
import { AppProps } from "next/app";
import App from "next/app";
import Head from "next/head";
import "../assets/styles/HomeAnimation.css"
import "../assets/styles/index.css";
import "../assets/styles/slides.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>COMET</title>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default MyApp;
