self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('bh-agent-cache').then((cache) => {
      return cache.addAll([
        '/',
        'https://sfcodechecker.github.io/vikash/index.html',
        'https://sfcodechecker.github.io/vikash/manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
