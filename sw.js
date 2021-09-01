function registerServiceWorker() {
  // register sw script in supporting browsers
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', { scope: '/' }).then(() => {
      console.log('Service Worker registered successfully.');
    }).catch(error => {
      console.log('Service Worker registration failed:', error);
    });
  }
}

// sw.js
self.addEventListener('install', e => {
  e.waitUntil(
    // after the service worker is installed,
    // open a new cache
    caches.open('my-pwa-cache').then(cache => {
      // add all URLs of resources we want to cache
      return cache.addAll([
        //pages
        '/',
        '/index.html',
        '/working_on.html',
        '/blogs.html',
        '/tuturiols.html',
        //imgs
        '/progile_pic.png',
        //styles
        '/assets/css/style.css',
        '/asstes/css/colors-light.css',
        '/assets/css/colors-auto.css'
        '/assets/css/colors-dark.css'
        //js
        '/assets/js/google-anylytics.js',
        '/assets/js/animations/barba.js',
        '/assets/js/animations/pageFirstLoad.js',
        '/assets/js/animations/SlideOnVeiwportEnter.js'
      ]);
    })
  );
});

registerServiceWorker();