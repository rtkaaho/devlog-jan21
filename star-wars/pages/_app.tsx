import {Hydrate} from "react-query/hydration";
import {QueryClient, QueryClientProvider} from "react-query";

import '../styles/globals.css'

// init the query client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp
