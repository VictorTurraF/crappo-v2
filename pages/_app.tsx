import { AppProps } from "next/app"

import '../styles/bootstrap-reboot.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
