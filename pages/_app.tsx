import { ChakraProvider, Stack } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Head from 'next/head';

import { EmptyLayout } from '@/components/layout';
import { AppPropsWithLayout } from '@/modals';
import '@/styles/globals.css';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <>
      <Head>
        <title>Interview exercice</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <Stack h="100vh">
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Stack>
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
}
