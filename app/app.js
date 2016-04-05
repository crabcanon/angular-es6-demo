import $ from 'jquery';
import angular from 'angular';

import timestampModule from './timestamp/timestamp.module';
import popupModule from './popup/popup.module';
import timerModule from './timer/timer.module';

let appModule = angular.module('kiosked', [timestampModule.name, popupModule.name, timerModule.name]);

angular.element(document).ready(function() {
  angular.bootstrap(document, [appModule.name], {
  	strictDi: true
  });
});