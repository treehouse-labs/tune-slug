import { useContext, createContext, useState, useEffect } from "react";

const SpotifyAuthContext = createContext("");

function getStorageValue(key) {
  if (typeof window !== "undefined") {
    // getting stored value
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved);
    return initial;
  }
}



export const SpotifyAuthProvider = ({ children, value }) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    let tokenFromStorage = getStorageValue("token");
    setToken(tokenFromStorage);
  });
  
  return (
    <SpotifyAuthContext.Provider value={{ token, setToken }}>
      {children}
    </SpotifyAuthContext.Provider>
  );
};

export const useSpotifyContext = () => {
  const context = useContext(SpotifyAuthContext);
  if (context === undefined || context === null) {
    throw new Error(
      "usePageSettings must be used within a PageSettingsProvider"
    );
  }

  let { token, setToken } = context;
  return [token, setToken];
};

export const isUserLoggedIn = () => {
  const [token,] = useSpotifyContext();
  if (token && typeof token === "string" && token.length > 0) {
    return true; // user fetch
  }

  return false;
};

export default {
  isUserLoggedIn,
  SpotifyAuthProvider,
  useSpotifyContext,
};
