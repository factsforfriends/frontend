self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/04973f46.c4a6afef92e8dd991da1.js",
    "revision": "79bb85bae48ff4fcf81f"
  },
  {
    "url": "/_next/static/chunks/3f3fa1350c1743ba449a4b45c53fa90df4c3d9bd.5896e5322bbc7333d5df.js",
    "revision": "adb8be8e44b3f7676d7e"
  },
  {
    "url": "/_next/static/chunks/aec5a68057c7ae94562528c2a7d629140d43ab5f.b1d376c125baf89b6d06.js",
    "revision": "7bf53fb365fd52f57f40"
  },
  {
    "url": "/_next/static/chunks/commons.9320dc8dfeffd0a94a07.js",
    "revision": "83c29ba5ecbfa8843c55"
  },
  {
    "url": "/_next/static/chunks/framework.2689030919a9ba0449ff.js",
    "revision": "70b72a196c523622524d"
  },
  {
    "url": "/_next/static/chunks/styles.f722bb1f7e16f020f956.js",
    "revision": "4ceda49c9371bbcd4f76"
  },
  {
    "url": "/_next/static/css/04973f46.b22ef640.chunk.css",
    "revision": "79bb85bae48ff4fcf81f"
  },
  {
    "url": "/_next/static/qtib5P77nB3cWYklo0XFO/_buildManifest.js",
    "revision": "0b53fe3ee46c3fc63dd56c185f8aba90"
  },
  {
    "url": "/_next/static/qtib5P77nB3cWYklo0XFO/_ssgManifest.js",
    "revision": "abee47769bf307639ace4945f9cfd4ff"
  },
  {
    "url": "/_next/static/qtib5P77nB3cWYklo0XFO/pages/_app.js",
    "revision": "0356e95b01c0de0f2193"
  },
  {
    "url": "/_next/static/qtib5P77nB3cWYklo0XFO/pages/_error.js",
    "revision": "d11ca3902b38ac5a90d3"
  },
  {
    "url": "/_next/static/qtib5P77nB3cWYklo0XFO/pages/index.js",
    "revision": "f38a8a79c9a606d3635c"
  },
  {
    "url": "/_next/static/runtime/main-6f01a9164da867bce483.js",
    "revision": "84d449b13bd820a14d59"
  },
  {
    "url": "/_next/static/runtime/polyfills-46552457ef8ae77d40aa.js",
    "revision": "b79cb31b617723190969"
  },
  {
    "url": "/_next/static/runtime/webpack-9369c5c69dbf6d4912cb.js",
    "revision": "339869abd27a67efd9af"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"https-calls","networkTimeoutSeconds":15, plugins: [new workbox.expiration.Plugin({ maxEntries: 150, maxAgeSeconds: 2592000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
