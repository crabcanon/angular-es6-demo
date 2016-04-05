import popupDirective from './popup.directive';
import popupCtrl from './popup.controller';

export default angular.module('popup', [])
  .directive('popupWindow', popupDirective)
  .controller('PopupCtrl', popupCtrl);