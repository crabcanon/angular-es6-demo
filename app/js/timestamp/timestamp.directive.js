// import template from './timestamp.tpl.html!text';
import TimestampCtrl from './timestamp.controller';

// <build-time></build-time> directive
function buildTime() {
  return {
    restrict: "E",
    replace: true,
    template: '<section id="time-section" class="section-item">' + 
                 '<div class="build-time">' + 
                    '<h1>Build Test</h1>' + 
                    '<h2>This page was built from dynamic content at {{vm.timestamp | date: "yyyy-MM-dd HH:mm:ss"}}</h2>' + 
                  '</div>' + 
              '</section>',
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