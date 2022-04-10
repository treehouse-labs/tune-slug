import style from "./styles.module.scss";
const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = process.env.NEXT_PUBLIC_SPOTIFY_AUTH_REDIRECT;
const AUTH_ENDPOINT = process.env.NEXT_PUBLIC_SPOTIFY_AUTH_ENDPOINT;
const RESPONSE_TYPE = "token";

const LoginPanel = ({}) => {
  return (
    <section className={style.loginPanel}>

        <a
          aria-label="Log In With Spotify"
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Log In With Spotify
        </a>
    </section>
  );
};

export default LoginPanel;
