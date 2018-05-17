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

npm init will prompt you: to enter the project name, version, description, etc

**Example** 

`package.json:`

`{
  "name": "project",
  "version": "1.0.0",
  "description": "This is a gulp project",
  "main": "index.js",
  "scripts": {
    "test": "echo"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Username/Project.git"
  },
  "author": "First-name Last-name",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Username/Project/issues"
  },
  "homepage": "https://github.com/Username/Project#readme"
}`


### Step 1

The first dependency in our project is Gulp since we’re using it as our build tool. You’ll have to install gulp within the project folder by augmenting the install code slightly:

`npm install gulp --save-dev`

This time, we're installing Gulp into project instead of installing it globally, which is why there are some differences in the command.

You'll see that the sudo keyword isn't required because we're not installing Gulp globally, so -g is also not necessary. We've added --save-dev, which tells the computer to add gulp as a dev dependency in package.json

**If you check the project folder when the command has finished executing, you should see that Gulp has created a node_modules folder. You should also see a gulp folder within node_modules.**

### Step 2

Next, we’ll have to create a file structure and a gulpfile.js file to store all our Gulp configurations.

Create the structure of your app: (here is a generic webapp structure)

`  |- app/
      |- css/
      |- fonts/
      |- images/ 
      |- index.html
      |- js/ 
      |- scss/
  |- dist/
  |- gulpfile.js
  |- node_modules/
  |- package.json`

In this structure, the app folder will store all our written code, and the dist folder will be used to store code that’s production-ready.