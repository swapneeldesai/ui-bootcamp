var gulp         = require('gulp');
var rimraf       = require('gulp-rimraf');
var scss         = require('gulp-scss');
var rename       = require('gulp-rename');
var concat       = require('gulp-concat');
var browserify   = require('gulp-browserify');
var jade         = require('gulp-jade');
var runSequence  = require('run-sequence');
var express      = require('express');

/*
  Clean build:
  Deletes previous public folder if found.
*/
gulp.task('clean', function() {
  return gulp.src('public', {
      read: false
    })
    .pipe(rimraf({
      force: true
    }));
});


/*
  Compile JADE:
  Compiles all jade files and outputs to public folder as index.html.
*/

gulp.task('jade', function() {
  return gulp.src('src/server/views/**/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('public'))
});


/*
  Compile SCSS:
  Compiles SCSS to CSS and outputs to public folder as css/*.css:
*/
gulp.task("css", function () {
  return gulp.src("src/client/assets/css/**/*.scss")
      .pipe(scss())
      .pipe(rename({basename: "style"}))
      .pipe(gulp.dest("public/css"));
});


/*
  Browserify and compile CoffeeScript:
  Compiles CoffeeScript to JavaScript and outputs to public folder as js/*.js:
*/
gulp.task('js', function () {
  return gulp.src('src/client/assets/js/index.coffee')
     .pipe(browserify({ transform: ['coffeeify'], extensions: ['.coffee'] }))
     .pipe(concat('index.js'))
     .pipe(gulp.dest('public/js'));
});


/*
  Watch:
  Watches on js, css and jade files. 
*/

gulp.task('watch', function() {
  console.log('Watching...');
  gulp.watch('src/client/assets/css/**/*.scss',  ['css']);
  gulp.watch('src/client/assets/js/**/*.coffee', ['js']);
  gulp.watch('src/server/views/**/*.jade',       ['jade']);
});


/*
  Express server:
  Hosts a static express server at http://localhost:5000
*/

gulp.task('serve', function() {
  var server = express();
  server.use(express.static('./public'));
  server.listen(5000);
  console.log('Server started at http://localhost:5000');
});



gulp.task('bundle', function(callback) {
  return runSequence('clean', 'js', 'css', 'jade', callback)
});

gulp.task('run', function(callback) {
  return runSequence('bundle', 'serve', 'watch', callback);
}); 