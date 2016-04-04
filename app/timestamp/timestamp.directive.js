import template from './timestamp.tpl.html!text';
import TimestampCtrl from './timestamp.controller';

function buildTime() {
  return {
  	restrict: "E",
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