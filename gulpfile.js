var gulp         = require('gulp'),
    coffee       = require('gulp-coffee'),
    sass         = require('gulp-sass'),
    jasmine      = require('gulp-jasmine'),
    browserify   = require('gulp-browserify'),
    rename       = require('gulp-rename'),
    runSequence  = require('run-sequence'),
    jasmineNode = require('gulp-jasmine-node');

require('coffee-script/register');

gulp.task('js', function() {
  gulp.src('app/src/index.coffee', {read: false})
    .pipe( browserify({transform: ['coffeeify'], extensions: ['.coffee']}) )
    .pipe( rename({extname: '.js'}) )
    .pipe( gulp.dest('public/js') );
});

gulp.task('css', function() {
  gulp.src('app/styles/**/*.sass')
    .pipe( sass() )
    .pipe( gulp.dest('public/css') );
});

gulp.task('test', function() {
  gulp.src('app/test/**/*.coffee')
    .pipe( jasmineNode() );
});

gulp.task('watch', function() {
  gulp.watch('app/src/**/*.coffee', ['js']);
  gulp.watch('app/styles/**/*.sass', ['css']);
});

gulp.task('default', function(callback) {
  runSequence(['css', 'js'], 'watch', callback);
});
