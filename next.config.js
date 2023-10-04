/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    localeDetection: false,
    defaultLocale: 'en',
    locales: ['en', 'sv'],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
