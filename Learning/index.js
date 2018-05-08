//JavaScript headings snippet:
//This code will print out all heading in any webpage

for (var i = 0, headings = $$('h1,h2,h3,h4,h5,h6');
     i < headings.length; i++) {
   console.log(headings[i].textContent.trim() + " " +  
               headings[i].tagName,
               headings[i]);
}

//The benefits of Offline first

//you register for a service worker like this, ginving the location of your service worker
navigator.serviceWorker.register('/sw.js').then(function (reg) {
	// body...
	console.log('yay!');
}).catch(function (err) {
	// body...
	console.log('boo!');
});

//you can also prrovide a scope and the service worker will control any page whose URL begins with the scope
navigator.serviceWorker.register('/sw.js', {
	scope: '/sample-app-name/'
});

//to use service worker in a safe progressive enhancing way, make sure to write your code in a simple feature detect
if (navigator.serviceWorker) {
	navigator.serviceWorker.register('/sw.js');
}


//to open or create a cache 
caches.open('my-stuff').then(function(cache) {
	// body...
	//this returns a promise for a cache with that name or it creates one if their isn't a chache with that name and opens it
});

//a cache box contains (request and response pairs) from any secure origin