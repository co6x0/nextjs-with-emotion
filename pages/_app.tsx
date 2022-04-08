import "../styles/globals.css";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import type { AppProps } from "next/app";

const cache = createCache({ key: "next" });
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <Component {...pageProps} />
    </CacheProvider>
  );
}

export default MyApp;
