const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

// precacheAndRoute() precaches an array of URLs. self._WB_MANIFEST contains the array of URLs to precache.
precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    // Sets the cache expiration to 60 days
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// TODO: Implement asset caching
// Uses registerRoute to create a callback function that requests JS and CSS files for caching.
registerRoute(({ request }) =>
['style', 'script', 'worker'].includes(request.destination),
// new CacheFirst(pageCache)
new CacheFirst({
  cacheName: 'assets',
  plugins: [
    // Sets the cache expiration to 60 days
    new ExpirationPlugin({
      maxAgeSeconds: 60 * 60 * 24 * 60,
    }),
    // Stores cache responses with the headers up to about a month.
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
  ],
}),
);

