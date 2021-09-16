// give your cache a name
const cacheName = 'my-cache';

// put the static assets and routes you want to cache here
const filesToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/css/a4-try-print.css',
  '/css/a4-try.css',
  '/css/spur.css',
  '/img/logo.gif',
  '/img/logo.jpg',
  '/js/end-scripts/bootstrap.min.js',
  '/js/end-scripts/jquery-3.3.1.slim.min.js',
  '/js/end-scripts/popper.min.js',
  '/js/all.js',
  '/js/chart-js-config.js',
  '/js/Chart.bundle.min.js',
  '/js/fontawesome.js',
  '/js/solid.js',
  '/js/spur.js',
  '/report/Bronallt.html',
  '/report/Coopers.html',
  '/report/Hendy_muga.html',
  '/report/Hendy_Park.html',
  '/report/Llanedi.html',
  '/report/Mill_Teraces.html',
  '/report/Tycroes.html',
  '/webfonts/svgs/bars-solid.svg',
  '/webfonts/svgs/chair-solid.svg',
  '/webfonts/svgs/child-solid.svg',
  '/webfonts/svgs/dumpster-solid.svg',
  '/webfonts/svgs/home-solid.svg',
  '/webfonts/svgs/leaf-solid.svg',
  '/webfonts/svgs/search-solid.svg',
  '/webfonts/svgs/seedling-solid.svg',
  '/webfonts/svgs/user-solid.svg',
  '/webfonts/fa-brands-400.eot',
  '/webfonts/fa-brands-400.svg',
  '/webfonts/fa-brands-400.ttf',
  '/webfonts/fa-brands-400.woff',
  '/webfonts/fa-brands-400.woff2',
  '/webfonts/fa-regular-400.eot',
  '/webfonts/fa-regular-400.svg',
  '/webfonts/fa-regular-400.ttf',
  '/webfonts/fa-regular-400.woff',
  '/webfonts/fa-regular-400.woff2',
  '/webfonts/fa-solid-900.eot',
  '/webfonts/fa-solid-900.svg',
  '/webfonts/fa-solid-900.ttf',
  '/webfonts/fa-solid-900.woff',
  '/webfonts/fa-solid-900.woff2'
];

// the event handler for the activate event
self.addEventListener('activate', e => self.clients.claim());

// the event handler for the install event 
// typically used to cache assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName)
    .then(cache => cache.addAll(filesToCache))
  );
});

// the fetch event handler, to intercept requests and serve all 
// static assets from the cache
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
    .then(response => response ? response : fetch(e.request))
  )
});