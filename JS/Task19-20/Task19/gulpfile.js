var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

var paths = {
  scripts: 'app/js/*.js',
  images: 'app/img/*'
};

gulp.task('sass', function () {
   return gulp.src('app/styles/styles.main.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('dist/'));
});

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(concat('script.main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('scss', function() {
  return gulp.src(['app/styles/*.scss', '!app/styles/*styles.main.scss'])
    .pipe(concat('styles.main.scss'))
    .pipe(gulp.dest('app/styles/'));
});


gulp.task('default', ['scss', 'scripts'], function() {
   gulp.watch(['app/styles/*.scss', '!app/styles/*styles.main.scss'], ['scss']);
   gulp.watch('app/styles/styles.main.scss', ['sass']);
});
