/** @type {import('next').NextConfig} */
const nextConfig = { images: { remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }, { protocol: "https", hostname: "raw.githubusercontent.com", pathname:"/PokeAPI/sprites/master/sprites/pokemon/**" },] },}

module.exports = nextConfig
