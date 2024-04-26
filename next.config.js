/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ['en', 'pt', 'es'],
    defaultLocale: 'en',
    localeDetection: false,
  },
};

module.exports = nextConfig;