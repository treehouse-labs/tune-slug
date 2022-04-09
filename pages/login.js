import {
  useSpotifyContext,
} from "../Providers/SpotifyAuthProvider";
import { useEffect} from "react";
import Router from "next/router";
import Footer from '@/components/Footer'

const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const REDIRECT_URI =  process.env.NEXT_PUBLIC_SPOTIFY_AUTH_REDIRECT;
const AUTH_ENDPOINT = process.env.NEXT_PUBLIC_SPOTIFY_AUTH_ENDPOINT;
const RESPONSE_TYPE = "token";


const Login = ({}) => {
  const [token, setToken] = useSpotifyContext();
  
  useEffect( () => {
    if(token){
      Router.push("/"); // No token Redirect
    }
  },[token])

  return (
    <>
      <a
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      >
        Login to Spotify
      </a>
      <Footer/>
    </>
  );
};

export default Login;
