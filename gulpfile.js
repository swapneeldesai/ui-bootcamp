var gulp = require('gulp'),
    coffee = require('gulp-coffee'),
    sass = require('gulp-sass'),
    jasmine = require('gulp-jasmine');

require('coffee-script/register');

gulp.task('js', function() {
  gulp.src('app/src/*.coffee')
    .pipe( coffee() )
    .pipe( gulp.dest('public/js') );
});

gulp.task('css', function() {
  gulp.src('app/styles/*.sass')
    .pipe( sass() )
    .pipe( gulp.dest('public/css') );
});

gulp.task('watch', function() {
  gulp.watch('app/src/**/*.coffee', ['js']);
  gulp.watch('app/styles/**/*.sass', ['css']);
});

gulp.task('jasmine', function() {
  gulp.src('app/test/*.coffee')
    .pipe( jasmine() );
});
