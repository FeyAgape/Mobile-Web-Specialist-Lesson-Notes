# HTTP's Request and Response Cycle

Common abbreviations

SGML - Standard Generalized Markup Language
HTML - HyperText Markup Language
HTTP - Hypertext Transfer Protocol


Example of a HTTP Request
``GET /pictures/kitty.jpg HTTP/1.1
//Header section of the request, and it contains addtional data about the request itself, all of it are optional except for the host
Host: www.google.com
User-Agent: Mozilla/5.0
Connection: keep-alive
Accept: text/html
If-None-Match: b2arb0a1rba``



Example of a HTTP Response
``HTTP/1.1 200 ok
//Header section of the response, and it contains addtional data about the response, all of it are optional except for the Content-Length, has it needs to tell the client how many bytes of data it should expect.
Content-Length: 16824
Server: Apache
Content-Type: Text/html
Date: Wed, 06 Apr 2016
Etag: fd87e6789
<Binary data>``


GET: HTTP method that tells the server to send data to us
POST: HTTP method that instrusts the server to save the data we are sending. 