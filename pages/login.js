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
    </>
  );
};

export default Login;
