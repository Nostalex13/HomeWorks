var gulp = require('gulp');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var watch = require('gulp-watch');

var paths = {
  scripts: 'js/*.js'
};

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(concat('script.main.js'))
    .pipe(gulp.dest('dist/scripts/'));
});

gulp.task('css', function() {
   return gulp.src('css/*.css')
     .pipe(concatCss("styles.main.css"))
     .pipe(gulp.dest('dist/styles/'));
});

// gulp.task('watch', function functionName() {
//    gulp.watch(paths.scripts, ['scripts']);
// });

gulp.task('default', ['css', 'scripts']);
