const VERSION = 'v1'

self.addEventListener('install', event => {
    event.waitUntil(precache());
})

self.addEventListener('fetch', event => {
    const request = event.request;
    // GET
    if(request.method !== "GET") {
        return;
    }
});

self.addEventListener('fetch', event => {
    const request = event.request;
    // GET
    if(request.method !== "GET") {
        return;
    }
    // Buscar en cache
    event.respondWith(cachedResponse(request));
    // Actualizar el cache
    event.waitUntil(updateCache(request));
})

async function precache() {
    const cache = await caches.open(VERSION);
    return cache.addAll([
        '/',
        '/index.html',
        '/assets/js/index.js',
        '/assets/js/MediaPlayer.js',
        '/assets/js/plugins/AutoPlay.js',
        '/assets/js/plugins/AutoPause.js',
        '/assets/css/index.css',
        '/assets/video/MyVideo.mp4',
    ]);
}

async function cachedResponse(request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
}

async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
}
