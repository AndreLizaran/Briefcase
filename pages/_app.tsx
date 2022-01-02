// Modules
import type { AppProps } from 'next/app';

// Styles
import '../styles/general.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
