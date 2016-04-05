import gulp from 'gulp';
import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';

// Serve the webapp in port http://localhost:9000
gulp.task('serve', ['watch'], done => {
   browserSync({
     open: true,
     port: 9000,
     server: {
       baseDir: ['.'],
       middleware: [historyApiFallback()]
     }
   }, done); 
});