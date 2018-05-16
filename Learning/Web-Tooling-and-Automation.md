# Web Tooling and Automation 

## Sublime (IDE)

## Gulp (build tool) focuses on code
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

## Grunt (build tool) focuses on configuration

### Build Tools pros to look for
1. Fast
2. Community-driven
3. Modular and extensible
4. Feature-rich

## Expressive Live Editing tools 

**Install browser-sync.**
Create a browser-sync object and initialize the server.

``var browserSync = require('browser-sync').create();
 browserSync.init({
     server: "./"
 });
 browserSync.stream();``
 
Run gulp in Terminal, see how browser opens with the page open.