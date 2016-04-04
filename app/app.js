import $ from 'jquery';
import angular from 'angular';

import timestampModule from './timestamp/timestamp.module';
import popupModule from './popup/popup.module';

let appModule = angular.module('kiosked', [timestampModule.name, popupModule.name]);

angular.element(document).ready(function() {
  angular.bootstrap(document, [appModule.name], {
  	strictDi: true
  });
});