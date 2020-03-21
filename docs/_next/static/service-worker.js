self.__precacheManifest = [
  {
    "url": "/_next/static/-qMoVTS4ZKqTMDgKVEy8q/_buildManifest.js",
    "revision": "62d1c636d9183d7b0bf85a54bcf90987"
  },
  {
    "url": "/_next/static/-qMoVTS4ZKqTMDgKVEy8q/_ssgManifest.js",
    "revision": "abee47769bf307639ace4945f9cfd4ff"
  },
  {
    "url": "/_next/static/-qMoVTS4ZKqTMDgKVEy8q/pages/_app.js",
    "revision": "6e266ea88b1bc8ecf3fa"
  },
  {
    "url": "/_next/static/-qMoVTS4ZKqTMDgKVEy8q/pages/_error.js",
    "revision": "6ad4d28bb476ebca0e58"
  },
  {
    "url": "/_next/static/-qMoVTS4ZKqTMDgKVEy8q/pages/index.js",
    "revision": "ce086734dcb7995a2212"
  },
  {
    "url": "/_next/static/chunks/04973f46.c4a6afef92e8dd991da1.js",
    "revision": "79bb85bae48ff4fcf81f"
  },
  {
    "url": "/_next/static/chunks/6980e2dca7a8ad81017f27652a3a0763efb6135a.bffb6f5b8a05970a450a.js",
    "revision": "ce712d0ba3ac79e73288"
  },
  {
    "url": "/_next/static/chunks/commons.9320dc8dfeffd0a94a07.js",
    "revision": "83c29ba5ecbfa8843c55"
  },
  {
    "url": "/_next/static/chunks/e83dde84c5df77902fd3c1bc96a9aa8260e1ad23.5c3e501855b9f7c895a5.js",
    "revision": "86f9b49a64d3eb4df721"
  },
  {
    "url": "/_next/static/chunks/framework.2689030919a9ba0449ff.js",
    "revision": "70b72a196c523622524d"
  },
  {
    "url": "/_next/static/chunks/styles.d06209cb96b2327d6060.js",
    "revision": "46329591d02d1d017de7"
  },
  {
    "url": "/_next/static/css/04973f46.b22ef640.chunk.css",
    "revision": "79bb85bae48ff4fcf81f"
  },
  {
    "url": "/_next/static/runtime/main-08663f62cce3f5fac47d.js",
    "revision": "a857ce8bc6e558d1110a"
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
