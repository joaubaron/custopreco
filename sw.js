// Service Worker 
// Toda vez que trocar fotos/áudios, a versão será atualizada automaticamente pelo deploy.yml
const CACHE_VERSION = '14.07.2026-1226';
const CACHE_NAME = `20anos-${CACHE_VERSION}`;

const ASSETS = [
  "index.html",
  "manifest.json",
  "icon-192.png",
  "icon-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
});
