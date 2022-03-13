import { AppProps } from "next/app";
import GlobalStyles from '../styles/global';

import "../styles/bootstrap-reboot.min.css";
import "../styles/rubik-font.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
