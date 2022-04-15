import {
  useSpotifyContext,
} from "../Providers/SpotifyAuthProvider";
import { useEffect} from "react";
import Router from "next/router";
import Footer from '@/components/Footer'
import LoginPanel from '@/components/LoginPanel'


const Login = ({}) => {
  const [token, setToken] = useSpotifyContext();
  
  useEffect( () => {
    if(token){
      Router.push("/"); // No token Redirect
    }
  },[token])

  return (
    <>
      <LoginPanel/>
      <Footer/>
      <div>
           {process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}
           {process.env.NEXT_PUBLIC_SPOTIFY_AUTH_REDIRECT}
           {process.env.NEXT_PUBLIC_SPOTIFY_AUTH_ENDPOINT}
        </div>
    </>
  );
};

export default Login;
