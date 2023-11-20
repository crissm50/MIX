// Instalación del Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker installed');
});

// Activación del Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker activated');
});

// Interceptar las peticiones de red
self.addEventListener('fetch', event => {
  // Aquí puedes agregar estrategias de caché, manejo de solicitudes, etc.
});