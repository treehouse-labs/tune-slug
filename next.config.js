/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    MY_VAR: process.env.MY_VAR
  }
}

module.exports = nextConfig
