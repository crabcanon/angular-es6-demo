import timestampDirective from './timestamp.directive';

export default angular.module('timestamp', [])
  .directive('buildTime', timestampDirective);