// Import dev-dependencies
import angular from 'angular';

// Import directive modules
import timestampModule from './timestamp/timestamp.module';
import popupModule from './popup/popup.module';
import timerModule from './timer/timer.module';

// Construct angular app module via dependency injection
let appModule = angular.module('kiosked', [timestampModule.name, popupModule.name, timerModule.name]);

// Bootstrap the webpage when DOM is ready
angular.element(document).ready(function() {
  angular.bootstrap(document, [appModule.name], {
    strictDi: true
  });
});