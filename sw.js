const chacheName = "pwa-chache-v0";

const assets = [
  //pages
  '/',
  //'/index.html',
  '/working_on',
  '/blogs',
  '/tuturiols',
  //profile pictures
  '/profile-pic/180.jpeg',
  '/profile-pic/266.webp',
  '/profile-pic/266.png',
  //icons
  '/icons/blogger.svg',
  '/icons/hello.svg',
  '/icons/home.svg',
  '/icons/suitcase.svg',
  //styles
  '/assets/css/style.css',
  '/assets/css/colors-light.css',
  '/assets/css/colors-auto.css',
  '/assets/css/colors-dark.css',
  //js
  '/assets/js/animations/barba.js',
  '/assets/js/animations/pageFirstLoad.js',
  '/assets/js/animations/SlideOnVeiwportEnter.js',
  '/assets/js/main.js',
  '/assets/js/google-anylytics.js',
  //js dependencys
  'https://unpkg.com/@barba/core',
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/ScrollTrigger.min.js',
  'https://www.googletagmanager.com/gtag/js?id=G-5LX6PMSFGK'
];

// install event
self.addEventListener('install', evt => {
  //chache files
  evt.waitUntil(
    caches.open(chacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// activate evenet
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys.then(keys => {
      return Promise.all(
        keys
          .filter(key => key !== chacheName)
          .map(key => chaches.delete(key))
      )
    })
  );
});

// fetch event
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(
      cacheResp => cacheResp || fetch(evt.request)
    )
  );
});