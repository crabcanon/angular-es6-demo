import TimerService from './timer.service';

function timer($interval, TimerService) {
  return {
  	restrict: "A",
  	link: function(scope, element) {
      let seconds = 0;
      $interval(() => element.text(TimerService.render(seconds++)), 1000);
  	}
  };
}

timer.$inject = ['$interval', 'TimerService'];

export default timer;