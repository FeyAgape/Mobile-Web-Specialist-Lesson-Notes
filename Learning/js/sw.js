self.addEventListener('install', function(event) {
	/*
	var urlsToCache = [
	//include all your files here by pointing to the files url
    '/',
    'js/main.js',
    'css/main.css',
    'imgs/icon.png',
    'https://fonts.gstatic.com/s/roboto/v15/2UX7WLTfW3W8TclTUvlFyQ.woff',
    'https://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOD8E0i7KZn-EPnyo3HZu7kw.woff'
  ];*/
  event.waitUntil(
  	// TODO: open a cache named 'appname-static-v1'
    // Add cache the urls from urlsToCache
    caches.open('appname-static-v1').then(function(cache){
    	return cache.addAll(
    		/*
	//include all your files here by pointing to the files url
    [
    '/',
    'js/main.js',
    'css/main.css',
    'imgs/icon.png',
    'https://fonts.gstatic.com/s/roboto/v15/2UX7WLTfW3W8TclTUvlFyQ.woff',
    'https://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOD8E0i7KZn-EPnyo3HZu7kw.woff'
  ]*/);
    })
  	);
});

/*
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).then(function(response) {
      if (response.status === 404) {
        // TODO: instead, respond with the gif at /imgs/dr-evil.gif
        // using a network request you fetch instead and link to the images file URL
        //return fetch ('/imgs/dr-evil.gif');
        return new Response("Whoops, not found");
      }
      return response;
    }).catch(function() {
      return new Response("Uh oh, that totally failed!");
    })
  );
});
*/

self.addEventListener('fetch', function(event) {
  event.respondWith(
});