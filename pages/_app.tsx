import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'
import Link from "next/link";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {" "}

          <Navbar />
          <Component {...pageProps} />
          <Footer />{" "}

    </>
  );
}

export default MyApp
