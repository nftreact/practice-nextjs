import { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import { GlobalStyles } from "../styles/globals.style";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/globals.style.tsx";
import "../src/assets/styles/global.css";

export default function App({ Component, pageProps: { session, ...pageProps }, router }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="http://www.remasgallery.com/" rel="canonical" />
        <meta property="og:site_name" content="remasgallery.com" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
