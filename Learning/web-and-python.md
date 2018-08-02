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