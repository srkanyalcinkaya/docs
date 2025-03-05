const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['tr'],
    defaultLocale: 'tr',
  },
  images: {
    domains: ['lawlinkglobal.com'],
  },
  // Favicon ve diğer statik dosyalar için
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://docs.lawlinkglobal.com' : '',
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}

module.exports = withNextra(nextConfig) 