// Service worker mínimo: permite instalar el juego en la pantalla de inicio. No guarda nada en caché (así las actualizaciones llegan siempre).
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{});
