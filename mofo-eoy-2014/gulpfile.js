var fs = require('fs');
var gulp = require('gulp');
var replace = require('gulp-replace');
var rename = require('gulp-rename');
var connect = require('gulp-connect');

gulp.task('build', function() {
  var css = fs.readFileSync('snippet.css');
  var js = fs.readFileSync('snippet.js');

  gulp.src('index.template')
    .pipe(rename('index.html'))
    .pipe(replace('%-css-%', css))
    .pipe(replace('%-js-%', js))
    .pipe(gulp.dest('./build/'));
});

gulp.task('watch', function () {
  var watcher = gulp.watch(['index.template'], ['build']);
});

gulp.task('connect', function() {
  connect.server({
    root: 'build',
    port: 2014
  });
});

gulp.task('default', ['build', 'connect', 'watch']);
