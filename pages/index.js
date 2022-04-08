import {
  useSpotifyContext,
} from "../Providers/SpotifyAuthProvider";
import Router from "next/router";
import { useEffect } from "react";

export default function Home() {
  const [token, setToken] = useSpotifyContext();  

  useEffect( () => {
    if(!token){
      Router.push("/login"); // No token Redirect
      console.log("Wattt")
    }
  },[token])


  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    Router.push('/login');
  }

  return (
    <>
       <button onClick={logout}>Logout</button>
       <h1>Token: {token}</h1>
    </>
  );
}
