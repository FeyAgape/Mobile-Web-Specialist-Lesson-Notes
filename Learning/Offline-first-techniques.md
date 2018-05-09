This document was written using Markdown, for help on writing in Markdown, [visit here for help](https://help.github.com/articles/basic-writing-and-formatting-syntax/).


# Offline first techniques


1. Deliver the page's header and content from a cache on the device, then attempt to fetch updated content from the network
2. Deliver the page's header from a cache, then attempt to fetch the content from the network




## To run your project on the server


Run `npm install` to install all dependencies the application requires.

Use `npm run serve` to kickoff the build scripts and launch a server that hosts the application at `http://localhost:8888`



### Introducing the Service Worker

A Service worker give you power over the network. its a webworker that run seperately from your page.
you register for a service worker like this, giving the location of your service worker

`navigator.serviceWorker.register('/sw.js')` 


### CASHE API

If you want to load content .i.e html, css, assets and js without using the network, we need somewhere to store the html, css, js and assets, using the CASCHE API

to open or create a cache

`caches.open('my-stuff').then(function(cache) {`

	// body...`

	//this returns a promise for a cache with that name or it creates one if their isn't a chache with that name and opens it`

`});`

a cache box contains (request and response pairs) from any secure origin



## AJAX( or otherwise known as Asynchronous Javascript and XML, however its now know has the concept of asynchronously requesting data) with XHR

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

**A little rusty on your HTTP methods?**
The main two that you'll be using are:

> GET - to retrieve data

> POST- to send data

**Warning:** *For security reasons, you can only make requests for assets and data on the same domain as the site that will end up loading the data. For example, to asynchronously request data from google.com your browser needs to be on google.com. This is known as the [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy).* This might seem extremely limiting, and it is!

The reason for this is because JavaScript has control over so much information on the page. It has access to all cookies and can determine passwords since it can track what keys are pressed. However, the web wouldn't be what it is today if all information was bordered off in its own silos. The way to circumvent the same-origin policy is with [CORS (Cross-Origin Resource Sharing)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS). CORS must a technology that is implemented on the server. Services that provide APIs use CORS to allow developers to circumvent the same-origin policy and access their information.

### For Example:1

if you go to Google, open up the developer tools, and run the following on the console:

`const req = new XMLHttpRequest();
req.open('GET', 'https://www.google.com/');`

nothing happens because the XHR's .open() method does not actually send the request! It sets the stage and gives the object the info it will need when the request is actually sent. 


### For Example:2 

or if you go on udacity,s open up the developer tools, and run the following on the console:

`const myAsyncRequest = new XMLHttpRequest();
myAsyncRequest.open('GET', 'https://udacity.com/', false);`

Passing false as the third option makes the XHR request become a synchronous one. This will cause the JavaScript engine to pause and wait until the request is returned before continuing - this "pause and wait" is also called "blocking". This is a terrible idea and completely defeats the purpose for having an asynchronous behavior. Make sure you never set your XHR objects this way! Instead, either pass true as the 3rd argument or leave it blank (which makes it default to true).'

### To actually send the request, we need to use the send method: `asyncRequestObject.send();`

`const asyncRequestObject = new XMLHttpRequest();`
`asyncRequestObject.open('GET', 'https://unsplash.com');`
`asyncRequestObject.send();`

this code makes a request however it does absolutely nothing

### Handling Success
To handle the successful response of an XHR request, we set the onload property on the object to a function that will handle it:

`function handleSuccess () {
    // in the function, the *this* value is the XHR object
    // this.responseText holds the response from the server`

    console.log( this.responseText ); // the HTML of https://unsplash.com/
`}`

`asyncRequestObject.onload = handleSuccess;`

As we just saw, if onload isn't set, then the request does return...but nothing happens with it.

### Handling Errors
You might've picked up that **onload** is called when the response is successful. If something happens with the request and it can't be fulfilled, then we need to use the onerror property:

`function handleError () {
    // in the function, the `this` value is the XHR object
    console.log( 'An error occurred 😞' );
`}

`asyncRequestObject.onerror = handleError;`

As with onload, if **onerror** isn't set and an error occurs, that error will just fail silently and your code (and your user!) won't have any idea what's wrong or any way to recover."


Here's the full code that we've built up that creates the XHR object, tells it what info to request, sets up handlers for a success or error, and then actually sends the request:

`function handleSuccess () { 
  console.log( this.responseText ); 
// the HTML of https://unsplash.com/}
function handleError () { 
  console.log( 'An error occurred \uD83D\uDE1E' );
}
const asyncRequestObject = new XMLHttpRequest();
asyncRequestObject.open('GET', 'https://unsplash.com');
asyncRequestObject.onload = handleSuccess;
asyncRequestObject.onerror = handleError;
asyncRequestObject.send();`


### APIs and JSON
Getting the HTML of a website is ok, but it's probably not very useful. The data it returns is in a format that is extremely difficult to parse and consume. It would be a lot easier if we could get just the data we want in an easily formatted data structure. If you're thinking that JSON would be a good idea, then you're right and I'll give you a piece of my cake!

Instead of requesting the base URL for Unsplash, let's create an app that pulls an image from Unsplash's API and relevant articles from the New York Times.

When making a request from an API that returns JSON, **all we need to do is convert that JSON response into a JavaScript object. We can do that with JSON.parse();.** Let's tweak the onload function to handle a JSON response:

`function handleSuccess () {
const data = JSON.parse( this.responseText ); // convert data from JSON to a JavaScript object
console.log( data );
}`

`asyncRequestObject.onload = handleSuccess;`