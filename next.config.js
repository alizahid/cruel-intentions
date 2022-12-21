/** @type {import('next').NextConfig} */
const config = {
  env: {
    FACTION: process.env.FACTION,
    GUILD: process.env.GUILD,
    LEADER_RANK: process.env.LEADER_RANK,
    MAX_RANK: process.env.MAX_RANK,
    REALM: process.env.REALM,
    RECRUITMENT: process.env.RECRUITMENT,
    REGION: process.env.REGION
  },
  reactStrictMode: true
}

module.exports = config
