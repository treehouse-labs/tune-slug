import { useContext, createContext, useState, useEffect } from "react";

function getStorageValue(key) {
  if (typeof window !== "undefined") {
    // getting stored value
    const saved = localStorage.getItem(key);
    return saved ??  ""
  }
}

const SpotifyAuthContext = createContext();

export const SpotifyAuthProvider = ({ children }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    let tokenFromStorage = getStorageValue("token");
    setToken(tokenFromStorage);
  },[token]);

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


export default {
  SpotifyAuthProvider,
  useSpotifyContext,
};
