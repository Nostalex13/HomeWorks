var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var paths = {
  scripts: 'app/js/*.js',
  images: 'app/img/*'
};

// gulp.task('asd', function() {
//   console.log('asd');
// });

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// CAN`T TAKE NON-ARRAY OF STRINGS (after 'default')
gulp.task('default', ['scripts']);
