import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import "../styles/globals.scss"
import Head from 'next/head'
import { Overpass } from "@next/font/google"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { SSRProvider } from 'react-bootstrap'
const overpass = Overpass()
import Footer from '../components/Footer'


export default function App({ Component, pageProps }: AppProps) {

  return (
    <SSRProvider>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
      </Head>
      <div className={overpass.className}>
        <Component {...pageProps} />
        <Footer />
      </div>
    </SSRProvider>
  )
}
