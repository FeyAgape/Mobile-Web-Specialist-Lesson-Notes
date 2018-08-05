# Deploying to a hosting service 

A server usually needs to have a stable (static) IP address so that clients can find it and connect to it.

 [Heroku](https://heroku.com/), a commercial service that will host it on the web where it will be publicly accessible.

## Check in your code
Heroku (and many other web hosting services) works closely with Git: you can deploy a particular version of your code to Heroku by pushing it with the git push command. So in order to deploy your code, it first needs to be checked into a local Git repository.

## Concurrency
Being able to handle two ongoing tasks at the same time is called concurrency, and the basic http.server.HTTPServer doesn't have it. It's pretty straightforward to plug concurrency support into an HTTPServer, though. The Python standard library supports doing this by adding a mixin to the HTTPServer class. A mixin is a sort of helper class, one that adds extra behavior the original class did not have.

## Specialised web servers 
Programs that handle a large number of requests very quickly, eg.

1. Apache

2. NGINX

3. Mircosoft IIS

## Static content and more
The Web was originally designed to serve documents, not to deliver applications. Even today, a large amount of the data presented on any web site is static content — images, HTML files, videos, downloadable files, and other media stored on disk.

Specialized web server programs — like Apache, Nginx, or IIS — can serve static content from disk storage very quickly and efficiently. They can also provide access control, allowing only authenticated users to download particular static content.

## Routing and load balancing
Some web applications have several different server components, each running as a separate process. One thing a specialized web server can do is dispatch requests to the particular backend servers that need to handle each request. There are a lot of names for this, including request routing and reverse proxying.

Some web applications need to do a lot of work on the server side for each request, and need many servers to handle the load. Splitting requests up among several servers is called load balancing.

**Load balancing** also helps handle conditions where one server becomes unavailable, allowing other servers to pick up the slack. A reverse proxy can health check the backend servers, only sending requests to the ones that are currently up and running. This also makes it possible to do updates to the backend servers without having an outage.

## Concurrent users
Handling a large number of network connections at once turns out to be complicated — even more so than plugging concurrency support into your Python web service.

As you may have noticed in your own use of the web, it takes time for a server to respond to a request. The server has to receive and parse the request, come up with the data that it needs to respond, and transmit the response back to the client. The network itself is not instantaneous; it takes time for data to travel from the client to the server.

In addition, a browser is totally allowed to open up multiple connections to the same server, for instance to request resources such as images, or to perform API queries.

All of this means that if a server is handling many requests per second, there will be many requests in progress at once — literally, at any instant in time. We sometimes refer to these as in-flight requests, meaning that the request has "taken off" from the client, but the response has not "landed" again back at the client. A web service can't just handle one request at a time and then go on to the next one; it has to be able to handle many at once.

## Caching
Imagine a web service that does a lot of complicated processing for each request — something like calculating the best route for a trip between two cities on a map. Pretty often, users make the same request repeatedly: imagine if you load up that map, and then you reload the page — or if someone else loads the same map. It's useful if the service can avoid recalculating something it just figured out a second ago. It's also useful if the service can avoid re-sending a large object (such as an image) if it doesn't have to.

One way that web services avoid this is by making use of a cache, a temporary storage for resources that are likely to be reused. Web systems can perform caching in a number of places — but all of them are under control of the server that serves up a particular resource. That server can set HTTP headers indicating that a particular resource is not intended to change quickly, and can safely be cached.

There are a few places that caching usually can happen. Every user's browser maintains a browser cache of cacheable resources — such as images from recently-viewed web pages. The browser can also be configured to pass requests through a web proxy, which can perform caching on behalf of many users. Finally, a web site can use a reverse proxy to cache results so they don't need to be recomputed by a slower application server or database.

All HTTP caching is supposed to be governed by cache control headers set by the server. You can read a lot more about them in [this article](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching) by Google engineer Ilya Grigorik.


## Capacity
Why serve static requests out of cache (or a static web server) rather than out of your application server? Python code is totally capable of sending images or video via HTTP, after all. The reason is that — all else being equal — handling a request faster provides a better user experience, but also makes it possible for your service to support more requests.

If your web service becomes popular, you don't want it to bog down under the strain of more traffic. So it helps to handle different kinds of request with software that can perform that function quickly and efficiently.