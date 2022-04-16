import "../styles/globals.css";
import { SpotifyAuthProvider } from "../Providers/SpotifyAuthProvider";
import {useRouter} from 'next/router';
import { useState, useEffect } from "react";

function App({ Component, pageProps }) {
  const router = useRouter();
  const path = (/#!(\/.*)$/.exec(router.asPath) || [])[1];
  if (path) {
    router.replace(path);
  }

  return (
    <SpotifyAuthProvider>
      <Component {...pageProps} />
    </SpotifyAuthProvider>
  );
}

export default App;
