import gulp from 'gulp';
import paths from '../paths';
import browserSync from 'browser-sync';

const reload = browserSync.reload;

function message(event) {
  console.log('File ' + event.path + ' was ' + event.type);
}

gulp.task('watch', ['build'], () => {
  gulp.watch([paths.sources], ['scripts', reload]).on('change', message);
  gulp.watch([paths.html], ['html', reload]).on('change', message);
  gulp.watch([paths.sass], ['styles', reload]).on('change', message);
});
