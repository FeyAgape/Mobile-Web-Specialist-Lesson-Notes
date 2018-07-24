# HTTP's Request and Response Cycle

Common abbreviations

SGML - Standard Generalized Markup Language
HTML - HyperText Markup Language
HTTP - Hypertext Transfer Protocol


### Example of a HTTP Request
``GET /pictures/kitty.jpg HTTP/1.1
//Header section of the request, and it contains addtional data about the request itself, all of it are optional except for the host
Host: www.google.com
User-Agent: Mozilla/5.0
Connection: keep-alive
Accept: text/html
If-None-Match: b2arb0a1rba``



### Example of a HTTP Response
``HTTP/1.1 200 ok
//Header section of the response, and it contains addtional data about the response, all of it are optional except for the Content-Length, has it needs to tell the client how many bytes of data it should expect.
Content-Length: 16824
Server: Apache
Content-Type: Text/html
Date: Wed, 06 Apr 2016
Etag: fd87e6789
<Binary data>``


GET: HTTP method that tells the server to send data to us
POST: HTTP method that instrusts the server to save the data we are sending. POST requests are potentially handled differently by proxies and the browser than GET requests.


## AJAX
AJAX is a group of web technologies that let you make a requests programmatically with Javascript instead of navigating and effectively reloading the entire website.

XMLHttpRequest (XHR) is the most common way of doing it.

FETCH: does the exact same thing but with a cleaner API, utilizing promises, therefore integrates much better with the rest of the modern Javascript APIs.

### Example of a FETCH Request
``fetch("/animals/cat.json")
.then (response => response.text ())
.then (body => console.log(body)); ``

With FETCH, you can utilize all the HTTP methods the protocol specifies and have full control of which headers are been sent, well most of all the headers.

### Another Fetch Request
``
fetch('password.txt', {
	'method': 'PUT',
	'headers': {
		'X-Udacity-Exercise': 'fetch is awesome!'
	}
}).then(function( response) {
	return response.text();
	}) .then(function ( data ) {
		console.log( data );
		});
	 ``

## HTTP Request
Every request begins with a unique verb called a **method** and serves a specific purpose. Every request-responce pair is called a round trip and they take a lot of time to complete.

## Methods
1. GET
2. POST
3. PUT
4. DELETE
5. HEAD: Allows you to get the headers of a file without having to receive the entire file itself.
6. OPTIONS: Is supposed to give you a list of methods that are accepted on the current URL, but not every server sopports this.

## Response Headers
Headers contain additional data about requests or responses. These are some of the important ones:

**`Content-Length`** is a header that must be contained in every response and tells the browser the size of the body in the response. This way the browser knows how many bytes it can expect to receive after the header section and can show you a meaningful progress bar when downloading a file.

**`Content-Type`** is also a non-optional header and tells you what type the document has. This way the browser knows which parsing engine to spin up. If it's an image/jpeg, show the image. It’s text/html? Let’s parse it and fire off the necessary, additional HTTP requests. And so on.

**`Last-Modified`** is a header that contains the date when the document was last changed. It turned out that the Last-Modified date is not very reliable when trying to figure out if a document has been changed. Sometimes developers will uploaded all files to the server after fixing something, resetting the Last-Modified date on all files even though the contents only changed on a subset. To accommodate this, most servers also send out an ETag. ETag stands for entity tag, and is a unique identifier that changes solely depending on the content of the file. Most servers actually use a hash function like SHA256 to calculate the ETag.

**`Cache-Control`** is exactly what it sounds like. It allows the server to control how and for how long the client will cache the response it received. Cache-Control is a complex beast and has a lot of built-in features. 99% of the time, you only need the “cacheability“ and the “max-age”.

**`If-Modified-Since`** permits the server to skip sending the actual content of the document if it hasn’t been changed since the date provided in that header. Is there something similar for ETags? Yes there is! The header is called If-None-Match and does exactly that. If the ETag for the document is still matching the ETag sent in the If-None-Match header, the server won’t send the actual document. Both If-None-Match and If-Modified-Since can be present in the same request, but the ETag takes precedence over the If-Modified-Since, as it is considered more accurate.

There are a lot more headers and a lot to explore. If you want to know more, check out [here](https://www.google.com/url?q=https://en.wikipedia.org/wiki/List_of_HTTP_header_fields&sa=D&ust=1460140076629000&usg=AFQjCNHMTe05Wkomeyd8bB9GvVrUyuC1Dg) for more information on HTTP headers.

### eg
```HHTP/1.1 
Host: test.com
X-Udacity-Exercise-Header: Sprinkles are awesome
Date: Wed, 11 Jan 1995 23:00:00 GMT
```

## Netcat
Netcat is a utility that's used for sending and receiving messages over a network connection. Netcat is known as the Swiss Army knife of networking tools, and we'll be using it to communicate directly with a server.

### Netcat command
There are many variations of Netcat, and the one I'll be using is accessed with the nc command.

## RESTFUL APIs
A RESTful API is one that follows a design called REST that works expecially well with HTTP,

**REST = REpresentational State Transfer**


