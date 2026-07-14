const CACHE_NAME = 'futevolei-v2';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Instala o motor e salva os arquivos no cache do celular
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    ))
  );
  self.clients.claim();
});

// Faz o app rodar sem internet puxando do cache
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Achou no cache, retorna!
        }
        return fetch(event.request); // Não achou, busca na internet
      }
    )
  );
});
