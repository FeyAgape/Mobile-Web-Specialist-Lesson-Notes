# Web Tooling and Automation 

Automation and tooling can make you more productive as a developer and allow you to work more faster and more efficiently

## Sublime (IDE)

## Build Tools pros to look for

Leveraging the power of build tools like Gulp and Grunt to automate he process f converting your developemnt code into streamlined production ready

1. Fast
2. Community-driven
3. Modular and extensible
4. Feature-rich

### Gulp (build tool) focuses on code
[Gulp Tutorial](https://zellwk.com/blog/gulp-tutorial/)

### To install gulp sass pulgin in your terminal after installing Node.js and Gulp on your machine

`npm install gulp-sass`

Gulp does this watching by providing us with a watch method that allows you to run any task whenever a file is changed.

``// Gulp watch syntax
gulp.watch('files-to-watch', ['tasks', 'to', 'run']);``

Instead of just watching the Sass files alone, you’ll often want to watch many types of files and run different tasks during a development process. In order to achieve that, we can create a watch gulp task that watches different files.

``gulp.task('watch', function() {
  gulp.watch('app/scss/styles.scss', ['sass']);
  // ... Other watchers
});``

Now if you run the watch command you’ll see that gulp immediately starts watching your files for changes.

### Grunt (build tool) focuses on configuration


## Expressive Live Editing tools 

Live editing tools can cause any connected browsers to automatically relaod if you change any files.

**Install browser-sync.**
Create a browser-sync object and initialize the server.

``var browserSync = require('browser-sync').create();
 browserSync.init({
     server: "./"
 });
 browserSync.stream();``
 
Run gulp in Terminal, see how browser opens with the page open.