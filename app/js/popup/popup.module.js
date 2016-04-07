import popupDirective from './popup.directive';
import popupCtrl from './popup.controller';

// Export popupModule
export default angular.module('popup', [])
  .directive('popupWindow', popupDirective)
  .controller('PopupCtrl', popupCtrl);