if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator
      .serviceWorker
      .register('https://lvzhenbang.github.io/webpack4.x-multi-page/dist/service-worker.js')
      .then(registration => {
        console.log(`Yay! Workbox is loaded 🎉. ${registration}`);
      }).catch(registrationError => {
        console.log(`Boo! Workbox didn't load 😬.  ${registrationError}`);
      });
  });
}