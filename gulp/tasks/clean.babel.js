
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import paths from '../paths';

const $ = gulpLoadPlugins();

// Clean task
gulp.task('clean', () => {
  return gulp.src([paths.dist])
    .pipe($.clean()); 
});