self.__precacheManifest = [
  {
    "url": "/_next/static/OzFtY7iB8VgY-tUbS-mow/_buildManifest.js",
    "revision": "0b53fe3ee46c3fc63dd56c185f8aba90"
  },
  {
    "url": "/_next/static/OzFtY7iB8VgY-tUbS-mow/_ssgManifest.js",
    "revision": "abee47769bf307639ace4945f9cfd4ff"
  },
  {
    "url": "/_next/static/OzFtY7iB8VgY-tUbS-mow/pages/_app.js",
    "revision": "ae8c85449d6c87d2759b"
  },
  {
    "url": "/_next/static/OzFtY7iB8VgY-tUbS-mow/pages/_error.js",
    "revision": "5b0c8ce6910cc120d6f2"
  },
  {
    "url": "/_next/static/OzFtY7iB8VgY-tUbS-mow/pages/index.js",
    "revision": "3be6d6e3ac7ff7f0bdc6"
  },
  {
    "url": "/_next/static/chunks/04973f46.c4a6afef92e8dd991da1.js",
    "revision": "79bb85bae48ff4fcf81f"
  },
  {
    "url": "/_next/static/chunks/26e32e5c641439efe62adc1871e49a1aa6fc082e.5896e5322bbc7333d5df.js",
    "revision": "6942c86125c249e3b468"
  },
  {
    "url": "/_next/static/chunks/c3da85a4bd745b9c6912b099f947a3027812a8df.b1d376c125baf89b6d06.js",
    "revision": "98ff040d224f441117f4"
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
