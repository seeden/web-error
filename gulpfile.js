import gulp from 'gulp';
import mocha from 'gulp-mocha';
import babel from 'gulp-babel';

gulp.task('test', () =>
  gulp.src('./tests/**/*.js')
    .pipe(mocha({
      timeout: 5000,
    }))
);

gulp.task('build', () =>
  gulp.src('./src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./dist'))
);
