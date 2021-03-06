import "../styles/globals.css";
import "../styles/Calendar.css"; // react calendar

import type { AppProps } from "next/app";

import Header from "../components/Header/Header";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
