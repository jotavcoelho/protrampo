import { AppProps } from 'next/app'
import Head from 'next/head';

import { Header } from '../components/Header';

import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ProTrampo</title>
      </Head>
      
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
