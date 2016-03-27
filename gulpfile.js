var gulp = require('gulp'),
    coffee = require('gulp-coffee'),
    sass = require('gulp-sass');


gulp.task('js', function() {
  gulp.src('app/src/*.coffee')
    .pipe( coffee() )
    .pipe( gulp.dest('public/js') );
})

gulp.task('css', function() {
  gulp.src('app/styles/*.sass')
    .pipe( sass() )
    .pipe( gulp.dest('public/css') );
})
