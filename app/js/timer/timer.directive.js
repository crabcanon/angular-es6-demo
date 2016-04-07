// <div timer></div> directive
function timer($interval, TimerService) {
  return {
    restrict: "A",
    link: function(scope, element) {  
      // Call TimerService.render() function every single second
      // Attach returned text to html template
      let seconds = 0;
      $interval(() => element.text(TimerService.render(seconds++)), 1000);
    }
  };
}

timer.$inject = ['$interval', 'TimerService'];

export default timer;