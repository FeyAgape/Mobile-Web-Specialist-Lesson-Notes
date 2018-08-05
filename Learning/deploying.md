# Deploying to a hosting service 

A server usually needs to have a stable (static) IP address so that clients can find it and connect to it.

 [Heroku](https://heroku.com/), a commercial service that will host it on the web where it will be publicly accessible.

## Check in your code
Heroku (and many other web hosting services) works closely with Git: you can deploy a particular version of your code to Heroku by pushing it with the git push command. So in order to deploy your code, it first needs to be checked into a local Git repository.

## Concurrency
Being able to handle two ongoing tasks at the same time is called concurrency, and the basic http.server.HTTPServer doesn't have it. It's pretty straightforward to plug concurrency support into an HTTPServer, though. The Python standard library supports doing this by adding a mixin to the HTTPServer class. A mixin is a sort of helper class, one that adds extra behavior the original class did not have.
