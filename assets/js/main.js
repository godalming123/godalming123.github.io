//register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then (reg => {console.log('Service Worker registration successfull:', reg);})
    .catch(err => {console.log('Service Worker registration failed:',      err);});
  };