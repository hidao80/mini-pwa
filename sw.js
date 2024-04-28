/**
 * Service Worker
 */
const APP_NAME = "mini-pwa";
const SUB_DIR = APP_NAME;  // for GitHub Pages
// const SUB_DIR = "";  // for localhost:8443 testing
const VERSION = "202404280744JST";
const CACHE_NAME = APP_NAME + "_" + VERSION;

// To publish on github pages, set appName to the subdirectory name.
const assets = [
  // Root
  SUB_DIR + "/",

  // HTML Files
  SUB_DIR + "/index.html",

  // JavaScript Files
  SUB_DIR + "/assets/js/app.js",

  // CSS Files
  SUB_DIR + "/assets/css/app.css",

  // Image Files
  SUB_DIR + "/assets/images/icon256x256.png",
];
console.debug(assets);

// Install proccess
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Cache load processing when fetching resources
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response ? response : fetch(e.request);
    })
  );
});
