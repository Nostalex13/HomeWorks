var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var imagemin = require('gulp-imagemin');

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
    .pipe(gulp.dest('dist'));
});

gulp.task('scss', function() {
  return gulp.src(['app/styles/*.scss', '!app/styles/*styles.main.scss'])
    .pipe(concat('styles.main.scss'))
    .pipe(gulp.dest('app/styles/'));
});

gulp.task('images', function() {
   return gulp.src('app/img/**/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images'));
});

gulp.task('default', ['scss', 'scripts', 'images'], function() {
   gulp.watch(['app/styles/*.scss', '!app/styles/*styles.main.scss'], ['scss']);
   gulp.watch('app/styles/styles.main.scss', ['sass']);
   gulp.watch(paths.scripts, ['scripts']);
});
