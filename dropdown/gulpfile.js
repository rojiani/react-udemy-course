var gulp       = require('gulp');                   /* Build */
var gutil      = require('gulp-util');              /* Logging build output */
var source     = require('vinyl-source-stream');    /* Converts browserify 'readable stream' to 'vinyl stream' required by Gulp */
var browserify = require('browserify');             /* Bundles dependencies */
var watchify   = require('watchify');               /* Autorun Gulp on code changes */
var reactify   = require('reactify');               /* Browserify transform for JSX files */

gulp.task('default', function () {
  var bundler = watchify(browserify({
    entries: ['./src/app.jsx'],
    transform: [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  function build(file) {
    if (file) {
      gutil.log('Recompiling ' + file);
    }
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('main.js'))
      .pipe(gulp.dest('./'));
  };
  build();
  bundler.on('update', build);
});
