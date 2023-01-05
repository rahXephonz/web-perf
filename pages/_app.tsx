import { AppProps } from 'next/app';
import { setup } from 'twind';
import twindConfig from '../twind.config';

if (typeof window !== 'undefined') setup(twindConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
