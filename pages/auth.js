import Router from 'next/router';

import { useEffect } from 'react'
import {
    useSpotifyContext,
  } from "../Providers/SpotifyAuthProvider";

const getTokenFromResponse = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
};

const Auth = ({}) => {
    const [, setToken] = useSpotifyContext();

    useEffect( () => {
        if(window.location.hash){
            let {access_token} = getTokenFromResponse();
            if(!access_token){
                Router.push('/login');
            }
            window.localStorage.setItem('token', access_token);
            setToken(access_token);
            Router.push('/');
        }
    }, [])
   
    return(
        <div>
            auth
        </div>
    )
}

export default Auth;