self.__precacheManifest = [
  {
    "url": "/_next/static/am0xlURkBFXnEZJI7CQYy/_buildManifest.js",
    "revision": "fb96ae7926f5104f50f0cf1b3a23a9b5"
  },
  {
    "url": "/_next/static/am0xlURkBFXnEZJI7CQYy/_ssgManifest.js",
    "revision": "abee47769bf307639ace4945f9cfd4ff"
  },
  {
    "url": "/_next/static/am0xlURkBFXnEZJI7CQYy/pages/_app.js",
    "revision": "6520c9dc602179a71e41"
  },
  {
    "url": "/_next/static/am0xlURkBFXnEZJI7CQYy/pages/_error.js",
    "revision": "450b88137063c2a2078d"
  },
  {
    "url": "/_next/static/am0xlURkBFXnEZJI7CQYy/pages/index.js",
    "revision": "fcd5a843386899f1eab4"
  },
  {
    "url": "/_next/static/chunks/40971febfe7f90ed3017e6ec7423e625c3f1b91f.5896e5322bbc7333d5df.js",
    "revision": "66df3e44f8b00c539471"
  },
  {
    "url": "/_next/static/chunks/commons.9320dc8dfeffd0a94a07.js",
    "revision": "83c29ba5ecbfa8843c55"
  },
  {
    "url": "/_next/static/chunks/f89d38efa2679cf133e58336462e46f6f3131ac5.b1d376c125baf89b6d06.js",
    "revision": "eb64148d4d1524b019ab"
  },
  {
    "url": "/_next/static/chunks/framework.2689030919a9ba0449ff.js",
    "revision": "70b72a196c523622524d"
  },
  {
    "url": "/_next/static/runtime/main-c5b7ef6432589381772f.js",
    "revision": "da9712428e40c47872c1"
  },
  {
    "url": "/_next/static/runtime/polyfills-934ee1c38f9bd83fb20d.js",
    "revision": "df490ee85201423a56cf"
  },
  {
    "url": "/_next/static/runtime/webpack-b65cab0b00afd201cbda.js",
    "revision": "04cb911a52af21884f6c"
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
