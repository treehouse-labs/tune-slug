/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    MY_VAR: process.env.MY_VAR,
    NEXT_PUBLIC_SPOTIFY_CLIENT_ID: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
    NEXT_PUBLIC_SPOTIFY_AUTH_REDIRECT: process.env.NEXT_PUBLIC_SPOTIFY_AUTH_REDIRECT,
    NEXT_PUBLIC_SPOTIFY_AUTH_ENDPOINT:process.env.NEXT_PUBLIC_SPOTIFY_AUTH_ENDPOINT
  }
}

module.exports = nextConfig
