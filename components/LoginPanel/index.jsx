import style from "./styles.module.scss";

const LoginPanel = ({}) => {
  const CLIENT_ID = process.env.CLIENT_ID;
  const REDIRECT_URI = process.env.REDIRECT;
  const AUTH_ENDPOINT = process.env.ENDPOINT;
  const RESPONSE_TYPE = "token";

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
