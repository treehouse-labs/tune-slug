import { useSpotifyContext } from "../Providers/SpotifyAuthProvider";
import Router from "next/router";
import { useEffect, useState } from "react";

async function getUserProfile(token) {
  let options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return await fetch("https://api.spotify.com/v1/me", options);
}

export default function Home() {
  const [token, setToken] = useSpotifyContext();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) {
      Router.push("/login"); // No token Redirect
    } else {
      getUserProfile(token)
        .then((res) => res.json())
        .then((res) => {
          if (res?.error) {
            setError(res);
          } else {
            console.log(res);
            setUser(res);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    Router.push("/login");
  };

  if (!user && loading) {
    return <h1> Loading..</h1>;
  }

  if (error) {
    return <h1> error..</h1>;
  }

  return (
    <>
      <button onClick={logout}>Logout</button>
      <h1>Hello, {user.display_name} 👋</h1>
      {user.images?.length > 0 ? <img src={user.images[0].url} alt="User Image"/>  : null}
    </>
  );
}
