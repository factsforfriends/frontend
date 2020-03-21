self.__precacheManifest = [
  {
    "url": "/frontend/_next/static/Fdg6LuDZGYtuUHC00lyE4/_buildManifest.js",
    "revision": "62d1c636d9183d7b0bf85a54bcf90987"
  },
  {
    "url": "/frontend/_next/static/Fdg6LuDZGYtuUHC00lyE4/_ssgManifest.js",
    "revision": "abee47769bf307639ace4945f9cfd4ff"
  },
  {
    "url": "/frontend/_next/static/Fdg6LuDZGYtuUHC00lyE4/pages/_app.js",
    "revision": "599848cc2df8026e346d"
  },
  {
    "url": "/frontend/_next/static/Fdg6LuDZGYtuUHC00lyE4/pages/_error.js",
    "revision": "3c753dc6d943111664a9"
  },
  {
    "url": "/frontend/_next/static/Fdg6LuDZGYtuUHC00lyE4/pages/index.js",
    "revision": "017918ad47c78b3a7209"
  },
  {
    "url": "/frontend/_next/static/chunks/04973f46.c4a6afef92e8dd991da1.js",
    "revision": "79bb85bae48ff4fcf81f"
  },
  {
    "url": "/frontend/_next/static/chunks/68c344ad6a9e5da003a5e356f9b3bd44e897d297.5896e5322bbc7333d5df.js",
    "revision": "a8ad9cedab9509cfcde3"
  },
  {
    "url": "/frontend/_next/static/chunks/commons.9320dc8dfeffd0a94a07.js",
    "revision": "83c29ba5ecbfa8843c55"
  },
  {
    "url": "/frontend/_next/static/chunks/fe0090ed3b30ea837c14f8354ef38eb964c33afd.b1d376c125baf89b6d06.js",
    "revision": "e51b5f3045d8ad32018d"
  },
  {
    "url": "/frontend/_next/static/chunks/framework.2689030919a9ba0449ff.js",
    "revision": "70b72a196c523622524d"
  },
  {
    "url": "/frontend/_next/static/chunks/styles.d06209cb96b2327d6060.js",
    "revision": "46329591d02d1d017de7"
  },
  {
    "url": "/frontend/_next/static/css/04973f46.b22ef640.chunk.css",
    "revision": "79bb85bae48ff4fcf81f"
  },
  {
    "url": "/frontend/_next/static/runtime/main-6f01a9164da867bce483.js",
    "revision": "84d449b13bd820a14d59"
  },
  {
    "url": "/frontend/_next/static/runtime/polyfills-46552457ef8ae77d40aa.js",
    "revision": "b79cb31b617723190969"
  },
  {
    "url": "/frontend/_next/static/runtime/webpack-9369c5c69dbf6d4912cb.js",
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
