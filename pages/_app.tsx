import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../styles/globals.css"
import { Overpass } from "@next/font/google"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { SSRProvider } from 'react-bootstrap'
const overpass = Overpass()

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <SSRProvider>
    <div className={overpass.className}>
      <Component {...pageProps} />
    </div>
    </SSRProvider>
  )
}
