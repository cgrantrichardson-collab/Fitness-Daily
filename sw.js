self.addEventListener('install',e=>{
  e.waitUntil(caches.open('fd-v12').then(c=>c.addAll([
    './','index.html','manifest.webmanifest',
    'icon-512.png','icon-192.png','icon-180.png','favicon.png','splash-portrait.png'
  ])));
});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
