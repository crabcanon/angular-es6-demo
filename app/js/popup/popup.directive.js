// import template from './popup.tpl.html!text';
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
    template: '<section id="popup-section" class="section-item">' + 
                '<button id="popup-button" class="btn btn-yellow" ng-show="!vm.show" ng-click="vm.openModal()">Click me!</button>' + 
                '<div id="popup-modal" ng-show="vm.show">' + 
                  '<button class="modal-header btn btn-yellow" ng-click="vm.hideModal()">Close modal</button>' + 
                  '<div class="modal-content">' + 
                    '<div id="timer" timer ng-if="vm.show"></div>' + 
                  '</div>' + 
                '</div>' + 
              '</section>',
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