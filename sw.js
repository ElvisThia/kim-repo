const CACHE_NAME = "julie-store-static-v4";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=10",
  "./app.js?v=10",
  "./manifest.webmanifest",
  "./assets/covers/before-sunrise.jpg",
  "./assets/covers/blood-merchant.jpg",
  "./assets/covers/creative-act.jpg",
  "./assets/covers/in-the-mood-for-love.jpg",
  "./assets/covers/life-is-beautiful.jpg",
  "./assets/covers/limit-beginning.jpg",
  "./assets/covers/one-hundred-years.jpg",
  "./assets/covers/the-wire.jpg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))),
    ),
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
