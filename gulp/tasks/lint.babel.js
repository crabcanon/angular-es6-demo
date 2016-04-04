import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import paths from '../paths';
import stylish from 'jshint-stylish';
import browserSync from 'browser-sync';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

function lint(files, options) {
  return () => {
    return gulp.src(files)
    .pipe(reload({stream: true, once: true}))
    .pipe($.eslint(options))
    .pipe($.eslint.format())
    .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
  };
}

gulp.task('es6lint', lint(paths.sources));

gulp.task('es5lint', () => {
  return gulp.src(paths.sources)
    .pipe($.jshint)
    .pipe($.jshint.reporter(stylish));
});