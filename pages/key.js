const Page = ({}) => {
    return(
        <div>
           {process.env.SPOTIFY_CLIENT_ID}
           {process.env.SPOTIFY_AUTH_REDIRECT}
           {process.env.SPOTIFY_AUTH_ENDPOINT}
           {process.env.MY_VAR}
        </div>
    )
}

export default Page;