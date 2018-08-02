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