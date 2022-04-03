import { isUserLoggedIn, useSpotifyContext } from "../Providers/SpotifyAuthProvider";

export default function Home() {
  let active = isUserLoggedIn();
  
  if(!active){
    return "not loggedin"
  }

  return (
    <h1>testing</h1>
  )
}
