# HTTP(Hypertext Transfer protocol) and Web Servers

An HTTP transaction always involves a client and a server.

Displaying a simple web page can involve dozens of requests — for the HTML page itself, for images or other media, and for additional data that the page needs.

You're using an HTTP client right now — your web browser. Your browser sends HTTP requests to web servers, and servers send responses back to your browser.

HTTP was originally created to serve hypertext documents, but today is used for much more. As a user of the web, you're using HTTP all the time.

Applications that you use in a web browser, and mobile services, are both likely to use HTTP. But low-level network tests such as ping do not.

A lot of smartphone apps use HTTP under the hood to send requests and receive data. Web browsers are just the most common — and complicated — user interface for web technology. But browsers are not the only web client around. HTTP is powerful and widely supported in software, so it's a common choice for programs that need to talk to each other across the network, even if they don't look anything like a web browser.


## Exercise: Running your first web server
So what about the other end, the web server? Well, it turns out that a web server can actually be a lot simpler than a browser. Browsers have all this user interface and animation and graphics stuff going on. A server just needs to do one thing: handle incoming requests.

The **Python http.server** module can run a built-in web server on your computer. It's not a web app you'd publish to the world; it's a demonstration of Python's HTTP abilities. We'll be referring to this as the demo server in this lesson.

So, let's get started with the demo web server.

Open up a terminal; cd to a directory that has some files in it — maybe a directory containing some text files, HTML files, or images — then run `python -m http.server 8000` in your terminal.

Now try accessing `http://localhost:8000/` from your browser, and you should see your index.html page load up. 

That's the Python demo web server, running on your own computer. It serves up files on your local disk so you can look at them in your browser, and if you have another computer on the same local network, you could use it to access files served up by this server.

When you put localhost:8000 in your browser, your browser sends an HTTP request to the Python program you're running. That program responds with a piece of data, which your browser presents to you.

## What's a server anyway?
A server is just a program that accepts connections from other programs on the network.

When you start a server program, it waits for clients to connect to it — like the demo server waiting for your web browser to ask it for a page. Then when a connection comes in, the server runs a piece of code — like calling a function — to handle each incoming connection. A connection in this sense is like a phone call: it's a channel through which the client and server can talk to each other. Web clients send requests over these connections, and servers send responses back.