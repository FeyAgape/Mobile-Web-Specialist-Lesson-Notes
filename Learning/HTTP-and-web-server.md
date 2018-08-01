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

## Web Address
A web address is also called a URI (Uniform Resource Identifier)

## URI Schemes

1. mailto is used for links to email addresses.

2. data is used to put a piece of hardcoded data directly into a web page, for instance a small image. 

3. magnet is used for links to some file-sharing services such as BitTorrent. 

## Hostname
The Internet tells computers apart by their IP addresses; every piece of network traffic on the Internet is labeled with the IP addresses of the sending and receiving computers. In order to connect to a web server such as www.udacity.com, a client needs to translate the hostname into an IP address. Your operating system's network configuration uses the Domain Name Service (DNS) — a set of servers maintained by Internet Service Providers (ISPs) and other network users — to look up hostnames and get back IP addresses.

In the terminal, you can use the host program to look up hostnames in DNS:

Localhost is 127.0.0.1. Well, that's IPv4 localhost, anyway. 

IPv6 localhost is ::1, which is short for 0000:0000:0000:0000:0000:0000:0000:0001.

**IP addresses** come in two different varieties: the older IPv4 and the newer IPv6. When you see an address like 127.0.0.1 or 216.58.194.164, those are IPv4 addresses. IPv6 addresses are much longer, such as 2607:f8b0:4005:804::2004, although they can also be abbreviated.

## Localhost
The IPv4 address 127.0.0.1 and the IPv6 address ::1 are special addresses that mean "this computer itself" — for when a client (like your browser) is accessing a server on your own computer. The hostname localhost refers to these special addresses.

When you run the demo server, it prints a message saying that it's listening on 0.0.0.0. This is not a regular IP address. Instead, it's a special code for "every IPv4 address on this computer". That includes the localhost address, but it also includes your computer's regular IP address.

A single web server can have lots of different web sites running on it, each with their own hostname. When a client asks the server for a resource, it has to specify what hostname it intends to be talking to.


## Ports
When you told your browser to connect to the demo server, you gave it the URI http://localhost:8000/. This URI has a port number of 8000. But most of the web addresses you see in the wild don't have a port number on them. This is because the client usually figures out the port number from the URI scheme.

For instance, HTTP URIs imply a port number of 80, whereas HTTPS URIs imply a port number of 443. Your Python demo web server is running on port 8000. Since this isn't the default port, you have to write the port number in URIs for it.

What's a port number, anyway? To get into that, we need to talk about how the Internet works. All of the network traffic that computers send and receive — everything from web requests, to login sessions, to file sharing — is split up into messages called packets. Each packet has the IP addresses of the computer that sent it, and the computer that receives it. And (with the exception of some low-level packets, such as ping) it also has the port number for the sender and recipient. IP addresses distinguish computers; port numbers distinguish programs on those computers.

We say that a server "listens on" a port, such as 80 or 8000. "Listening" means that when the server starts up, it tells its operating system that it wants to receive connections from clients on a particular port number. When a client (such as a web browser) "connects to" that port and sends a request, the operating system knows to forward that request to the server that's listening on that port.

Why do we use port 8000 instead of 80 for the demo server? For historical reasons, operating systems only allow the administrator (or root) account to listen on ports below 1024. This is fine for production web servers, but it's not convenient for learning.

The URI in the question is an HTTPS URI. The default port for HTTPS is port 443.


## HTTP GET requests
Take a look back at the server logs on your terminal, where the demo server is running. When you request a page from the demo server, an entry appears in the logs with a message like this:

127.0.0.1 - - [03/Oct/2016 15:45:50] "GET /readme.png HTTP/1.1" 200 -
Take a look at the part right after the date and time. Here, it says "GET /readme.png HTTP/1.1". This is the text of the request line that the browser sent to the server. This log entry is the server telling you that it received a request that said, literally, GET /readme.png HTTP/1.1.

This request has three parts.

The word GET is the method or HTTP verb being used; this says what kind of request is being made. GET is the verb that clients use when they want a server to send a resource, such as a web page or image. Later, we'll see other verbs that are used when a client wants to do other things, such as submit a form or make changes to a resource.

/readme.png is the path of the resource being requested. Notice that the client does not send the whole URI of the resource here. It doesn't say https://localhost:8000/readme.png. It just sends the path.

Finally, HTTP/1.1 is the protocol of the request. Over the years, there have been several changes to the way HTTP works. Clients have to tell servers which dialect of HTTP they're speaking. HTTP/1.1 is the most common version today.

Exercise: Send a request by hand
You can use ncat to connect to the demo server and send it an HTTP request by hand. (Make sure the demo server is still running!)
