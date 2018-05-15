# Fetch

Fetch is the new way to make network requests! After looking at all of the manual setup that needs to go into setting up an XMLHttpRequest, you might be feeling (like I sure did!) that a lot of complexity went into making a simple request. If all I want is an image from Unsplash, why do I need to do all this setup before I can even make the request? I just want an image file, so let me just ask for the file without having to drill through the unnecessarily complicated XHR spec.

Fetch is a new API that was built to make requesting resources (primarily across a network) a whole lot easier. One thing that makes the new Fetch API a lot nicer than the old XHR way of doing things is that Fetch is promise-based!

Hopefully you're sold that Fetch is the way of the future for making requests, so let's see it in action!

## ⚠️ Fetch Is Promise-based ⚠️
As mentioned above, the new Fetch API utilizes Promises under the hood. If you've got a handle on how Promises work, then give yourself a pat on the back then skip down to the next section. If the word "Promises" makes you feel a little queasy and unsure of your life's future, don't panic! Breathe! Then head over to our short course on JavaScript Promises to level up your JavaScript muscles.

## ⚠️ Might Need A Polyfill ⚠️
Check out [http://caniuse.com/#feat=fetch](http://caniuse.com/#feat=fetch) to see if your browser supports this awesome new API!

If your browser is not supported, just add [this polyfill](https://github.com/github/fetch) to your project, so you can start using Fetch even without your browser supporting it!


## A sample fetch request

`fetch('<URL-to-the-resource-that-is-being-requested>');`


So yeah...that's it. In it's smallest form, a Fetch request is just the `fetch()` function and a string to the resource that's being requested. It's just so short and easy to read.

**&Let's take a peek at what a real request looks like:**

Making  a fetch request for an image from Unsplash.

`fetch('https://api.unsplash.com/search/photos?page=1&query=flowers');`
If you try running this Fetch request on the console, then you should get a Promise returned to you.

Just because Fetch is new and awesome and is replacing the XHR object for making asynchronous network requests doesn't mean it can bypass the rules for making those network requests. **Fetch requests still need to obey the cross-origin protocol of how resources are shared.** This means that, by default, you can only make requests for assets and data on the same domain as the site that will end up loading the data. 
**Remember that Unsplash requires an Authorization header to make a request through its API.**

### A basic fetch request is really simple to set up. 
Have a look at the following code:

``fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });``


The Fetch request takes the URL to the requested resource as the first argument, but the second argument is a configuration object. One of the options to this config object is a headers property.

One of the new additions that rode along on the coattails of Fetch is a new Headers constructor function. The headers property of a Fetch request's configuration object can either be a plain object of headers to include, or it can be a Headers object that's been built up with headers.

``fetch(https://api.unsplash.com/search/photos?page=1&query=${searchedForText}, { 
     headers: { 
         Authorization: 'Client-ID abc123' 
    } 
});``

``const requestHeaders = new Headers(); 
requestHeaders.append('Authorization', 'Client-ID abc123'); 
fetch(https://api.unsplash.com/search/photos?page=1&query=${searchedForText}, { 
     headers: requestHeaders 
});``

The GET HTTP method is used for a Fetch request.

### Changing The HTTP Method

So the default HTTP method for a Fetch request is the GET method. We can choose a different HTTP method by passing a method property in the configuration object:

``fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
    method: 'POST'
});``

This will send the request with the POST HTTP header.

Fetch's specification does not limit what HTTP methods can be used, although it does recommend that all methods are written in uppercase for consistency with the HTTP Verbs specification.

## 💡 Javascript Promises Reminder 💡

Dealing with the returned data from a Fetch request is all done with Promises, so if any of this looks confusing or you don't know how `.then()` works or why it's needed, check out our course on [JavaScript Promises](https://www.udacity.com/course/javascript-promises--ud898).

Since a Fetch request returns a Promise, then all you have to do is call .then() on that Promise.


**`.blob().`**should be used if you want to fetch an image

 .blob() will extract the image body from the response.


## ES6 arrow function

One quick way to shrink the amount of code is to use an ES6 Arrow function! We can convert the first .then() function that gets the response, calls the .json() method on it, and returns a Promise all to a single line with an Arrow function:

``// without the arrow function
}).then(function(response) {
    return response.json();
})``

``// using the arrow function
}).then(response => response.json())``


So the new request would be:

``fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
    headers: {
        Authorization: 'Client-ID abc123'
    }
}).then(response => response.json())
.then(addImage);``

``function addImage(data) {
    debugger;
}``