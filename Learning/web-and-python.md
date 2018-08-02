# Python's http.server
look at the sections on classes in our Programming Foundations with Python [course](https://classroom.udacity.com/courses/ud036).

## Servers and handlers
Web servers using http.server are made of two parts: the HTTPServer class, and a request handler class. The first part, the HTTPServer class, is built in to the module and is the same for every web service. It knows how to listen on a port and accept HTTP requests from clients. Whenever it receives a request, it hands that request off to the second part — a request handler — which is different for every web service.

Here's what your Python code will need to do in order to run a web service:

1. Import http.server, or at least the pieces of it that you need.

2. Create a subclass of http.server.BaseHTTPRequestHandler. This is your handler class.

3. Define a method on the handler class for each HTTP verb you want to handle. (The only HTTP verb you've seen yet in this course is GET, but that will be changing soon.)
a. The method for GET requests has to be called do_GET.
b. Inside the method, call built-in methods of the handler class to read the HTTP request and write the response.

4. Create an instance of http.server.HTTPServer, giving it your handler class and server information — particularly, the port number.

5. Call the HTTPServer instance's run_forever method.

Once you call the HTTPServer instance's run_forever method, the server does that — it runs forever, until stopped. Just as in the last lesson, if you have a Python server running and you want to stop it, type Ctrl-C into the terminal where it's running. (You may need to type it two or three times.)


## What About .Encode()?

`self.wfile.write("Hello, HTTP!\n".encode())`


An HTTP response could contain any kind of data, not only text. And so the self.wfile.write method in the handler class expects to be given a bytes object — a piece of arbitrary binary data — which it writes over the network in the HTTP response body.

If you want to send a string over the HTTP connection, you have to encode the string into a bytes object. The encode method on strings translates the string into a bytes object, which is suitable for sending over the network. There is, similarly, a decode method for turning bytes objects into strings.

That's all you need to know about text encodings in order to do this course. However, if you want to learn even more, read on ...

**The long version**
Text strings look simple, but they are actually kind of complicated underneath. There are a lot of different ways that computers can represent text in memory and on the network.

Older software — including older versions of Python — tended to assume that each character takes up only one byte of memory. That works fine for some human languages, like English and Russian, but it doesn't work at all for other human languages, like Chinese; and it really doesn't work if you want to handle text from multiple languages in the same program.

These words all mean cat:
gato قط 猫 گربه кіт बिल्ली ねこ

The Web is international, so browsers and servers need to support all languages. This means that the old one-byte assumption is completely thrown out. But when programs use the network, they need to know how long a piece of data is in terms of bytes. That has to be figured out unambiguously at some point in time. The way Python does this is by making us encode strings into bytes objects when we want to send them over a binary channel (such as an HTTP connection).

This Japanese word for cat is two characters long. But when it's encoded in binary, it's six bytes long:

>>> len('ねこ')
2
>>> len('ねこ'.encode())
6

The most common encoding these days is called `UTF-8`. It is supported by all major and minor browsers and operating systems, and it supports characters for almost all the world's languages. In UTF-8, a single character may be represented as anywhere from one to four bytes, depending on language.

English text with no accent marks still takes up one byte per character:

>>> len('cat')
3
>>> len('cat'.encode())
3

UTF-8 is the default encoding in Python. When you call the encode method on a string without passing it another encoding, it assumes you mean UTF-8. This is the right thing to do.

## Queries and quoting: Unpacking query parameters
When you take a look at a URI for a major web service, you'll often see several query parameters, which are a sort of variable assignment that occurs after a ? in the URI. For instance, here's a Google Image Search URI:

https://www.google.com/search?q=gray+squirrel&tbm=isch

This will be sent to the web server as this HTTP request:

GET /search?q=gray+squirrel&tbm=isch HTTP/1.1
Host: www.google.com
The query part of the URI is the part after the ? mark. Conventionally, query parameters are written as key=value and separated by & signs. So the above URI has two query parameters, q and tbm, with the values gray+squirrel and isch.

(isch stands for Image Search. I'm not sure what tbm means.)

There is a Python library called urllib.parse that knows how to unpack query parameters and other parts of an HTTP URL. (The library doesn't work on all URIs, only on some URLs.) Take a look at the urllib.parse documentation here. 


## URL quoting
Did you notice that 'gray+squirrel' in the query string became 'gray squirrel' in the output of parse_qs? HTTP URLs aren't allowed to contain spaces or certain other characters. So if you want to send these characters in an HTTP request, they have to be translated into a "URL-safe" or "URL-quoted" format.

"Quoting" in this sense doesn't have to do with quotation marks, the kind you find around Python strings. It means translating a string into a form that doesn't have any special characters in it, but in a way that can be reversed (unquoted) later.

(And if that isn't confusing enough, it's sometimes also referred to as URL-encoding or URL-escaping).

One of the features of the URL-quoted format is that spaces are sometimes translated into plus signs. Other special characters are translated into hexadecimal codes that begin with the percent sign.


## Exercise: HTML and forms
Most of the time, query parameters don't get into a URL by the user typing them out into the browser. Query parameters often come from a user submitting an HTML form. So dust off your HTML knowledge and let's take a look at a form that gets submitted to a server.

Here's a piece of HTML that contains a form:

```
<!DOCTYPE html>
<title>Login Page</title>
<form action="http://localhost:8000/" method="GET">
<label>Username:
  <input type="text" name="username">
</label>
<br>
<label>Password:
  <input type="password" name="pw">
</label>
<br>
<button type=submit>Log in!</button>
```


## Form methods: GET and POST
When a browser submits a form via GET, it puts all of the form fields into the URI that it sends to the server. These are sent as a query, in the request path — just like search engines do. They're all jammed together into a single line. Since they're in the URI, the user can bookmark the resulting page, reload it, and so forth.

This is fine for search engine queries, but it's not quite what we would want for (say) a form that adds an item to your shopping cart on an e-commerce site, or posts a new message on a comments board. GET methods are good for search forms and other actions that are intended to look something up or ask the server for a copy of some resource. But GET is not recommended for actions that are intended to alter or create a resource. For this sort of action, HTTP has a different verb, POST.



## Idempotence
Vocabulary word of the day: idempotent. An action is idempotent if doing it twice (or more) produces the same result as doing it once. "Show me the search results for 'polar bear'" is an idempotent action, because doing it a second time just shows you the same results. "Add a polar bear to my shopping cart" is not, because if you do it twice, you end up with two polar bears.

POST requests are not idempotent. If you've ever seen a warning from your browser asking you if you really mean to resubmit a form, what it's really asking is if you want to do a non-idempotent action a second time.

Adding zero to a number is idempotent, since you can add zero as many times as you want and the original number is unchanged. Adding five to a number is not idempotent, because if you do it twice you'll have added ten. Setting a variable to the value 5 is idempotent: doing it twice is the same as doing it once. Looking up an entry in a dictionary doesn't alter anything, so it's idempotent.



## Post-Redirect-Get
There's a very common design pattern for interactive HTTP applications and APIs, called the PRG or Post-Redirect-Get pattern. A client POSTs to a server to create or update a resource; on success, the server replies not with a 200 OK but with a 303 redirect. The redirect causes the client to GET the created or updated resource.

This is just one of many, many ways to architect a web application, but it's one that makes good use of HTTP methods to accomplish specific goals. For instance, wiki sites such as Wikipedia often use Post-Redirect-Get when you edit a page.



## Making requests
The requests library is a Python library for sending requests to web servers and interpreting the responses. It's not included in the Python standard library, though; you'll need to install it. 
In your terminal, run `pip3 install requests` to fetch and install the requests library.

`requests.get("http://localhost:8000/")`

 r.content is a bytes object representing the literal binary data that the server sent. r.text is the same data but interpreted as a str object, a Unicode string.

If the requests.get call can reach an HTTP server at all, it will give you a Response object. If the request failed, the Response object has a status_code data member — either 200, or 404, or some other code.

But if it wasn't able to get to an HTTP server, for instance because the site doesn't exist, then requests.get will raise an exception.

However: Some Internet service providers will try to redirect browsers to an advertising site if you try to access a site that doesn't exist. This is called DNS hijacking, and it's nonstandard behavior, but some do it anyway. If your ISP hijacks DNS, you won't get exceptions when you try to access nonexistent sites. Standards-compliant DNS services such as Google Public DNS don't hijack.



## Using a JSON(Javascript Object Notation) API
As a web developer, you will deal with data in a lot of different formats, especially when your code calls out to APIs provided by other developers. It's not uncommon for a large software system to have parts that deal with a dozen or more different data formats. Fortunately, usually someone else has already written libraries to help you read and write these formats.

JSON is a data format based on the syntax of JavaScript, often used for web-based APIs. There are a lot of services that let you send HTTP queries and get back structured data in JSON format. You can read more about the JSON format at [http://www.json.org/](http://www.json.org/).

Python has a built-in json module; and as it happens, the requests module makes use of it. A Response object has a .json method; if the response data is JSON, you can call this method to translate the JSON data into a Python dictionary.



## 