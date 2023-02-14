import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import '../styles/globals.css';

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
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: 'Helvetica',
          // breakpoints: {
          //   xs: 500,
          //   sm: 800,
          // },
          components: {
            Button: {
              styles: {
                root: {
                  boxShadow: `0 4px 5px rgba(0, 0, 0, 0.25)`,
                  '&:hover': {
                    boxShadow: `0 5px 10px rgba(0, 0, 0, 0.6)`,
                  },
                },
              },
            },
          },
          colors: {
            blue: [
              '#F0BBDD',
              '#ED9BCF',
              '#EC7CC3',
              '#ED5DB8',
              '#3c74c9',
              '#2860b5',
              '#084BA6',
              '#073F8D',
              '#C50E82',
              '#03A9F4',
            ],
          },
          primaryColor: 'blue',
        }}
      >
        <div className="bg-slate-100">
          <Component {...pageProps} />
        </div>
      </MantineProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
