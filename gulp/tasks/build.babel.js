import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';
import paths from '../paths';
import browserSync from 'browser-sync';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('styles', () => {
  return gulp.src(paths.sass)
    .pipe($.plumber())
    .pipe($.changed(paths.sass, {extension: '.css'}))
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(paths.dist))
    .pipe(reload({stream: true}));
});

gulp.task('scripts', () => {
  return gulp.src(paths.sources)
    .pipe($.plumber())
    .pipe($.changed(paths.dist, {extension: '.js'}))
    .pipe($.sourcemaps.init({loadMaps: true}))
    .pipe($.sourcemaps.write('/sourcemaps', {sourceRoot: '/app'}))
    .pipe(gulp.dest(paths.dist))
    .pipe(reload({stream: true})); 
});


gulp.task('html', () => {
  return gulp.src(paths.templates)
    .pipe($.plumber())
    .pipe($.changed(paths.dist), {extension: '.html'})
    .pipe($.htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(paths.dist)); 
});

gulp.task('build', callback => {
  return runSequence(
    'clean',
    ['styles', 'scripts', 'html'],
    callback    
  );
});