// Progressive Web App: Add service worker with network-first strategy.
// Network-first strategy means that if there is no internet connection,
// the browser will use files previously saved locally to the user’s device instead.
// AKA Offline Mode!
const withOffline = require("next-offline");
const withCSS = require("@zeit/next-css");

const webpack = require("webpack");

const isProd = (process.env.NODE_ENV || "production") === "production";

const assetPrefix = isProd ? "/frontend" : "";

const nextConfig = {
  target: "serverless",
  workboxOpts: {
    swDest: "static/service-worker.js",
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: "networkFirst",
        options: {
          cacheName: "https-calls",
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  },
  exportPathMap: () => ({
    "/": { page: "/" },
    "/page1": { page: "/page1" }
  }),
  assetPrefix: assetPrefix,
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.ASSET_PREFIX": JSON.stringify(assetPrefix)
      })
    );

    return config;
  }
};

module.exports = withOffline(withCSS(nextConfig));
