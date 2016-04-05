import gulp from 'gulp';
import paths from '../paths';
import browserSync from 'browser-sync';

const reload = browserSync.reload;

// Report function
function message(event) {
  console.log('File ' + event.path + ' was ' + event.type);
}

// Watch changes of scripts, html templates and styles
gulp.task('watch', ['build'], () => {
  gulp.watch([paths.sources], ['scripts', reload]).on('change', message);
  gulp.watch([paths.html], ['html', reload]).on('change', message);
  gulp.watch([paths.sass], ['styles', reload]).on('change', message);
});
