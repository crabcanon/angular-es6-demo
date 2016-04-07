import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';
import paths from '../paths';
import browserSync from 'browser-sync';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

// Compile .scss to .css
gulp.task('styles', () => {
  return gulp.src(paths.sass)
    .pipe($.plumber())
    .pipe($.changed(paths.sass, {extension: '.scss'}))
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(paths.tmp))
    .pipe(reload({stream: true}));
});

// Compile javascript to dist folder
gulp.task('scripts', () => {
  return gulp.src(paths.sources)
    .pipe($.plumber())
    .pipe($.changed(paths.tmp, {extension: '.js'}))
    .pipe($.sourcemaps.init({loadMaps: true}))
    .pipe($.sourcemaps.write('/sourcemaps', {sourceRoot: '/app'}))
    .pipe(gulp.dest(paths.tmp))
    .pipe(reload({stream: true})); 
});


// Clean .tmp folder and rebuild 
gulp.task('tmp', callback => {
  return runSequence(
    'cleantmp',
    ['styles', 'scripts'],
    callback    
  );
});