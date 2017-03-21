var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');

var paths = {
  scripts: 'app/js/*.js',
  images: 'app/img/*'
};

// gulp.task('asd', function() {
//   console.log('asd');
// });

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(concat('script.main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});

gulp.task('css', function () {
  gulp.src('./styles/**/*.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('scss', function() {
  return gulp.src('app/styles/*.css')
    .pipe(concat('styles.main.css'))
    .pipe(uglifycss())
    .pipe(gulp.dest('dist/'));
});

// CAN`T TAKE NON-ARRAY OF STRINGS (after 'default')
gulp.task('default', ['scripts', 'scss']);
