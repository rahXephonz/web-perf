import { AppProps } from 'next/app';
import { useRef } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { setup } from 'twind';
import twindConfig from '../twind.config';

if (typeof window !== 'undefined') {
  setup(twindConfig);
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClientRef = useRef<QueryClient | null>(null);

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: { refetchOnWindowFocus: false },
      },
    });
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Component {...pageProps} />;
    </QueryClientProvider>
  );
};

export default MyApp;
