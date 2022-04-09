import "../styles/globals.css";
import { SpotifyAuthProvider } from "../Providers/SpotifyAuthProvider";
//import {  } from "../hooks/useLocalStorage";
import { useState, useEffect } from "react";

function App({ Component, pageProps }) {
  return (
    <SpotifyAuthProvider>
      <Component {...pageProps} />
    </SpotifyAuthProvider>
  );
}

export default App;
