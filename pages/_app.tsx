import "../styles/globals.css";
import type { AppProps } from "next/app";

import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
