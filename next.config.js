/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  env: {
    CLIENT_ID: process.env.CLIENT_ID,
    REDIRECT: process.env.REDIRECT,
    ENDPOINT:process.env.ENDPOINT
  }
}

module.exports = nextConfig
