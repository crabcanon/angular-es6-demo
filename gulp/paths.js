module.exports = {
  // JS sources.
  sources: 'app/js/**/*.js',
  // app.js entry
  entry: 'app/js/app.js',
  // HTML sources.
  html: '**/*.html',
  // SASS sources.
  sass: 'app/sass/**/*.scss',
  // .tmp
  tmp: '.tmp',
  // dist root
  root: 'dist',
  // Production folder.
  dist: 'dist/public',
  // server.js
  server: 'heroku_node/server.js',
  // package.json
  package: 'heroku_node/package.json' ,
  // jspm packages
  jspm: 'dist/public/jspm_packages',
  // node packages
  node: 'dist/public/node_modules' 
};