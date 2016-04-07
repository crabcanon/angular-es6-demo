# kiosked-assignment
An experimental project in using [ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla) via [SystemJS](https://github.com/systemjs/systemjs), [JSPM](http://jspm.io/), [Gulp](http://gulpjs.com/), [Babel](https://babeljs.io/) and [AngularJS 1.x](https://angularjs.org/).
 
![Screenshot One](/screenshots/one.png) 
![Screenshot Two](/screenshots/two.png) 
 
## About

* This is a npm package originally designed for testing how to craft a complete webapp project from scratch(npm init & jspm init & gulp init) by employing modern practices and technologies.
* This package could be used to explore:
  * new features of ECMAScript 6.
  * how to use JSPM/SystemJS to maintain your project. 
  * how to construct Gulp tasks with ES6.
  * how to code with AngularJS 1.x in using ES6.
  * a good practice of Sass.
  
## Features(V1.0.0)

* No more `bower`
* No more `RequireJS`(replaced by `ES6 modules`)
* AngularJS 1.x embraces `ES6`.
* Easy to install & run(`npm start`)
* Maintain dependencies by `jspm`
* Watch and reload the webpage in real-time via `gulp` and `websocket`
* Bootstrap the webpage via `systemjs`
* Compile Sass via `gulp-sass`
* CSS3 Flexbox layout

## Get started

* Clone the project
* `npm start`
  * For development use.
  * A new folder called '.tmp' will be automatically generated.
  * Your default browser will automatically load the webpage which will be refreshed each time when you have anything to change in 'app' folder.
  * The report will be shown in your console if anything goes wrong.
* `gulp build` 
  * For production use.
  * A new folder called 'dist' will be automatically generated.
  * All the .js will be compiled and minified to one single file called 'app.min.js'.
  * All the .css will be compiled and minified to one single file called 'app.min.css'.
  * The original index.html will be rewritten and re-generated in order to remove useless codes and load new .js and .css files.



## Motivation

#### 1. Why to use ES6?

* AngularJS 2 fully supports TypeScript and works equally well with ES6.
* React fully supports ES6.
* The sugar syntax and new features make things easier and more clear. It's time to embrace!

#### 2. Why not to use bower?

* Some amazing libs don't support bower anymore, for example [Mapbox](https://github.com/mapbox).
* [Bower is effectively not developed anymore.](https://github.com/mapbox/mapbox-gl-js/issues/1342)
* It's a good practice to let npm handle everything somehow. No need to add one more layer.
* It requires more configurations in Gulpfile to run the app if using bower.

#### 3. Why to use jspm?

* JSPM is based on the standard of ES2015 modules and System loader API. Currently, Loader API is the API of browsers and hasn't been able to be parts of ES2015(we only have a proposal from WHATWG for now). But once it becomes a standard specification, with the integration of HTTP/2, we are able to write ES2015 modules without building. 
* But of course, it seems like JSPM is heavier(45k after compile) and not powerful enough compared to Webpack in current phase.  

#### 4. I choose to be a web developer.

* If you try to embrace web technologies, you actually choose a way to embrace changes.
* [A good article to know.](https://jjperezaguinaga.com/2014/03/19/why-cant-we-find-front-end-developers/)

## TODO List(solid requirements)

- [x] Title: “Build test”.
- [x] Paragraph: “This page was built from dynamic content at `time`”, where `time` is the time at build time.
- [x] Button name: 'Click me'.
- [x] The title, paragraph and button text should not be black, but should be the same colour.
- [x] The background of the button should also be the same colour, but 25% lighter.
- [x] A popup modal will be shown if click the button.
- [x] Counter counting up from 0 (at least show the seconds changing).
- [x] Close and reopen the modal.
- [x] Content’s font-size should be dependant on the screen size.
- [x] Use a build tool (npm/grunt/gulp) to compose your built product.
- [x] Use SASS (scss).
- [x] Show understanding of variables and functions (lighter colour).
- [x] Show understanding of mixins (CSS media queries).
- [x] Push the code to Github as a public open source project.
- [x] Add a README to the Github repo containing information about building and running your code.
- [x] A “watcher” task that watches for code changes and builds again.
- [x] Neatness and documentation.
- [x] Modern practices and technologies. 

## TODO List(further requirements)

- [ ] Unit/Middleware/E2E Test with [Karma](https://karma-runner.github.io/0.13/index.html)/[Chai](http://chaijs.com/)/[Protractor](https://angular.github.io/protractor/#/).
- [x] Integrate with [systemjs-builder](https://github.com/systemjs/builder).
- [x] Automatically build and deploy([npm](https://www.npmjs.com/)/[travis-ci](https://travis-ci.org/)/[Heroku](https://www.heroku.com/home)).
- [ ] Create a [yeoman generator](http://yeoman.io/authoring/) for this project.

## License

* [MIT Licensed](http://choosealicense.com/licenses/mit/).

## Author

* Email: sysuhuangye@gmail.com
* Personal website: https://yehuang.me
   
