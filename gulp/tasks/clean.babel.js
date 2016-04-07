
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import paths from '../paths';

const $ = gulpLoadPlugins();

// Clean .tmp folder
gulp.task('cleantmp', () => {
  return gulp.src([paths.tmp])
    .pipe($.clean()); 
});

// Clean dist folder
gulp.task('cleandist', () => {
  return gulp.src([paths.dist])
    .pipe($.clean()); 
});

// Clean dist/jspm_packages folder
gulp.task('cleanjspm', () => {
  return gulp.src('dist/jspm_packages')
    .pipe($.clean()); 
});

// Clean dist/node_modules folder
gulp.task('cleannode', () => {
  return gulp.src('dist/node_modules')
    .pipe($.clean()); 
});