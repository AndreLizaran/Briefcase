// Modules
import Head from 'next/head';
import type { AppProps } from 'next/app';

// Styles
import '../styles/general.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Briefcase | André Lizarán</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
