/** @type {import('next').NextConfig} */
const config = {
  env: {
    GUILD: process.env.GUILD,
    MAX_RANK: process.env.MAX_RANK,
    REALM: process.env.REALM,
    REGION: process.env.REGION
  },
  images: {
    domains: ['render.worldofwarcraft.com', 'cdnassets.raider.io']
  },
  reactStrictMode: true
}

module.exports = config
