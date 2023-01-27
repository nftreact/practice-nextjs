import { AppProps } from "next/app";
import React from "react";
import "../styles/globals.style.tsx";
import "../src/assets/styles/global.css";
import Head from "next/head";
import { GlobalStyles } from "../styles/globals.style";

export default function App({ Component, pageProps: { session, ...pageProps }, router }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="http://www.remasgallery.com/" rel="canonical" />
        <meta property="og:site_name" content="remasgallery.com" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
