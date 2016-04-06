import timestampDirective from './timestamp.directive';

// Export timestampModule
export default angular.module('timestamp', [])
  .directive('buildTime', timestampDirective);