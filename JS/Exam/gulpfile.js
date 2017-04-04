var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var uglifycss = require('gulp-uglifycss');

gulp.task('scripts', function() {
  return gulp.src(['app/scripts/*.js', '!app/scripts/scriptBar.js'])
    .pipe(concat('script.main.js'))
    .pipe(babel({
      presets: ['es2015']
      }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts/')),
    /*         React          */
    gulp.src('app/scripts/react/*.js')
     .pipe(gulp.dest('dist/scripts/react')),
    /*          IE       */
    gulp.src('app/scripts/IE/scriptIE.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/scripts/IE'))
});

gulp.task('scss', function() {
  return gulp.src(['app/styles/*.scss', 'app/styles/reset.css'])
    .pipe(concat('styles.main.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('dist/styles/')),
      /*          IE       */
      gulp.src('app/styles/IE/*.scss')
        .pipe(concat('stylesIE.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({
          "maxLineLen": 80,
          "uglyComments": true
        }))
        .pipe(gulp.dest('dist/styles/IE/'));
});

gulp.task('img', function() {
   return gulp.src('app/images/**')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', function() {
   return gulp.src('app/fonts/*')
      .pipe(gulp.dest('dist/fonts/'));
});

gulp.task('watch', function() {
   gulp.watch('app/scripts/*.js', ['scripts']);
   gulp.watch('app/styles/*.scss', ['scss']);
});

gulp.task('default', ['scss', 'scripts', 'fonts']);
