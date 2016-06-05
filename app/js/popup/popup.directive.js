import template from './popup.tpl.html!text';
import PopupCtrl from './popup.controller';

// <popup-window show="expression"></popup-window> directive
function popupWindow() {
  return {
    restrict: "E",
    scope: {
      show: '='
    },
    replace: true,
    transclude: true,
    template: template,
    bindToController: true,
    controllerAs: 'vm',
    controller: PopupCtrl,
    link: function(scope, element) {
      let ctrl = scope.vm;
      ctrl.hideModal = () => { ctrl.show = false; }
      ctrl.openModal = () => { ctrl.show = !ctrl.show; }
    }
  };
}

popupWindow.$inject = [];

export default popupWindow;