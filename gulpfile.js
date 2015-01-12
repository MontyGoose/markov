var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('default', function() {
  // place code for your default task here
});


gulp.task('test', function() {
  return gulp.src(['tests/*.spec.js'], { read: false })
    .pipe(mocha({
      reporter: 'spec',
      globals: {
        expect: require('chai').expect
      }
    }));
});
