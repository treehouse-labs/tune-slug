const Page = ({}) => {
    return(
        <div>
           {process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}
           {process.env.NEXT_PUBLIC_SPOTIFY_AUTH_REDIRECT}
           {process.env.NEXT_PUBLIC_SPOTIFY_AUTH_ENDPOINT}
        </div>
    )
}

export default Page;