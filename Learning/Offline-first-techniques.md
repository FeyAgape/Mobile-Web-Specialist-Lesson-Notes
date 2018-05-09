This document was written using Markdown, for help on writing in Markdown, [visit here for help](https://help.github.com/articles/basic-writing-and-formatting-syntax/).


# Offline first techniques


1. Deliver the page's header and content from a cache on the device, then attempt to fetch updated content from the network
2. Deliver the page's header from a cache, then attempt to fetch the content from the network




## To run your project on the server


Run npm install to install all dependencies the application requires.

Use npm run serve to kickoff the build scripts and launch a server that hosts the application at `http://localhost:8888`



### Introducing the Service Worker

A Service worker give you power over the network. its a webworker that run seperately from your page.
you register for a service worker like this, ginving the location of your service worker
navigator.serviceWorker.register('/sw.js') 


### CASHE API

If you want to load content .i.e html, css, assets and js without using the network, we need somewhere to store the html, css, js and assets, using the CASCHE API

o open or create a cache 
caches.open('my-stuff').then(function(cache) {
	// body...
	//this returns a promise for a cache with that name or it creates one if their isn't a chache with that name and opens it
});

a cache box contains (request and response pairs) from any secure origin



### AJAX( or otherwise known as Asynchronous Javascript and XML, however its now know has the concept of asynchronously requesting data) with XHR

AJAX allows you to make a request for data without the need to pause everything to wait for the request to return. it allows you to move on and do something else, and once the request returns you deal with it. 

Just like how the document is provided by the JavaScript engine, the JavaScript engine also provides a way for us to make asynchronous HTTP requests. We do that with an XMLHttpRequest object. We can create these objects with the provided XMLHttpRequest constructor function.

One of the best ways to learn is to get your hands dirty and try things out! So go to [Unsplash](https://unsplash.com/), open up the developer tools, and run the following on the console:

`const asyncRequestObject = new XMLHttpRequest();`

Confusingly, the constructor function has "XML" in it, but it's not limited to only XML documents. Remember that the "AJAX" acronym used to stand for "Asynchronous JavaScript and XML". Since the main file format that was originally used for asynchronous data exchange were XML files, it's easy to see why the function is called XMLHttpRequest!

XMLHttpRequests (commonly abbreviated as XHR or xhr) can be used to request any file type (e.g. plain text files, HTML files, JSON files, image files, etc.) or data from an API.

**API (Application Programming Interface)**

So we've constructed an XHR object named asyncRequestObject. There are a number of methods that are available to us. One of the most important is the open method.

`asyncRequestObject.open();`
.open() takes a number of parameters, but the most important are its first two: the HTTP method URL to send the request

If we want to asynchronously request the homepage from the popular high-res image site, Unsplash, we'd use a GET request and provide the URL:

`const asyncRequestObject = new XMLHttpRequest();`
`asyncRequestObject.open('GET', 'https://unsplash.com');`

A little rusty on your HTTP methods?
The main two that you'll be using are:

> GET - to retrieve data

> POST- to send data