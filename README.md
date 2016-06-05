# angular-es6-demo ([Live demo](https://angular-es6.herokuapp.com/))
An experimental project in using [ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla), [SystemJS](https://github.com/systemjs/systemjs), [JSPM](http://jspm.io/), [Gulp](http://gulpjs.com/), [Babel](https://babeljs.io/), [AngularJS 1.x](https://angularjs.org/), [Sass](http://sass-lang.com/), [Travis CI](https://travis-ci.org/) and [Heroku](https://dashboard.heroku.com/).

[![GitHub issues](https://img.shields.io/github/issues/crabcanon/angular-es6-demo.svg)](https://github.com/crabcanon/angular-es6-demo/issues)
[![David](https://img.shields.io/david/dev/crabcanon/angular-es6-demo.svg)](https://david-dm.org/crabcanon/angular-es6-demo#info=devDependencies&view=table)
[![Travis](https://img.shields.io/travis/crabcanon/angular-es6-demo.svg)](https://travis-ci.org/crabcanon/angular-es6-demo/builds)
[![Heroku](https://heroku-badge.herokuapp.com/?app=angular-es6&style=flat)](https://angular-es6.herokuapp.com/)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/crabcanon/angular-es6-demo/master/LICENSE)
 
![Screenshot Two](/screenshots/heroku.png)  
 
## About

* This is a npm package originally designed for testing how to craft a complete webapp project from scratch(npm init & jspm init & gulp init) to the final production by employing modern practices and technologies.
* This package could be used to explore:
  * new features of ECMAScript 6.
  * how to use JSPM/SystemJS to maintain your project. 
  * how to construct Gulp tasks with ES6.
  * how to code with AngularJS 1.x in using ES6.
  * a good practice of Sass.
  * how to build a bundle via `jspm bundle`.
  * how to use Travis CI.
  * how to automatically test and deploy a Node.js production to Heroku.
  
## Features(V0.0.1)

* No more `bower`
* No more `RequireJS`(replaced by `ES6 modules`)
* AngularJS 1.x embraces `ES6`.
* Easy to install & run(`npm start`)
* Maintain dependencies by `jspm`
* Watch and reload the webpage in real-time via `gulp` and `browser-sync`
* Bootstrap the webpage via `systemjs`
* CSS3 Flexbox layout
* Build production via `jspm`
* Continuous integration via [`Travis CI`](https://travis-ci.org/)
* Badges by [`shields.io`](http://shields.io/)

## Get started

#### 1. Develop and build production

* Clone the project
* `npm start`
  * For development use.
  * A new '.tmp' folder will be generated.
  * Your default browser will automatically load the webpage which will be refreshed each time when you have anything to change in 'app' folder.
  * Report will be shown in your console if anything goes wrong.
* `gulp build` 
  * For production use.
  * A new 'dist' folder will be generated.
  * All the required .js will be compiled and minified to one single file called 'app.min.js'(in dist/public folder).
  * All the required .scss will be compiled and minified to one single file called 'app.min.css'(in dist/public folder).
  * The original index.html will be rewritten in order to remove useless codes and load new resources(in dist/public folder).
  * In order to easily deploy the production to [Heroku](https://www.heroku.com/home) by using Node.js to serve the generated static files, I additionally create two extra files in the dist folder(server.js and package.json). 
  * If you want to check the production, simply run `cd dist/public` and `python -m SimpleHTTPServer`, then visit 'http://localhost:8000'. Or the easiest way to do in this case(static webpage), is to double-click the index.html file located in dist/public folder.


#### 2. How to depoly your production to Heroku?

##### *Automatically deploy*

As we are using Travis CI for automated test, build and deployment, you are able to do it same way.

* Install [Heroku Toolbelt](https://toolbelt.heroku.com/).
* Install travis RubyGem on your computer: `gem install travis`.
* Fork this repository and clone.
* Check the .travis.yml file of your repository, you will find:
```sh
deploy:
  provider: heroku
  skip_cleanup: true
  api_key:
    secure: [encrypted version of your heroku api key]
  app: angular-es6
  on:
    repo: crabcanon/angular-es6-demo
```
* Login to your Heroku account: `heroku login`.
* Create a new Heroku app: `heroku create`.
* Change the app name to whatever you want on [Heroku](https://dashboard.heroku.com).
* Add an encrypted version of your heroku api key to your .travis.yml file: `travis encrypt $(heroku auth:token) --add deploy.api_key`.
* Replace the app name in .travis.yml to your heroku app name.
* Replace the repo name to your github repo name.
* Or you could directly use the command `travis setup heroku` to achieve above tasks.
* The your .travis.yml will look like:
```sh
deploy:
  provider: heroku
  skip_cleanup: true
  api_key:
    secure: [encrypted version of your heroku api key]
  app: your-heroku-app-name
  on:
    repo: your-github-account/your-github-repo
```
* Push changes to github.
* Visit https://travis-ci.org/ and activate your repository.
* Then Travis CI will be able to test, build and deploy the final production to your Heroku account automatically. Visit 'https://your-heroku-app-name.herokuapp.com'.

##### *Manually deploy*

* Install [Heroku Toolbelt](https://toolbelt.heroku.com/).
* Run following commands:
```sh
$ heroku login
$ cd dist
$ git init
$ git add .
$ git commit -m "first commit"
$ heroku create
$ git remote -v
$ heroku git:remote -a your-remote.git
$ git push heroku master
```
* Visit 'https://your-heroku-app-name.herokuapp.com'.

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

#### 4. Why to use Travis CI?

* Travis CI is an amazing tool for automated test/build/deploy workflow. With the integration of Travis CI, you are able to test and deploy the production to almost all the environments and platforms in real time without worrying about boring setups and so on. The most remarkable advantage is that it will dramatically save your time and make things easier and faster.
* The alternatives to Travis CI include: [circleci.com](https://circleci.com/), [jenkins.io](https://jenkins.io/), [codeship.com](https://codeship.com/), [drone.io](https://drone.io/), [semaphoreci.com](https://semaphoreci.com/), [solanolabs.com](https://www.solanolabs.com/), [wercker.com](http://wercker.com/), [snap-ci.com](https://snap-ci.com/), [buildbot.net](http://buildbot.net/), [cloudbees.com](https://www.cloudbees.com/), [container-solutions.com](http://container-solutions.com/).

#### 5. I choose to be a web developer.

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
- [x] Integrate with [systemjs-builder](https://github.com/systemjs/builder) or [jspm bundle](http://jspm.io/docs/production-workflows.html).
- [x] Automatically test, build and deploy([npm](https://www.npmjs.com/)/[travis-ci](https://travis-ci.org/)/[Heroku](https://www.heroku.com/home)).
- [ ] Create a [yeoman generator](http://yeoman.io/authoring/) for this project.

## License

* [MIT License](http://choosealicense.com/licenses/mit/).

## Author

* Email: sysuhuangye@gmail.com
* Personal website: https://yehuang.me
   
