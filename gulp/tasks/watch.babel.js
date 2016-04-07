import gulp from 'gulp';
import paths from '../paths';
import browserSync from 'browser-sync';

const reload = browserSync.reload;

// Report events function
function message(event) {
  console.log('File ' + event.path + ' was ' + event.type);
}

// Watch changes, reload the webpage and report task status
gulp.task('watch', ['tmp'], () => {
  gulp.watch([paths.sources], ['scripts', reload]).on('change', message);
  gulp.watch([paths.html]).on('change', reload);
  gulp.watch([paths.sass], ['styles', reload]).on('change', message);
});
