/**
 * Service Worker
 */
const APP_NAME = "mini-pwa";
const VERSION = "202404281814JST";
const CACHE_NAME = APP_NAME + "_" + VERSION;

// To publish on github pages, set appName to the subdirectory name.
const assets = [
  // Top URL
  "/",

  // HTML Files
  "/index.html",

  // JavaScript Files
  "/assets/js/app.js",

  // CSS Files
  "/assets/css/app.css",

  // Image Files
  "/assets/images/icon256x256.png",
];

// Install proccess
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// Cache load processing when fetching resources
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response ? response : fetch(e.request);
    })
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});
