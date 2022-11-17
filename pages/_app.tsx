import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../styles/globals.css"
import { Overpass } from "@next/font/google"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect } from 'react'
const overpass = Overpass()

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <main className={overpass.className}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
