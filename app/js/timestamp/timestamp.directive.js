import template from './timestamp.tpl.html!text';
import TimestampCtrl from './timestamp.controller';

// <build-time></build-time> directive
function buildTime() {
  return {
    restrict: "E",
    replace: true,
    template: template,
    bindToController: true,
    controllerAs: 'vm',
    controller: TimestampCtrl,
    link: function(scope, elem) {
      console.log('Show build time!');
    }
  };
}

buildTime.$inject = [];

export default buildTime;