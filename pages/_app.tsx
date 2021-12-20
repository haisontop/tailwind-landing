import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "../assets/styles/HomeAnimation.css";
import "../assets/styles/index.css";
import "../assets/styles/slides.css";
import "../assets/styles/blogs.css";
import "../assets/styles/services.css";
import NextNProgress from "nextjs-progressbar";

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
      <NextNProgress
        color="#fff"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default MyApp;
