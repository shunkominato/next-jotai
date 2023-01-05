/** @type {import('next').NextConfig} */

// see https://github.com/facebookexperimental/Recoil/issues/733
const withInterceptStdout = require('next-intercept-stdout');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withInterceptStdout(
  {
    reactStrictMode: true,
    // swcMinify: false,
    // ignoreDuringBuilds: true,
    // staticPageGenerationTimeout: 1000
  },
  (text) => (text.includes('Duplicate atom key') ? '' : text)
);

const config = withBundleAnalyzer({
  ...nextConfig,
});

const urlPrefix = '/';
module.exports = {
  ...config,
  // assetPrefix: urlPrefix,
  // basePath: urlPrefix,
  // trailingSlash: true,
  publicRuntimeConfig: { urlPrefix },
};
