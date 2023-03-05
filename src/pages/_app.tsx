import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import '../styles/globals.css';
import { UiProvider } from '../lib/providers/UiProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});
//

function MyApp({ Component, pageProps }: AppProps) {
  // useCsrfToken();
  return (
    <QueryClientProvider client={queryClient}>
      <UiProvider>
        <div className="bg-slate-100">
          <Component {...pageProps} />
        </div>
      </UiProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
