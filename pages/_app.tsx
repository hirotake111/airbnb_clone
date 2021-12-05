import "../styles/globals.css";
import type { AppProps } from "next/app";

import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Nav />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
