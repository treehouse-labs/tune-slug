/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  env: {
    MY_VAR: "Hello World",
    SPOTIFY_CLIENT_ID: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
    SPOTIFY_AUTH_REDIRECT: process.env.NEXT_PUBLIC_SPOTIFY_AUTH_REDIRECT,
    SPOTIFY_AUTH_ENDPOINT:process.env.NEXT_PUBLIC_SPOTIFY_AUTH_ENDPOINT
  }
}

module.exports = nextConfig
