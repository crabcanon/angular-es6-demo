import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';
import paths from '../paths';

const $ = gulpLoadPlugins();

// Compile .scss to .css
gulp.task('buildcss', () => {
  return gulp.src(paths.sass)
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.concat('app.css'))
    .pipe($.autoprefixer())
    .pipe($.cssnano())
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.dist));
});

// Compile javascript to dist folder
gulp.task('buildjs', () => {
  return gulp.src('./app/js/app.js')
    .pipe($.jspm({
      selfExecutingBundle: true,
      minify: true,
      skipSourceMaps: true
    }))
    .pipe($.rename('app.min.js'))
    .pipe(gulp.dest(paths.dist));
});

// Compile html templates to dist folder
gulp.task('buildhtml', () => {
  return gulp.src(paths.html)
    .pipe($.replace('.tmp/app.css', 'app.min.css'))
    .pipe($.replace('jspm_packages/system.js', 'app.min.js'))
    .pipe($.replace('<script src="system.config.js"></script>', ''))
    .pipe($.replace("<script>System.import('app/js/app');</script>", ''))
    .pipe(gulp.dest(paths.dist)); 
});

// Build server.js
gulp.task('buildserver', () => {
  return gulp.src(paths.server)
    .pipe(gulp.dest('dist'));
});

// Build package.json
gulp.task('buildpackage', () => {
  return gulp.src(paths.package)
    .pipe(gulp.dest('dist'));
});

// Clean dist folder and rebuild 
gulp.task('build', callback => {
  return runSequence(
    'cleandist',
    ['buildcss', 'buildjs', 'buildhtml', 'buildserver', 'buildpackage'],
    'cleanjspm', 'cleannode',
    callback    
  );
});