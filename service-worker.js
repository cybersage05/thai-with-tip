const CACHE_NAME = 'thai-with-tip-cache-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/vocabulary.html',
  '/Download_page.html',
  '/conversations/index.html',
  '/conversations/cab-driver.html',
  '/conversations/delivery/index.html',
  '/styles.css',
  '/script.js',
  '/vocab.js',
  '/background.png',
  '/cards.png',
  '/instagram.png',
  '/youtube.png',
  '/tip.png',
  '/Market.png',
  '/study.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
    return;
  }
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
