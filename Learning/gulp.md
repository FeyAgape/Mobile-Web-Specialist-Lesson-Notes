# Gulp 

[Gulp](http://gulpjs.com/) is a tool that helps you out with several tasks when it comes to web development. It's often used to do front end tasks like:

Reloading the browser automatically whenever a file is saved
Spinning up a web server
Using preprocessors like Sass or LESS
Optimizing assets like CSS, JavaScript, and images
This is not a comprehensive list of things Gulp can do. If you're crazy enough, you can even build a static site generator with Gulp (I've done it!). So yes, Gulp is extremely powerful, but you'll have to learn how to use Gulp if you want to create your own customized build processes.

## Installation

You need to have Node.js (Node) installed onto your computer before you can install Gulp.

If you do not have Node installed already, you can get it by downloading the package installer from [Node's website](https://nodejs.org/).

**When you're done with installing Node, you can install Gulp by using the following command in the command line:**

For Windows
`npm install gulp -g`

For Mac
`sudo npm install gulp -g`

The npm install command we've used here is a command that uses Node Package Manager (npm) to install Gulp onto your computer.

The -g flag in this command tells npm to install Gulp globally onto your computer, which allows you to use the gulp command anywhere on your system.

Mac users need the extra sudo keyword in the command because they need administrator rights to install Gulp globally.

## Creating a Gulp Project

First, we'll create a folder called **project** or whatever you want to name your project. Then run the npm init command from inside that directory:
` npm init`