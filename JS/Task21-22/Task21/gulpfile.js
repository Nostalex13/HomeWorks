var gulp = require('gulp');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');

var paths = {
  scripts: 'app/js/*.js',
  images: 'app/img/**'
};

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(concat('script.main.js'))
    .pipe(babel({
      presets: ['es2015']
      }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts/'));
});

gulp.task('css', function() {
  return gulp.src(['app/css/*.css', '!app/css/styles.main.css'])
    .pipe(concat('styles.main.css'))
    .pipe(gulp.dest('dist/styles/'));
});

gulp.task('watch', function() {
   gulp.watch('app/css/*.css', ['css']);
   gulp.watch(paths.scripts, ['scripts']);
});


gulp.task('default', ['css', 'scripts']);
