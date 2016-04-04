import popupDirective from './popup.directive';
import popupCtrl from './popup.controller';

export default angular.module('popup', [])
  .controller('PopupCtrl', popupCtrl)
  .directive('popupWindow', popupDirective);