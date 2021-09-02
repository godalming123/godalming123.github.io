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
        '/assets/js/google-anylytics.js',
        '/assets/js/animations/barba.js',
        '/assets/js/animations/pageFirstLoad.js',
        '/assets/js/animations/SlideOnVeiwportEnter.js',
        '/sw.js',
        //js dependencys
        'https://unpkg.com/@barba/core',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/ScrollTrigger.min.js',
        //other
        '/assets/manifest.json'
      ]);
    })
  );
});