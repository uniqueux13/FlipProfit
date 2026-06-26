// Self-destructing service worker.
//
// The FlipProfit app used to be hosted at the apex domain (flipprofit.online)
// before it moved to app.flipprofit.online. Browsers that visited the old app
// still have its service worker registered for this origin, and it keeps
// serving a stale, precached copy of the old app instead of this marketing
// site. This worker replaces that old one, wipes every cache it left behind,
// unregisters itself, and reloads open tabs onto the live site.
//
// It is safe for visitors who never had the old app: caches.keys() is empty,
// so this is effectively a no-op that immediately unregisters.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: 'window' });
      for (const client of clients) {
        client.navigate(client.url);
      }
    })()
  );
});
